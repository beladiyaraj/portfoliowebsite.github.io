import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import {
  SiAmazonwebservices,
  SiDocker,
  SiFastapi,
  SiKubernetes,
} from "react-icons/si";

import profileImage from "../assets/images/rajbeladiyaprofile-cutout.png";
import { links } from "./portfolioData";

const iconMap = {
  aws: <SiAmazonwebservices />,
  docker: <SiDocker />,
  email: <FaEnvelope />,
  fastapi: <SiFastapi />,
  fiverr: <TbBrandFiverr />,
  kubernetes: <SiKubernetes />,
  phone: <FaPhoneAlt />,
  upwork: <FaSquareUpwork />,
};

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-pills" aria-label="Portfolio status">
        <span className="hero-pill views-pill">
          <FaRegCalendarAlt />
          <strong>2026</strong>
          <span>Portfolio</span>
        </span>
        <span className="hero-pill work-pill">
          <i />
          Open To Work
        </span>
      </div>

      <div className="hero-title" aria-hidden="true">
        <div className="hero-word">
          <span>Raj</span>
        </div>
        <div className="hero-word">
          <span>Beladiya</span>
        </div>
      </div>
      <h1 className="sr-only">Raj Beladiya</h1>

      <div className="portrait-wrap">
        <img className="portrait-image" src={profileImage} alt="Raj Beladiya" />
      </div>

      <div className="hero-gradient" />

      <div className="hero-content">
        <p className="hero-copy">
          <strong>AWS Cloud Engineer</strong> from India building{" "}
          <strong>Cloud Infrastructure</strong>,{" "}
          <strong>DevOps Pipelines</strong>, <strong>Python APIs</strong>,{" "}
          <strong>IoT Systems</strong>, and <strong>Full-Stack Products</strong>.
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
    </section>
  );
}

export function FloatingDock() {
  return (
    <nav className="floating-dock" aria-label="Primary">
      <a className="dock-brand" href="#home">
        Raj-Beladiya
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
      <a href="#contact" aria-label="Contact section">
        |
      </a>
    </nav>
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
    <article className="work-card reveal">
      <div className="work-copy">
        <p className="work-index">
          {work.index} {"//"} {work.category}
        </p>
        <h2>{work.title}</h2>
        <p>{work.description}</p>
        <a href={links.email}>
          {work.cta}
          <FaExternalLinkAlt />
        </a>
        <TagRow tags={work.tags} />
      </div>
      <div className="work-preview">
        {work.image ? (
          <img src={work.image} alt={`${work.title} project preview`} />
        ) : (
          <span>{work.title}</span>
        )}
      </div>
    </article>
  );
}

export function MoreWorkCard({ item }) {
  return (
    <a
      className="more-card reveal"
      href={links.github}
      target="_blank"
      rel="noreferrer"
    >
      <span className="more-icon">{iconMap[item.icon]}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <i>Open GitHub</i>
    </a>
  );
}

export function ContactSection({ contactLinks }) {
  return (
    <section className="section contact-section" id="contact">
      <SectionLabel number="04" title="Contact" />
      <div className="contact-panel reveal">
        <p className="eyebrow">Available for cloud, automation, and backend work</p>
        <h2>Have infrastructure to stabilize or a product to ship?</h2>
        <p>
          Send the requirement, current stack, and expected outcome. I can help
          scope the cloud setup, backend path, automation workflow, or IoT
          integration.
        </p>
        <div className="contact-grid">
          {contactLinks.map((link) => (
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              key={link.label}
            >
              {iconMap[link.icon]}
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricGrid({ metrics }) {
  return (
    <div className="metric-grid">
      {metrics.map(([value, label]) => (
        <div className="fact-card" key={`${value}-${label}`}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
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
