import { slugify } from "../lib/slug";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  details: string;
  highlights: string[];
  outcome: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Kings Crest Global",
    description: "Developed the responsive website for King’s Crest Global, delivering a modern, SEO-optimized, conversion-focused platform that highlights services, strengthens brand presence, and ensures seamless user experience across all devices for global clients.",
    image: "/portfolio/kcg.png?w=500&h=300&fit=crop",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "GSAP"],
    liveUrl: "https://kingscrestglobal.com/",
    githubUrl: "#",
    category: "Technology",
    details: "This project focused on building a polished digital presence for a global services brand with a strong emphasis on conversion and clear service storytelling.",
    highlights: [
      "Responsive design tuned for desktop and mobile engagement",
      "SEO-ready structure and performance improvements",
      "Conversion-focused layout for service inquiries"
    ],
    outcome: "The website now positions the brand as a trusted international partner while improving lead generation and user experience."
  },
  {
    id: 2,
    title: "Strata Sphere",
    description: "Developed a modern, responsive website for Strata Sphere, showcasing body corporate management services, streamlined service navigation, optimized performance, and user-friendly contact workflows to enhance client engagement and online presence.",
    image: "/portfolio/stratasphere.png?w=500&h=300&fit=crop",
    technologies: ["WordPress", "Bootstrap", "GSAP", "PHP"],
    liveUrl: "https://stratasphere.com.au/",
    githubUrl: "#",
    category: "Corporate",
    details: "The build emphasized clarity for corporate services and a frictionless contact journey for visitors looking to engage the company.",
    highlights: [
      "Service-focused information architecture",
      "Animation-led interface polish",
      "Streamlined enquiry and contact experience"
    ],
    outcome: "The refreshed site improved trust, usability, and professionalism for the client’s online presence."
  },
  {
    id: 3,
    title: "Dr. Kashan David",
    description: "Built a responsive, high-end website for Dr. David Kashan, presenting plastic surgery services with a clean UI, optimized performance, patient-focused journey, and conversion-driven consultation flow to enhance trust and engagement.",
    image: "/portfolio/kashan.png?w=500&h=300&fit=crop",
    technologies: ["WordPress", "jQuery", "GSAP", "PHP"],
    liveUrl: "https://davidkashanmd.com/",
    githubUrl: "#",
    category: "Clinic",
    details: "This website was crafted to feel premium and trustworthy while helping prospective patients find information quickly and book consultations.",
    highlights: [
      "Elegant visual system tailored to medical branding",
      "Patient-friendly content flow",
      "Optimized performance for a smooth browsing experience"
    ],
    outcome: "The website strengthened the clinic’s digital credibility and made the consultation journey more approachable."
  },
  {
    id: 4,
    title: "EXCEED ICT",
    description: "Built a high-performance corporate website for Exceed ICT, showcasing digital transformation, fleet management, and connectivity solutions with clear service architecture, responsive design, and conversion-focused user experience for enterprise and government clients.",
    image: "/portfolio/exceed.png?w=500&h=300&fit=crop",
    technologies: ["WordPress", "JavaScript", "Bootstrap", "GSAP", "PHP"],
    liveUrl: "https://exceedict.com/",
    githubUrl: "#",
    category: "Technology",
    details: "The project required a layered information structure to present complex technology services clearly to enterprise audiences.",
    highlights: [
      "Clear presentation of multiple service lines",
      "Responsive layouts for technical content",
      "Modern motion and interaction details"
    ],
    outcome: "The final result gave the brand a stronger, more professional online presence for B2B audiences."
  },
  {
    id: 5,
    title: "Central Queensland Conveyancing Centre",
    description: "Designed and developed a fast, SEO-friendly website for Central Queensland Conveyancing Centre, improving service accessibility, strengthening brand credibility, and enabling seamless client enquiries for property transactions.",
    image: "/portfolio/cqcc.png?w=500&h=300&fit=crop",
    technologies: ["WordPress", "jQuery", "Wow Animation", "PHP"],
    liveUrl: "https://cqcc.com.au/",
    githubUrl: "#",
    category: "Business",
    details: "The site was created to serve legal and property-related inquiries with approachable content and strong trust signals.",
    highlights: [
      "SEO-optimized content structure",
      "High-clarity service presentation",
      "Improved inquiry flow for prospective clients"
    ],
    outcome: "The website now better supports discovery, trust, and client conversion for the business."
  },
  {
    id: 6,
    title: "G2 Agri Group",
    description: "A clean, professional website for G2 Agri Group, an Australian agriculture business specialising in high-quality livestock production, featuring company info, sustainability values, and contact details.",
    image: "/portfolio/g2agri.png?w=500&h=300&fit=crop",
    technologies: ["WordPress", "PHP", "JavaScript", "Bootstrap"],
    liveUrl: "https://g2agri.com.au/",
    githubUrl: "#",
    category: "Platform",
    details: "The project balanced professional presentation with approachable messaging for an agricultural business operating in a competitive space.",
    highlights: [
      "Clean content hierarchy for company information",
      "Strong brand consistency across pages",
      "Mobile-friendly contact path"
    ],
    outcome: "The site gives the client a polished online presence that reflects their values and services clearly."
  },
  {
    id: 7,
    title: "UV-C",
    description: "Created an SEO-optimized website for UV-C, enabling effective presentation of 20-second device-sanitisation solutions, improving user engagement, and supporting lead acquisition through intuitive layout and performance optimization.",
    image: "/portfolio/uvc-m.png?w=500&h=300&fit=crop",
    technologies: ["WordPress", "PHP", "JavaScript", "Bootstrap"],
    liveUrl: "https://uv-c.com.au/",
    githubUrl: "#",
    category: "Technology",
    details: "This build focused on translating a technical product into an engaging and easy-to-understand website experience.",
    highlights: [
      "Clear product education and messaging",
      "Conversion-led calls to action",
      "Performance tuning for fast loading"
    ],
    outcome: "The website now highlights the value proposition more effectively and supports lead capture."
  },
  {
    id: 8,
    title: "Aylward Game",
    description: "Built a modern law-firm website for Aylward Game, presenting family, commercial, and property legal services through intuitive navigation, mobile-optimized design, and conversion-focused contact flow to improve client engagement.",
    image: "/portfolio/ags.png?w=500&h=300&fit=crop",
    technologies: ["WordPress", "PHP", "JavaScript", "Bootstrap"],
    liveUrl: "https://aylwardgame.com.au/",
    githubUrl: "#",
    category: "Law Firm",
    details: "The project required a professional but approachable experience for a law firm that needed to communicate services clearly and encourage enquiries.",
    highlights: [
      "Structured legal service navigation",
      "Mobile-first experience for busy users",
      "Strong contact and consultation prompts"
    ],
    outcome: "The site now helps visitors understand services quickly and connect with the firm with confidence."
  },
  {
    id: 9,
    title: "Beautiful Feet Studio of Dance & The Arts",
    description: "A vibrant website for Beautiful Feet Studio of Dance & The Arts in Richmond, TX, featuring class listings, schedules, memberships, event management, and community outreach programs.",
    image: "/portfolio/beautifullfeet.png?w=500&h=300&fit=crop",
    technologies: ["WordPress", "PHP", "JavaScript", "Bootstrap"],
    liveUrl: "https://beautifulfeetstudio.com/",
    githubUrl: "#",
    category: "Dance & The Arts",
    details: "The website was designed to feel energetic and community-focused while making class and event information easy to find.",
    highlights: [
      "Vibrant visual presentation",
      "Clear class and program discovery",
      "Accessible information for families and participants"
    ],
    outcome: "The final experience better supports engagement for families and community audiences."
  }
];

export const getProjectBySlug = (slug?: string) => {
  if (!slug) {
    return undefined;
  }

  return projects.find((project) => slugify(project.title) === slug);
};

export default projects;
