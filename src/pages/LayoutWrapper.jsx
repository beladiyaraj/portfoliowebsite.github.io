import React, { useRef } from "react";

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
  usePortfolioMotion(pageRef);

  return (
    <main className="portfolio-page" ref={pageRef}>
      <IntroOverlay />
      <Hero />
      <FloatingDock />

      <section className="section" id="experience">
        <SectionLabel number="01" title="Experience" />
        <div className="experience-list">
          {experienceCards.map((card) => (
            <ExperienceCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      <section className="section" id="work">
        <SectionLabel number="02" title="Selected Works" />
        <div className="selected-list">
          {selectedWorks.map((work) => (
            <SelectedWorkCard key={work.title} work={work} />
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <SectionLabel number="03" title="Skills" />
        <p className="section-intro reveal">
          Compact working stack across cloud, DevOps, AI backend, IoT,
          automation, and production governance.
        </p>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
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
