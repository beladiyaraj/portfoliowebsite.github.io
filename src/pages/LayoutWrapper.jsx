import React, { useRef } from "react";

import "./LayoutWrapper.css";
import {
  ContactSection,
  ExperienceCard,
  FloatingDock,
  Hero,
  MoreWorkCard,
  SectionLabel,
  SelectedWorkCard,
} from "./PortfolioSections";
import {
  contactLinks,
  experienceCards,
  moreWorks,
  selectedWorks,
} from "./portfolioData";
import { usePortfolioMotion } from "./usePortfolioMotion";

function LayoutWrapper() {
  const pageRef = useRef(null);
  usePortfolioMotion(pageRef);

  return (
    <main className="portfolio-page" ref={pageRef}>
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

      <section className="section" id="github">
        <SectionLabel number="03" title="More from GitHub" />
        <p className="section-intro reveal">
          A compact map of the engineering areas I keep building around. Each
          tile links back to my public work and conversation starters.
        </p>
        <div className="more-grid">
          {moreWorks.map((item) => (
            <MoreWorkCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <ContactSection contactLinks={contactLinks} />
    </main>
  );
}

export default LayoutWrapper;
