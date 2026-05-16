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
  ["100%", "Job Success"],
  ["Top", "Rated"],
  ["$10K+", "Earnings"],
  ["32", "Jobs"],
  ["573", "Hours"],
  ["0-4h", "Avg Response"],
];

export const experienceCards = [
  {
    date: "2023 -> Present",
    role: "Senior Cloud Engineer",
    title: "Cloud Systems",
    subtitle: "AWS, Azure, GCP, DevOps, MLOps, and production infrastructure",
    description:
      "Designing secure, scalable, and cost-aware cloud systems across AWS, Azure, and GCP. I build CI/CD pipelines, containerized deployments, AI infrastructure, monitoring paths, and IAM-first environments that are ready for production workloads.",
    metrics: [
      ["3+", "Years"],
      ["AWS", "Azure / GCP"],
      ["MLOps", "AI pipelines"],
      ["CI/CD", "Release ops"],
    ],
    tags: ["AWS", "Azure", "GCP", "Docker", "Terraform", "IAM", "Monitoring"],
  },
  {
    date: "Freelance",
    role: "DevOps / AIOps Freelancer",
    title: "Client Delivery",
    subtitle: "Production-ready cloud, backend, automation, and AI workflows",
    description:
      "Delivered 25+ client projects through Upwork and direct work, turning prototypes into stable infrastructure, Python backends, LLM workflows, SageMaker pipelines, Lambda systems, ECS services, and cloud automation with clear documentation.",
    metrics: stats,
    tags: ["Python", "FastAPI", "OpenAI APIs", "LangGraph", "SageMaker", "Lambda"],
  },
];

export const selectedWorks = [
  {
    index: "01",
    category: "AI SEO / Marketing Automation",
    title: "Breevy",
    role: "Senior Cloud Engineer",
    description:
      "SEO and marketing made easy with Breevy. Supported cloud architecture for AI-driven SEO and marketing automation tooling using managed AWS infrastructure and security-focused deployment paths.",
    cta: "Open Breevy",
    href: "https://breevy.ai",
    image: breevyPreview,
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
    tags: ["Azure DevOps", "Docker", "GitHub", "Compliance", "Scheduling"],
  },
  {
    index: "03",
    category: "AI Photo Organization",
    title: "VIXC",
    role: "AWS Cloud Engineer",
    description:
      "Smart photo management tool that makes finding, organizing, and sharing memories easier with AI. Built around cloud infrastructure, PostgreSQL, AI integration, Amplify, and Beanstalk delivery.",
    cta: "Open VIXC",
    href: "https://vixc.com",
    image: vixcPreview,
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
    tags: ["DevOps", "AWS Lambda", "Amazon ECS", "Jenkins", "AWS"],
  },
];

export const skillGroups = [
  {
    title: "Cloud",
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
    title: "AI / Backend",
    skills: [
      "Python",
      "Node.js",
      "ChatGPT API",
      "LangGraph",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "IoT / Automation",
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
    skills: ["Cloud Security", "Compliance", "IAM", "Monitoring", "Cost Optimization"],
  },
];

export const certifications = [
  {
    title: "AWS Certified Machine Learning Engineer - Associate",
    provider: "Amazon Web Services Training and Certification",
    meta: ["Issued October 2025", "Expires October 2028"],
    href: "https://www.credly.com/badges/29277c33-78e3-45fb-954c-2a856b80d02a/public_url",
    tags: ["AWS", "AI", "Deep Learning", "Data Science", "Machine Learning"],
  },
  {
    title: "AWS Certified Developer - Associate",
    provider: "Amazon Web Services Training and Certification",
    meta: ["Issued June 2025", "Expires June 2028"],
    href: "https://www.credly.com/badges/9eb68c8f-0233-4d5c-9d39-d79b9cb64f16",
    tags: ["System Deployment", "Product Development", "AWS", "Cloud Computing"],
  },
  {
    title: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services Training and Certification",
    meta: ["AWS Credential", "Credly Verified"],
    href: "https://www.credly.com/badges/1bed980f-ed93-4ab2-8349-5279a81ac58e",
    tags: ["AWS", "Cloud Computing", "Architectural Design", "Cloud Security"],
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
    label: "Upwork",
    value: "100% Job Success",
    href: links.upwork,
    icon: "upwork",
  },
  {
    label: "LinkedIn",
    value: "Raj Beladiya",
    href: links.linkedin,
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "beladiyaraj",
    href: links.github,
    icon: "github",
  },
  {
    label: "Fiverr",
    value: "Seller Dashboard",
    href: links.fiverr,
    icon: "fiverr",
  },
];
