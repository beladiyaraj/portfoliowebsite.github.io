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

      if (!reduceMotion && !isTest) {
        lenis = new Lenis({
          duration: 1.18,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        lenis.on("scroll", ScrollTrigger.update);
        lenisRaf = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(lenisRaf);
        gsap.ticker.lagSmoothing(0);
      }

      if (reduceMotion) {
        gsap.set(
          ".hero-word span, .portrait-image, .hero-pill, .hero-copy, .hero-actions a, .floating-dock",
          { clearProps: "all" }
        );
      } else {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(".portrait-image", {
            y: 64,
            scale: 1.11,
            opacity: 0,
            filter: "grayscale(1) contrast(0.95) brightness(1.16) blur(10px)",
            duration: 1.18,
          })
          .from(
            ".hero-word span",
            {
              yPercent: 118,
              opacity: 0,
              duration: 1.02,
              stagger: 0.12,
              ease: "expo.out",
            },
            0.12
          )
          .from(
            ".hero-pill",
            { y: -22, opacity: 0, duration: 0.72, stagger: 0.08 },
            0.42
          )
          .from(".hero-copy", { y: 36, opacity: 0, duration: 0.78 }, 0.78)
          .from(
            ".hero-actions a",
            {
              y: 24,
              opacity: 0,
              scale: 0.86,
              duration: 0.64,
              stagger: 0.06,
            },
            0.9
          )
          .from(
            ".floating-dock",
            { y: 28, opacity: 0, scale: 0.94, duration: 0.74 },
            1.02
          );

        gsap.to(".portrait-image", {
          yPercent: 10,
          scale: 1.04,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-title", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
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
