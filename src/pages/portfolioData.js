import vixcLogo from "../assets/images/vixclogo.png";

export const links = {
  email: "mailto:rajbeladiya55@gmail.com",
  phone: "tel:+919313288221",
  linkedin: "https://www.linkedin.com/in/raj-beladiya/",
  github: "https://github.com/beladiyaraj",
  upwork: "https://www.upwork.com/freelancers/beladiyaraj",
  fiverr: "https://www.fiverr.com/raj4________?public_mode=true",
};

export const experienceCards = [
  {
    date: "2024 -> 2026",
    role: "AWS Cloud Engineer / Infrastructure",
    title: "Cloud Engineer",
    subtitle: "Secure AWS environments, automation, and production support",
    description:
      "Designing and maintaining cloud resources across AWS, building deployment paths, configuring backend infrastructure, and keeping systems reliable for client workloads.",
    metrics: [
      ["2-3", "Years cloud work"],
      ["AWS", "Practitioner"],
      ["CI/CD", "Delivery paths"],
      ["API", "Backend support"],
    ],
    tags: ["AWS Lambda", "Amazon RDS", "CodePipeline", "Linux", "Monitoring"],
  },
  {
    date: "Freelance",
    role: "Full-time freelancer / Client delivery",
    title: "Independent Engineer",
    subtitle: "Cloud, DevOps, IoT, and backend projects shipped directly",
    description:
      "Working with clients through Upwork, Fiverr, and direct channels to turn rough requirements into practical infrastructure, automation, API, and IoT solutions.",
    metrics: [
      ["21", "Upwork jobs"],
      ["90%", "Success score"],
      ["IoT", "Raspberry Pi"],
      ["Python", "FastAPI / Flask"],
    ],
    tags: ["Python", "Docker", "Jenkins", "Kubernetes", "Web Scraping"],
  },
];

export const selectedWorks = [
  {
    index: "01",
    category: "AI Photo Organization / Cloud",
    title: "VIXC",
    description:
      "AI-powered photo organizer with cloud infrastructure for large collections, automatic tagging, smart albums, and natural-language search.",
    cta: "Open case study",
    image: vixcLogo,
    tags: ["AWS", "AI Search", "RDS", "Lambda", "Automation"],
  },
  {
    index: "02",
    category: "Cloud Automation / DevOps",
    title: "Delivery Pipelines",
    description:
      "Repeatable deployment workflows for backend services using source control, CI/CD tooling, Linux environments, and practical release checks.",
    cta: "Discuss project",
    tags: ["Docker", "Jenkins", "Git", "CI/CD", "Linux"],
  },
  {
    index: "03",
    category: "IoT / Backend Systems",
    title: "Connected Systems",
    description:
      "Backend and device-side workflows combining Raspberry Pi, Python APIs, cloud services, and automation for real-world connected use cases.",
    cta: "Start a build",
    tags: ["Raspberry Pi", "Python", "FastAPI", "IoT", "AWS"],
  },
];

export const moreWorks = [
  {
    title: "AWS Resource Design",
    description: "Resource setup, permissions, data services, and deployment-ready cloud foundations.",
    icon: "aws",
  },
  {
    title: "Backend APIs",
    description: "FastAPI and Flask services designed around clean endpoints and reliable operations.",
    icon: "fastapi",
  },
  {
    title: "Container Workflows",
    description: "Dockerized environments and repeatable local-to-production development workflows.",
    icon: "docker",
  },
  {
    title: "Kubernetes Ops",
    description: "Practical orchestration support for services that need scalable runtime management.",
    icon: "kubernetes",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "rajbeladiya55@gmail.com",
    href: links.email,
    icon: "email",
  },
  {
    label: "Phone",
    value: "+91 93132 88221",
    href: links.phone,
    icon: "phone",
  },
  {
    label: "Upwork",
    value: "21 jobs / 90% success",
    href: links.upwork,
    icon: "upwork",
  },
  {
    label: "Fiverr",
    value: "Freelance services",
    href: links.fiverr,
    icon: "fiverr",
  },
];
