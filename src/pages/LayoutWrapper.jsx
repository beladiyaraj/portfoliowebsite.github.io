import React, { useEffect, useRef, useState } from "react";

import "./LayoutWrapper.css";
import {
  ContactSection,
  CertificationCard,
  ExperienceCard,
  FloatingDock,
  Hero,
  IntroOverlay,
  SectionLabel,
  SelectedWorkCard,
  SkillGroup,
} from "./PortfolioSections";
import {
  certifications,
  contactLinks,
  experienceCards,
  selectedWorks,
  skillGroups,
} from "./portfolioData";
import { usePortfolioMotion } from "./usePortfolioMotion";

function LayoutWrapper() {
  const pageRef = useRef(null);
  const [themeVariant, setThemeVariant] = useState(() => {
    if (typeof window === "undefined") {
      return "split";
    }

    return window.localStorage.getItem("portfolio-theme-variant") || "split";
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme-variant", themeVariant);
  }, [themeVariant]);

  usePortfolioMotion(pageRef);

  return (
    <main className="portfolio-page" data-theme-variant={themeVariant} ref={pageRef}>
      <IntroOverlay />
      <Hero themeVariant={themeVariant} onThemeChange={setThemeVariant} />
      <FloatingDock />

      <section className="section" id="skills">
        <SectionLabel number="01" title="Skills" />
        <p className="section-intro reveal">
          Cloud-first working stack across AWS, Azure, DevOps, backend
          automation, monitoring, and production governance.
        </p>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <SectionLabel number="02" title="Experience" />
        <div className="experience-list">
          {experienceCards.map((card) => (
            <ExperienceCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <SectionLabel number="03" title="Projects" />
        <div className="selected-list">
          {selectedWorks.map((work) => (
            <SelectedWorkCard key={work.title} work={work} />
          ))}
        </div>
      </section>

      <section className="section" id="certifications">
        <SectionLabel number="04" title="Certifications" />
        <div className="cert-grid">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} cert={cert} />
          ))}
        </div>
      </section>

      <ContactSection contactLinks={contactLinks} />
    </main>
  );
}

export default LayoutWrapper;
