import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function usePortfolioMotion(scopeRef) {
  useGSAP(
    () => {
      const reduceMotion =
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
      const isTest = process.env.NODE_ENV === "test";
      let lenis;
      let lenisRaf;
      let introFallback;
      let topLockFrame;
      let previousScrollRestoration;
      let updateDockVisibility;
      let cleanupPreviewMotion;
      let cleanupAnchorScroll;
      let dockState = "floating";
      let dockShown = false;
      let dockMorph;
      const blockScrollKeys = new Set([
        " ",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "End",
        "Home",
        "PageDown",
        "PageUp",
      ]);
      const preventScroll = (event) => {
        event.preventDefault();
      };
      const preventScrollKeys = (event) => {
        if (blockScrollKeys.has(event.key)) {
          event.preventDefault();
        }
      };
      const forceTop = () => {
        try {
          window.scrollTo?.(0, 0);
        } catch {
          // JSDOM exposes scrollTo but does not implement it.
        }
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };
      const keepTopLocked = () => {
        forceTop();
        if (document.documentElement.classList.contains("intro-lock")) {
          topLockFrame = window.requestAnimationFrame(keepTopLocked);
        }
      };
      const startLenis = () => {
        if (reduceMotion || isTest || lenis) {
          return;
        }

        lenis = new Lenis({
          duration: 1.18,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        lenis.on("scroll", ScrollTrigger.update);
        lenisRaf = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(lenisRaf);
        gsap.ticker.lagSmoothing(0);
      };
      const lockIntro = () => {
        previousScrollRestoration = window.history.scrollRestoration;
        window.history.scrollRestoration = "manual";
        if (window.location.hash) {
          window.history.replaceState(
            null,
            "",
            `${window.location.pathname}${window.location.search}`
          );
        }
        forceTop();
        document.documentElement.classList.add("intro-lock");
        topLockFrame = window.requestAnimationFrame(keepTopLocked);
        window.addEventListener("wheel", preventScroll, { passive: false, capture: true });
        window.addEventListener("touchmove", preventScroll, {
          passive: false,
          capture: true,
        });
        window.addEventListener("keydown", preventScrollKeys, { capture: true });
      };
      const unlockIntro = () => {
        window.removeEventListener("wheel", preventScroll, { capture: true });
        window.removeEventListener("touchmove", preventScroll, { capture: true });
        window.removeEventListener("keydown", preventScrollKeys, { capture: true });
        if (topLockFrame) {
          window.cancelAnimationFrame(topLockFrame);
          topLockFrame = undefined;
        }
        document.documentElement.classList.remove("intro-lock");
        if (previousScrollRestoration) {
          window.history.scrollRestoration = previousScrollRestoration;
        }
      };
      const finishIntro = () => {
        if (introFallback) {
          window.clearTimeout(introFallback);
          introFallback = undefined;
        }
        gsap.set(".intro-overlay", { autoAlpha: 0, display: "none" });
        forceTop();
        unlockIntro();
        startLenis();
        ScrollTrigger.refresh();
      };
      const setupDockVisibility = () => {
        if (isTest) {
          return;
        }

        const dock = document.querySelector(".floating-dock");
        const slot = document.querySelector(".footer-dock-slot");
        const shouldSnapDock = () => {
          const footer = document.querySelector(".site-footer");
          const footerRect = footer?.getBoundingClientRect();
          return Boolean(footerRect) && footerRect.top <= window.innerHeight * 0.5;
        };
        const shouldUnsnapDock = () => {
          const footer = document.querySelector(".site-footer");
          const footerRect = footer?.getBoundingClientRect();
          return !footerRect || footerRect.top > window.innerHeight * 0.5;
        };
        const slotTarget = () => {
          if (!dock || !slot) {
            return undefined;
          }

          const slotRect = slot.getBoundingClientRect();
          const dockRect = dock.getBoundingClientRect();
          return {
            x: slotRect.left + slotRect.width / 2 - dockRect.width / 2,
            y: slotRect.top + slotRect.height / 2 - dockRect.height / 2,
          };
        };
        const clearDockInline = () => {
          if (!dock) {
            return;
          }

          dock.classList.add("dock-no-transition");
          gsap.set(dock, { clearProps: "all" });
          // Force style flush so CSS fixed-dock baseline does not run a second transition.
          void dock.offsetHeight;
          window.requestAnimationFrame(() => {
            dock.classList.remove("dock-no-transition");
          });
        };
        const setDockAtCurrentRect = () => {
          if (!dock) {
            return undefined;
          }

          const rect = dock.getBoundingClientRect();
          gsap.set(dock, {
            position: "fixed",
            left: 0,
            top: 0,
            right: "auto",
            bottom: "auto",
            x: rect.left,
            y: rect.top,
            transform: "none",
          });
          return rect;
        };
        const freezeDockTransitions = () => {
          if (!dock) {
            return;
          }

          dock.classList.add("dock-no-transition");
          void dock.offsetHeight;
        };
        const releaseDockTransitions = () => {
          if (!dock) {
            return;
          }

          window.requestAnimationFrame(() => {
            dock.classList.remove("dock-no-transition");
          });
        };
        const snapDock = () => {
          if (!dock || !slot || dockState !== "floating") {
            return;
          }

          setDockAtCurrentRect();
          dockMorph?.kill?.();
          document.documentElement.classList.remove("footer-dock-snap", "dock-inline");
          document.documentElement.classList.add("dock-morphing", "dock-visible");
          const target = slotTarget();
          if (!target) {
            return;
          }

          dockState = "snapping";
          dockMorph = gsap.to(dock, {
            x: target.x,
            y: target.y,
            duration: reduceMotion ? 0 : 0.56,
            ease: "power3.inOut",
            onComplete: () => {
              dockState = "snapped";
              freezeDockTransitions();
              document.documentElement.classList.remove("dock-morphing");
              document.documentElement.classList.add("footer-dock-snap", "dock-inline");
              const nextTarget = slotTarget();
              if (nextTarget) {
                gsap.set(dock, { x: nextTarget.x, y: nextTarget.y });
              }
              releaseDockTransitions();
            },
          });
        };
        const unsnapDock = () => {
          if (!dock || dockState !== "snapped") {
            return;
          }

          setDockAtCurrentRect();
          dockMorph?.kill?.();
          const currentRect = dock.getBoundingClientRect();
          const currentCenter = {
            x: currentRect.left + currentRect.width / 2,
            y: currentRect.top + currentRect.height / 2,
          };
          freezeDockTransitions();
          document.documentElement.classList.remove("footer-dock-snap", "dock-inline");
          document.documentElement.classList.add("dock-morphing", "dock-visible");
          const dockRect = dock.getBoundingClientRect();
          gsap.set(dock, {
            x: currentCenter.x - dockRect.width / 2,
            y: currentCenter.y - dockRect.height / 2,
          });
          const target = {
            x: window.innerWidth / 2 - dockRect.width / 2,
            y: window.innerHeight - 18 - dockRect.height,
          };

          dockState = "unsnapping";
          dockMorph = gsap.to(dock, {
            x: target.x,
            y: target.y,
            duration: reduceMotion ? 0 : 0.5,
            ease: "power3.inOut",
            onComplete: () => {
              dockState = "floating";
              document.documentElement.classList.remove("dock-morphing");
              clearDockInline();
            },
          });
        };
        const syncSnappedDock = () => {
          if (dockState !== "snapped" || document.documentElement.classList.contains("dock-morphing")) {
            return;
          }

          const target = slotTarget();
          if (target) {
            gsap.set(dock, { x: target.x, y: target.y });
          }
        };

        updateDockVisibility = () => {
          const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
          if (dockState !== "snapping" && dockState !== "unsnapping") {
            if (!dockShown && scrollY > window.innerHeight * 0.65) {
              dockShown = true;
            } else if (dockShown && scrollY < window.innerHeight * 0.45) {
              dockShown = false;
            }
            document.documentElement.classList.toggle("dock-visible", dockShown);
          }

          if (!dockShown) {
            if (dockState === "snapped") {
              unsnapDock();
            }
            return;
          }

          if (shouldSnapDock()) {
            snapDock();
            syncSnappedDock();
          } else if (shouldUnsnapDock()) {
            unsnapDock();
          }
        };
        updateDockVisibility();
        window.addEventListener("scroll", updateDockVisibility, { passive: true });
        window.addEventListener("resize", updateDockVisibility);
      };
      const setupPreviewMotion = () => {
        if (reduceMotion || isTest || window.matchMedia?.("(pointer: coarse)")?.matches) {
          return undefined;
        }

        const cleanups = gsap.utils.toArray(".work-preview").map((preview) => {
          const onMove = (event) => {
            const rect = preview.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            preview.style.setProperty("--preview-ry", `${(-x * 8).toFixed(2)}deg`);
            preview.style.setProperty("--preview-rx", `${(y * 6).toFixed(2)}deg`);
            preview.classList.add("preview-tilting");
          };
          const onLeave = () => {
            preview.style.removeProperty("--preview-rx");
            preview.style.removeProperty("--preview-ry");
            preview.classList.remove("preview-tilting", "preview-pressing");
          };
          const onDown = () => preview.classList.add("preview-pressing");
          const onUp = () => preview.classList.remove("preview-pressing");

          preview.addEventListener("pointermove", onMove);
          preview.addEventListener("pointerleave", onLeave);
          preview.addEventListener("pointerdown", onDown);
          preview.addEventListener("pointerup", onUp);

          return () => {
            preview.removeEventListener("pointermove", onMove);
            preview.removeEventListener("pointerleave", onLeave);
            preview.removeEventListener("pointerdown", onDown);
            preview.removeEventListener("pointerup", onUp);
          };
        });

        return () => cleanups.forEach((cleanup) => cleanup());
      };
      const setupAnchorScroll = () => {
        const links = gsap.utils.toArray('a[href="#home"], a[href="#contact"]');
        const onClick = (event) => {
          const hash = event.currentTarget?.getAttribute("href");
          const targetElement = hash === "#home" ? undefined : document.querySelector(hash);
          const target = hash === "#home" ? 0 : targetElement?.getBoundingClientRect().top + window.scrollY;
          if (target === undefined || Number.isNaN(target)) {
            return;
          }

          event.preventDefault();
          window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${hash}`);

          const finishAnchorScroll = () => {
            if (hash === "#home") {
              lenis?.scrollTo?.(0, { immediate: true, force: true });
              forceTop();
              window.requestAnimationFrame(() => {
                forceTop();
              });
            }
            window.setTimeout(() => {
              if (hash === "#home") {
                forceTop();
              }
              updateDockVisibility?.();
            }, hash === "#home" ? 260 : 120);
          };

          if (!lenis || reduceMotion) {
            try {
              window.scrollTo({
                top: target,
                behavior: reduceMotion ? "auto" : "smooth",
              });
            } catch {
              window.scrollTo?.(0, target);
              document.documentElement.scrollTop = target;
              document.body.scrollTop = target;
            }
            window.setTimeout(finishAnchorScroll, hash === "#home" ? 650 : 780);
            return;
          }

          lenis.scrollTo(target, {
            duration: hash === "#home" ? 0.62 : 0.76,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            force: true,
            lock: true,
            onComplete: finishAnchorScroll,
          });
        };

        links.forEach((link) => link.addEventListener("click", onClick));
        return () => links.forEach((link) => link.removeEventListener("click", onClick));
      };

      if (reduceMotion || isTest) {
        unlockIntro();
        gsap.set(
          ".hero-word-mask span, .portrait-image, .hero-pill, .hero-copy, .hero-actions a, .floating-dock",
          { clearProps: "all" }
        );
        gsap.set(".intro-overlay", { autoAlpha: 0, display: "none" });
      } else {
        lockIntro();
        introFallback = window.setTimeout(finishIntro, 3600);
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .set(".intro-overlay", { autoAlpha: 1, display: "block" })
          .set(".intro-word-raj", { yPercent: 100 })
          .set(".intro-word-beladiya", { yPercent: -100 })
          .to([".intro-word-raj", ".intro-word-beladiya"], {
            yPercent: 0,
            duration: 0.9,
            ease: "expo.out",
          })
          .to({}, { duration: 0.25 })
          .to(".intro-word-raj", {
            yPercent: 100,
            duration: 0.75,
            ease: "expo.inOut",
          })
          .to(
            ".intro-word-beladiya",
            {
              yPercent: -100,
              duration: 0.75,
              ease: "expo.inOut",
            },
            "<"
          )
          .to(".intro-overlay", {
            autoAlpha: 0,
            duration: 0.08,
            ease: "power2.out",
          })
          .call(finishIntro);
      }

        document.documentElement.classList.remove("dock-visible", "footer-dock-snap", "dock-inline", "dock-morphing");
        setupDockVisibility();
      cleanupPreviewMotion = setupPreviewMotion();
      cleanupAnchorScroll = setupAnchorScroll();

      if (!reduceMotion && !isTest) {
        const proofStats = gsap.utils.toArray(".experience-section .proof-stat");
        if (proofStats.length) {
          gsap.from(proofStats, {
            y: 28,
            opacity: 0,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: ".experience-section .metric-grid",
              start: "top 92%",
              once: true,
            },
          });
        }

        gsap.utils.toArray(".experience-section .stat-value[data-target]").forEach((element) => {
          const target = Number(element.dataset.target || 0);
          const prefix = element.dataset.prefix || "";
          const suffix = element.dataset.suffix || "";
          const counter = { value: 0 };

          gsap.to(counter, {
            value: target,
            duration: target > 100 ? 1.25 : 0.95,
            ease: "power2.out",
            snap: { value: 1 },
            scrollTrigger: {
              trigger: ".experience-section .metric-grid",
              start: "top 92%",
              once: true,
            },
            onUpdate: () => {
              element.textContent = `${prefix}${Math.round(counter.value)}${suffix}`;
            },
            onComplete: () => {
              element.textContent = `${prefix}${target}${suffix}`;
            },
          });
        });

        gsap.from(".experience-section .proof-stat-stamp .stat-value", {
          scale: 0.82,
          rotate: -2,
          duration: 0.55,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".experience-section .metric-grid",
            start: "top 92%",
            once: true,
          },
        });
      }

      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 32,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 92%",
          },
        });
      });

      return () => {
        if (introFallback) {
          window.clearTimeout(introFallback);
        }
        unlockIntro();
        document.documentElement.classList.remove("dock-visible", "footer-dock-snap", "dock-inline", "dock-morphing");
        if (updateDockVisibility) {
          window.removeEventListener("scroll", updateDockVisibility);
          window.removeEventListener("resize", updateDockVisibility);
        }
        dockMorph?.kill?.();
        cleanupPreviewMotion?.();
        cleanupAnchorScroll?.();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        if (lenisRaf) {
          gsap.ticker.remove(lenisRaf);
        }
        lenis?.destroy();
      };
    },
    { scope: scopeRef, dependencies: [] }
  );
}
