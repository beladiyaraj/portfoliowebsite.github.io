import {
  FaArrowRight,
  FaArrowUp,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

import profileImage from "../assets/images/rajbeladiyaprofile-cutout.png";
import { links } from "./portfolioData";

export function Hero({ themeVariant, onThemeChange }) {
  return (
    <section className="hero" id="home">
      <div className="hero-pills" aria-label="Portfolio status">
        <a className="hero-pill work-pill" href="#contact" aria-label="Open to work, go to contact">
          <i />
          Open To Work
          <span className="work-pill-arrow" aria-hidden="true">
            <FaArrowRight />
          </span>
        </a>
        <ThemeSwitcher value={themeVariant} onChange={onThemeChange} />
      </div>

      <div className="hero-title" aria-hidden="true">
        <div className="hero-word">
          <span className="hero-word-mask">
            <span>Raj</span>
          </span>
        </div>
        <div className="hero-word">
          <span className="hero-word-mask">
            <span>Beladiya</span>
          </span>
        </div>
      </div>
      <h1 className="sr-only">Raj Beladiya</h1>

      <div className="portrait-wrap">
        <img className="portrait-image" src={profileImage} alt="Raj Beladiya" />
      </div>

      <div className="hero-gradient" />

      <div className="hero-content">
        <p className="hero-copy">
          <span className="copy-shape" aria-hidden="true" />
          <strong>AWS Cloud Engineer</strong> from India building{" "}
          <strong>Cloud Infrastructure</strong>,{" "}
          <strong>DevOps Pipelines</strong>,{" "}
          <strong>Python Backend Automation</strong>, and{" "}
          <strong>Production Handoffs</strong>.
        </p>
        <div className="hero-actions" aria-label="Profile links">
          <IconLink href={links.github} label="GitHub Profile" icon={<FaGithub />} />
          <IconLink href={links.upwork} label="Upwork Profile" icon={<FaSquareUpwork />} />
          <IconLink href={links.linkedin} label="LinkedIn Profile" icon={<FaLinkedinIn />} />
          <IconLink href={links.fiverr} label="Fiverr Profile" icon={<TbBrandFiverr />} />
          <a className="resume-link" href={links.email}>
            <FaEnvelope />
            Contact
          </a>
        </div>
      </div>

      <div className="hero-side-rail" aria-hidden="true">
        <span>Raj-Beladiya</span>
        <i />
      </div>
    </section>
  );
}

export function IntroOverlay() {
  return (
    <div className="intro-overlay intro-overlay-root" aria-hidden="true">
      <div className="intro-word-mask intro-word-mask-top">
        <span className="intro-word intro-word-raj">Raj</span>
      </div>
      <div className="intro-word-mask intro-word-mask-bottom">
        <span className="intro-word intro-word-beladiya">Beladiya</span>
      </div>
      <div className="intro-centerline" />
    </div>
  );
}

export function FloatingDock() {
  return (
    <nav className="floating-dock" aria-label="Primary">
      <a className="dock-brand" href="#home">
        Raj-Beladiya
      </a>
      <DockIconLinks />
    </nav>
  );
}

export function ThemeSwitcher({ value, onChange }) {
  const options = [
    ["split", "Use split theme"],
    ["black", "Use black theme"],
    ["white", "Use white theme"],
  ];

  return (
    <div className="theme-switcher" aria-label="Theme variant">
      {options.map(([id, label]) => (
        <button
          aria-pressed={value === id}
          aria-label={label}
          className={value === id ? "is-active" : undefined}
          key={id}
          onClick={() => onChange(id)}
          type="button"
        >
          <span className={`theme-icon theme-icon-${id}`} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}

export function SectionLabel({ number, title }) {
  return (
    <div className="section-label reveal">
      <span>{number}</span>
      <i />
      <p>{title}</p>
    </div>
  );
}

export function ExperienceCard({ card }) {
  return (
    <article className="experience-card reveal">
      <div className="case-meta">
        <span>{card.date}</span>
        <span>{card.role}</span>
      </div>
      <h2>{card.title}</h2>
      <p className="case-kicker">{card.subtitle}</p>
      <p>{card.description}</p>
      <MetricGrid metrics={card.metrics} />
      <TagRow tags={card.tags} />
    </article>
  );
}

export function SelectedWorkCard({ work }) {
  return (
    <article
      className="work-card reveal"
      style={{ "--accent": work.accent, "--accent-alt": work.accentAlt || work.accent }}
    >
      <div className="work-copy">
        <p className="work-index">
          {work.index} {"//"} {work.category}
        </p>
        <div className="work-title-row">
          <h2>{work.title}</h2>
          <a className="work-open-link" href={work.href} target="_blank" rel="noreferrer">
            {work.cta}
            <FaExternalLinkAlt />
          </a>
        </div>
        <p className="work-role">{work.role}</p>
        <p>{work.description}</p>
        <TagRow tags={work.tags} />
        {work.quote ? <blockquote>{work.quote}</blockquote> : null}
      </div>
      <div className="work-preview">
        {work.image ? (
          <img src={work.image} alt={`${work.title} project preview`} />
        ) : (
          <span>{work.preview || work.title}</span>
        )}
      </div>
    </article>
  );
}

export function SkillGroup({ group }) {
  return (
    <article
      className={`skill-card skill-card-${group.tone} reveal`}
      style={{ "--accent": group.accent }}
    >
      <h3>{group.title}</h3>
      <TagRow tags={group.skills} />
    </article>
  );
}

export function CertificationCard({ cert }) {
  return (
    <article className="cert-card reveal" style={{ "--accent": cert.accent }}>
      <div className="cert-meta">
        {cert.meta.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="cert-body">
        <h3>{cert.title}</h3>
        <p>{cert.provider}</p>
      </div>
      <div className="cert-footer">
        <TagRow tags={cert.tags} />
        <a href={cert.href} target="_blank" rel="noreferrer">
          View credential
          <FaExternalLinkAlt />
        </a>
      </div>
    </article>
  );
}

export function ContactSection({ contactLinks }) {
  return (
    <footer className="section contact-section site-footer" id="contact">
      <div className="footer-shell reveal">
        <div className="footer-lede">
          <p className="eyebrow">Open To Work</p>
          <h2>Need cloud systems shipped cleanly?</h2>
          <p>
            Send the requirement, current stack, and expected outcome. I can help
            stabilize AWS or Azure infrastructure, build DevOps pipelines, ship
            backend automation, and place AI workflows inside production cloud
            systems.
          </p>
        </div>
        <div className="footer-links" aria-label="Contact links">
          {contactLinks.map((link) => (
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              key={link.label}
              style={{ "--accent": link.accent }}
            >
              <span>{link.label}</span>
              <strong>{link.value}</strong>
              <FaExternalLinkAlt aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="footer-bottom" aria-label="Footer meta">
          <span className="footer-work-status">Open To Work</span>
          <div className="footer-dock-slot" aria-hidden="true" />
          <a className="footer-top-link" href="#home" aria-label="Scroll to top">
            <span className="footer-top-link-text">Scroll To Top</span>
            <span className="footer-top-link-arrow" aria-hidden="true">
              <FaArrowUp />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function DockIconLinks() {
  return (
    <>
      <a href={links.upwork} target="_blank" rel="noreferrer" aria-label="Upwork">
        <FaSquareUpwork />
      </a>
      <a href={links.email} aria-label="Email">
        <FaEnvelope />
      </a>
      <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <FaLinkedinIn />
      </a>
      <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
    </>
  );
}

function MetricGrid({ metrics }) {
  const rows = [metrics.slice(0, 3), metrics.slice(3)];

  return (
    <div className="metric-grid proof-line">
      {rows.map((row, rowIndex) => (
        <div className="proof-row" key={`proof-row-${rowIndex}`}>
          {row.map((metric, index) => (
            <StatItem
              key={`${metric.value}-${metric.label}`}
              metric={metric}
              showSeparator={index < row.length - 1}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function StatItem({ metric, showSeparator }) {
  return (
    <>
      <div
        className={`proof-stat${metric.stamp ? " proof-stat-stamp" : ""}`}
        data-label={metric.label}
      >
        <strong
          className="stat-value"
          data-target={metric.target ?? undefined}
          data-prefix={metric.prefix ?? undefined}
          data-suffix={metric.suffix ?? undefined}
          style={{ "--stat-width": `${metric.value.length + 0.35}ch` }}
        >
          {metric.value}
        </strong>
        <span>{metric.label}</span>
      </div>
      {showSeparator ? (
        <span className="proof-separator" aria-hidden="true">
          |
        </span>
      ) : null}
    </>
  );
}

function TagRow({ tags }) {
  return (
    <div className="tag-row">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function IconLink({ href, label, icon }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {icon}
    </a>
  );
}
