import breevyPreview from "../assets/images/project-previews/breevy-preview.png";
import caresmsPreview from "../assets/images/project-previews/caresms-preview.png";
import cofounderslabPreview from "../assets/images/project-previews/cofounderslab-preview.png";
import vixcPreview from "../assets/images/project-previews/vixc-preview.png";

export const links = {
  email: "mailto:rajbeladiya55@gmail.com",
  linkedin: "https://www.linkedin.com/in/raj-beladiya/",
  github: "https://github.com/beladiyaraj",
  upwork: "https://www.upwork.com/freelancers/~01d96e0f3dce2a7d6c",
  fiverr: "https://www.fiverr.com/users/raj4________/seller_dashboard",
};

export const stats = [
  { value: "100%", label: "Job Success", target: 100, suffix: "%" },
  { value: "Top", label: "Rated", stamp: true },
  { value: "$10K+", label: "Earnings", target: 10, prefix: "$", suffix: "K+" },
  { value: "32", label: "Jobs", target: 32 },
  { value: "573", label: "Hours", target: 573 },
  { value: "0-4h", label: "Avg Response", target: 4, prefix: "0-", suffix: "h" },
];

export const experienceCards = [
  {
    date: "Freelance",
    role: "Top Rated Cloud / DevOps Freelancer",
    title: "Freelance Cloud Delivery",
    subtitle: "Production cloud systems, DevOps pipelines, and AWS-first automation for real clients",
    description:
      "Delivered 25+ client projects across AWS, Azure, DevOps, Python backends, SageMaker pipelines, Lambda systems, ECS services, and cloud automation. AI and backend work sits inside production cloud delivery, with focus on stable infrastructure, clear documentation, cost control, and handoff.",
    metrics: stats,
    tags: ["AWS", "Azure", "Python", "FastAPI", "OpenAI APIs", "LangGraph", "SageMaker", "Lambda"],
  },
];

export const selectedWorks = [
  {
    index: "01",
    category: "AWS Cloud / Marketing Automation",
    title: "Breevy",
    role: "Senior Cloud Engineer",
    description:
      "SEO and marketing made easy with Breevy. Supported AWS architecture for AI-assisted marketing automation using managed cloud infrastructure, SageMaker workflows, and security-focused deployment paths.",
    cta: "Open Breevy",
    href: "https://breevy.ai",
    image: breevyPreview,
    accent: "#14b8d4",
    tags: ["Amazon SageMaker", "AWS", "Elastic Beanstalk", "Cloud Security"],
  },
  {
    index: "02",
    category: "Healthcare / Scheduling",
    title: "CareSMS",
    role: "Senior Azure Cloud Engineer",
    description:
      "Home-based care scheduling platform for medical visits and telehealth practices. Helped support delivery workflows around cloud deployment, DevOps, compliance, scheduling, and containerized operations.",
    cta: "Open CareSMS",
    href: "https://www.caresms.io/",
    image: caresmsPreview,
    accent: "#0078d4",
    accentAlt: "#ffd400",
    tags: ["Azure DevOps", "Docker", "GitHub", "Compliance", "Scheduling"],
  },
  {
    index: "03",
    category: "AWS Cloud / Photo Platform",
    title: "VIXC",
    role: "AWS Cloud Engineer",
    description:
      "Smart photo management tool that makes finding, organizing, and sharing memories easier. Built around AWS infrastructure, PostgreSQL, API integration, Amplify, and Beanstalk delivery.",
    cta: "Open VIXC",
    href: "https://vixc.com",
    image: vixcPreview,
    accent: "#2da8ff",
    tags: ["AWS", "PostgreSQL", "ChatGPT API", "AWS Amplify", "Beanstalk"],
    quote:
      "Raj is very pro efficient about the work! He delves work with proper documentation and in well-organized manner.",
  },
  {
    index: "04",
    category: "Startup Community / DevOps",
    title: "CoFoundersLab",
    role: "AWS Cloud Engineer",
    description:
      "Largest startup community on the Internet, helping founders accelerate their startup journey. Supported AWS and DevOps work across Lambda, ECS, Jenkins, and cloud operations.",
    cta: "Open CoFoundersLab",
    href: "https://cofounderslab.com",
    image: cofounderslabPreview,
    accent: "#ff5a45",
    accentAlt: "#008cff",
    tags: ["DevOps", "AWS Lambda", "Amazon ECS", "Jenkins", "AWS"],
  },
];

export const skillGroups = [
  {
    title: "Cloud",
    tone: "cloud",
    accent: "#ff9900",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "SageMaker",
      "Elastic Beanstalk",
      "Amplify",
      "RDS",
      "Lambda",
      "ECS",
      "Lightsail",
    ],
  },
  {
    title: "DevOps",
    tone: "devops",
    accent: "#0078d4",
    skills: [
      "Docker",
      "Jenkins",
      "GitHub",
      "Azure DevOps",
      "CodePipeline",
      "CI/CD",
      "Linux",
      "Terraform",
    ],
  },
  {
    title: "Backend Automation",
    tone: "backend",
    accent: "#14b8a6",
    skills: ["Python", "FastAPI", "Flask", "Node.js", "PostgreSQL", "MySQL", "OpenAI API", "LangGraph"],
  },
  {
    title: "IoT / Automation",
    tone: "iot",
    accent: "#f59e0b",
    skills: [
      "Raspberry Pi",
      "Internet of Things",
      "Web Scraping",
      "AWS Textract",
      "API Gateway",
    ],
  },
  {
    title: "Governance",
    tone: "governance",
    accent: "#64748b",
    skills: ["Cloud Security", "Compliance", "IAM", "Monitoring", "Cost Optimization"],
  },
];

export const certifications = [
  {
    title: "AWS Certified Machine Learning Engineer - Associate",
    provider: "Amazon Web Services Training and Certification",
    meta: ["Issued October 2025", "Expires October 2028"],
    href: "https://www.credly.com/badges/29277c33-78e3-45fb-954c-2a856b80d02a/public_url",
    accent: "#ff9900",
    tags: ["AWS", "AI", "Deep Learning", "Data Science", "Machine Learning"],
  },
  {
    title: "AWS Certified Developer - Associate",
    provider: "Amazon Web Services Training and Certification",
    meta: ["Issued June 2025", "Expires June 2028"],
    href: "https://www.credly.com/badges/9eb68c8f-0233-4d5c-9d39-d79b9cb64f16",
    accent: "#ff9900",
    tags: ["System Deployment", "Product Development", "AWS", "Cloud Computing"],
  },
  {
    title: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services Training and Certification",
    meta: ["AWS Credential", "Credly Verified"],
    href: "https://www.credly.com/badges/1bed980f-ed93-4ab2-8349-5279a81ac58e",
    accent: "#ff9900",
    tags: ["AWS", "Cloud Computing", "Architectural Design", "Cloud Security"],
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "rajbeladiya55@gmail.com",
    href: links.email,
    icon: "email",
    accent: "#ea4335",
  },
  {
    label: "Upwork",
    value: "View Upwork profile",
    href: links.upwork,
    icon: "upwork",
    accent: "#14a800",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: links.linkedin,
    icon: "linkedin",
    accent: "#0a66c2",
  },
  {
    label: "GitHub",
    value: "View GitHub work",
    href: links.github,
    icon: "github",
    accent: "#ffffff",
  },
  {
    label: "Fiverr",
    value: "View Fiverr profile",
    href: links.fiverr,
    icon: "fiverr",
    accent: "#1dbf73",
  },
];
