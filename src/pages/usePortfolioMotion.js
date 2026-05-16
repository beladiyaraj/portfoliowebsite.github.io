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

      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 56,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
          },
        });
      });

      return () => {
        if (introFallback) {
          window.clearTimeout(introFallback);
        }
        unlockIntro();
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
