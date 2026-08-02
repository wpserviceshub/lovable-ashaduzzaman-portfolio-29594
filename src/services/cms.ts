const API_BASE_URL = import.meta.env.VITE_WP_API_BASE_URL ?? "http://localhost/wp-headless-react/wp-json";

const defaultHeaders = {
  "Content-Type": "application/json",
};

const fallbackProjects: CmsProject[] = [
  {
    id: 1,
    slug: "kcg",
    title: "KCG Digital",
    description: "A high-performance landing experience focused on lead generation and messaging.",
    details: "This project used a component-driven approach to keep the experience fast, flexible, and easy to maintain.",
    featuredImage: "/portfolio/kcg.png",
    image: "/portfolio/kcg.png",
    category: "Technology",
    liveUrl: "https://example.com/kcg",
    githubUrl: "https://github.com/example/kcg",
    technologies: ["Vite", "React", "Tailwind"],
    highlights: ["Performance-first build", "Reusable UI components", "Lead-focused copy"],
    outcome: "The experience delivered a strong launch with consistent messaging across devices.",
  },
  {
    id: 2,
    slug: "strata-sphere",
    title: "Strata Sphere",
    description: "Developed a modern, responsive website for Strata Sphere, showcasing body corporate management services, streamlined service navigation, optimized performance, and user-friendly contact workflows to enhance client engagement and online presence.",
    details: "The build emphasized clarity for corporate services and a frictionless contact journey for visitors looking to engage the company.",
    featuredImage: "/portfolio/stratasphere.png",
    image: "/portfolio/stratasphere.png?w=500&h=300&fit=crop",
    category: "Landing Page",
    liveUrl: "https://stratasphere.com.au/",
    githubUrl: "https://github.com/example/stratasphere",
    technologies: ["WordPress", "Bootstrap", "GSAP", "PHP"],
    highlights: ["Service-focused information architecture", "Animation-led interface polish", "Streamlined enquiry and contact experience"],
    outcome: "The refreshed site improved trust, usability, and professionalism for the client’s online presence."
  },
  {
    id: 3,
    slug: "dr-kashan-david",
    title: "Dr. Kashan David",
    description: "Built a responsive, high-end website for Dr. David Kashan, presenting plastic surgery services with a clean UI, optimized performance, patient-focused journey, and conversion-driven consultation flow to enhance trust and engagement.",
    details: "This website was crafted to feel premium and trustworthy while helping prospective patients find information quickly and book consultations.",
    featuredImage: "/portfolio/kashan.png",
    image: "/portfolio/kashan.png?w=500&h=300&fit=crop",
    category: "Clinic",
    liveUrl: "https://davidkashanmd.com/",
    githubUrl: "https://github.com/example/davidkashanmd",
    technologies: ["WordPress", "jQuery", "GSAP", "PHP"],
    highlights: [
      "Elegant visual system tailored to medical branding",
      "Patient-friendly content flow",
      "Optimized performance for a smooth browsing experience"
    ],
    outcome: "The website strengthened the clinic’s digital credibility and made the consultation journey more approachable."
  },
  {
    id: 4,
    slug: "exceed-ict",
    title: "EXCEED ICT",
    description: "Built a high-performance corporate website for Exceed ICT, showcasing digital transformation, fleet management, and connectivity solutions with clear service architecture, responsive design, and conversion-focused user experience for enterprise and government clients.",
    details: "The project required a layered information structure to present complex technology services clearly to enterprise audiences.",
    featuredImage: "/portfolio/exceed.png",
    image: "/portfolio/exceed.png?w=500&h=300&fit=crop",
    category: "Technology",
    liveUrl: "https://exceedict.com/",
    githubUrl: "https://github.com/example/exceedict",
    technologies: ["WordPress", "JavaScript", "Bootstrap", "GSAP", "PHP"],
    highlights: [
      "Clear presentation of multiple service lines",
      "Responsive layouts for technical content",
      "Modern motion and interaction details"
    ],
    outcome: "The final result gave the brand a stronger, more professional online presence for B2B audiences."
  },
  {
    id: 5,
    slug: "central-queensland-conveyancing-centre",
    title: "Central Queensland Conveyancing Centre",
    description: "Designed and developed a fast, SEO-friendly website for Central Queensland Conveyancing Centre, improving service accessibility, strengthening brand credibility, and enabling seamless client enquiries for property transactions.",
    details: "The site was created to serve legal and property-related inquiries with approachable content and strong trust signals.",
    featuredImage: "/portfolio/cqcc.png",
    image: "/portfolio/cqcc.png?w=500&h=300&fit=crop",
    category: "Business",
    liveUrl: "https://cqcc.com.au/",
    githubUrl: "https://github.com/example/cqcc",
    technologies: ["WordPress", "jQuery", "Wow Animation", "PHP"],
    highlights: [
      "SEO-optimized content structure",
      "High-clarity service presentation",
      "Improved inquiry flow for prospective clients"
    ],
    outcome: "The website now better supports discovery, trust, and client conversion for the business."
  },
  {
    id: 6,
    slug: "g2-agri-group",
    title: "G2 Agri Group",
    description: "A clean, professional website for G2 Agri Group, an Australian agriculture business specialising in high-quality livestock production, featuring company info, sustainability values, and contact details.",
    details: "The project balanced professional presentation with approachable messaging for an agricultural business operating in a competitive space.",
    featuredImage: "/portfolio/g2agri.png",
    image: "/portfolio/g2agri.png?w=500&h=300&fit=crop",
    category: "Platform",
    liveUrl: "https://g2agri.com.au/",
    githubUrl: "https://github.com/example/g2agri",
    technologies: ["WordPress", "jQuery", "Wow Animation", "PHP"],
    highlights: [
      "Clean content hierarchy for company information",
      "Strong brand consistency across pages",
      "Mobile-friendly contact path"
    ],
    outcome: "The site gives the client a polished online presence that reflects their values and services clearly."
  },
  {
    id: 7,
    slug: "uv-c",
    title: "UV-C",
    description: "Created an SEO-optimized website for UV-C, enabling effective presentation of 20-second device-sanitisation solutions, improving user engagement, and supporting lead acquisition through intuitive layout and performance optimization.",
    details: "This build focused on translating a technical product into an engaging and easy-to-understand website experience.",
    featuredImage: "/portfolio/uvc-m.png",
    image: "/portfolio/uvc-m.png?w=500&h=300&fit=crop",
    category: "Technology",
    liveUrl: "https://uv-c.com.au/",
    githubUrl: "https://github.com/example/uv-c",
    technologies: ["WordPress", "PHP", "JavaScript", "Bootstrap"],
    highlights: [
      "Clear product education and messaging",
      "Conversion-led calls to action",
      "Performance tuning for fast loading"
    ],
    outcome: "The website now highlights the value proposition more effectively and supports lead capture."
  },
  {
    id: 8,
    slug: "cleverain",
    title: "Cleverain",
    description: "A polished marketing website and brand experience built for a fast-moving startup.",
    details: "This project combined storytelling, conversion-focused UI, and a CMS-driven content workflow to help the brand launch quickly.",
    featuredImage: "/portfolio/cleverain.png",
    image: "/portfolio/cleverain.png",
    category: "Website",
    liveUrl: "https://example.com/cleverain",
    githubUrl: "https://github.com/example/cleverain",
    technologies: ["React", "Tailwind", "WordPress"],
    highlights: ["CMS-powered content", "Fast responsive experience", "Modern visual design"],
    outcome: "The launch increased engagement and made future content updates effortless.",
  },
  {
    id: 9,
    slug: "ags",
    title: "AGS Commerce",
    description: "A modern e-commerce experience crafted for a growing retail brand.",
    details: "The experience focused on product storytelling, clean navigation, and a frictionless checkout journey.",
    featuredImage: "/portfolio/ags.png",
    image: "/portfolio/ags.png",
    category: "E-commerce",
    liveUrl: "https://example.com/ags",
    githubUrl: "https://github.com/example/ags",
    technologies: ["React", "TypeScript", "Node.js"],
    highlights: ["Optimized storefront", "Mobile-first experience", "Conversion-focused layout"],
    outcome: "The project improved browsing flow and made product updates easy for the team.",
  },
  {
    id: 10,
    slug: "beautiful-feet-studio",
    title: "Beautiful Feet Studio of Dance & The Arts",
    description: "A vibrant website for Beautiful Feet Studio of Dance & The Arts in Richmond, TX, featuring class listings, schedules, memberships, event management, and community outreach programs.",
    details: "The website was designed to feel energetic and community-focused while making class and event information easy to find.",
    featuredImage: "/portfolio/beautifullfeet.png",
    image: "/portfolio/beautifullfeet.png?w=500&h=300&fit=crop",
    category: "Dance & The Arts",
    liveUrl: "https://beautifulfeetstudio.com/",
    githubUrl: "https://github.com/example/beautifulfeetstudio",
    technologies: ["WordPress", "PHP", "JavaScript", "Bootstrap"],
    highlights: [
      "Vibrant visual presentation",
      "Clear class and program discovery",
      "Accessible information for families and participants"
    ],
    outcome: "The final experience better supports engagement for families and community audiences."
  },
];

async function fetchApi<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${path}`;
  const response = await fetch(url, {
    ...init,
    headers: {
      ...defaultHeaders,
      ...(init?.headers ?? {}),
    },
  });

  const text = await response.text();
  const payload = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const message = payload?.message || response.statusText || "API request failed";
    throw new Error(message);
  }

  return payload as T;
}

function stripTags(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

function getFeaturedImage(item: any): string {
  return item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
}

function getTagNames(item: any): string[] {
  const terms = item?._embedded?.["wp:term"] ?? [];
  const tags = terms.flatMap((group: any[]) => group.filter((term) => term.taxonomy === "post_tag"));
  return tags.map((tag: any) => tag.name);
}

function getCategoryName(item: any): string {
  return item?._embedded?.["wp:term"]?.flat().find((term: any) => term.taxonomy === "category")?.name ?? "Blog";
}

function extractHighlights(text: string): string[] {
  if (!text) {
    return [];
  }

  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean)
    .slice(0, 3);
}

export interface CmsProject {
  id: number;
  slug: string;
  title: string;
  description: string;
  details: string;
  featuredImage: string;
  image: string;
  category: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
  highlights: string[];
  outcome: string;
}

export interface CmsPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  image: string;
  date: string;
  category: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  highlights: string[];
}

function normalizeProject(item: any): CmsProject {
  const builtWith = item.acf?.built_with ?? "";
  const featuredImage = getFeaturedImage(item);

  return {
    id: item.id,
    slug: item.slug,
    title: item.title?.rendered ?? "",
    description: stripTags(item.excerpt?.rendered ?? ""),
    details: stripTags(item.content?.rendered ?? ""),
    featuredImage,
    image: featuredImage,
    category: item.acf?.project_type ?? "Project",
    liveUrl: item.acf?.live_link ?? "#",
    githubUrl: item.acf?.github_link ?? "#",
    technologies: builtWith.split(",").map((tech: string) => tech.trim()).filter(Boolean),
    highlights: [],
    outcome: stripTags(item.excerpt?.rendered ?? ""),
  };
}

function normalizePost(item: any): CmsPost {
  const content = item.content?.rendered ?? "";
  const excerpt = stripTags(item.excerpt?.rendered ?? "");
  const featuredImage = getFeaturedImage(item);
  const readTimeMinutes = Math.max(1, Math.ceil(stripTags(content).split(/\s+/).filter(Boolean).length / 200));

  return {
    id: item.id,
    slug: item.slug,
    title: item.title?.rendered ?? "",
    excerpt,
    content,
    featuredImage,
    image: featuredImage,
    date: item.date,
    category: getCategoryName(item),
    publishDate: new Date(item.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    readTime: `${readTimeMinutes} min read`,
    tags: getTagNames(item),
    highlights: extractHighlights(content),
  };
}

function getFallbackProjectBySlug(slug: string): CmsProject | null {
  return fallbackProjects.find((project) => project.slug === slug) ?? null;
}

export async function getProjects(): Promise<CmsProject[]> {
  try {
    const projects = await fetchApi<any[]>("/wp/v2/projects?per_page=100&_embed&_fields=id,slug,title,content,excerpt,acf,_embedded");
    return projects.map(normalizeProject);
  } catch (error) {
    console.warn("CMS projects unavailable, using fallback data", error);
    return fallbackProjects.map((project) => ({ ...project }));
  }
}

export async function getProjectBySlug(slug: string): Promise<CmsProject | null> {
  try {
    const projects = await fetchApi<any[]>(`/wp/v2/projects?slug=${encodeURIComponent(slug)}&_embed&_fields=id,slug,title,content,excerpt,acf,_embedded`);
    if (projects.length) {
      return normalizeProject(projects[0]);
    }
  } catch (error) {
    console.warn("CMS project details unavailable, using fallback data", error);
  }

  return getFallbackProjectBySlug(slug);
}

export async function getPosts(): Promise<CmsPost[]> {
  const posts = await fetchApi<any[]>("/wp/v2/posts?per_page=20&_embed&_fields=id,slug,title,excerpt,content,_embedded,date");
  return posts.map(normalizePost);
}

export async function getPostBySlug(slug: string): Promise<CmsPost | null> {
  const posts = await fetchApi<any[]>(`/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed&_fields=id,slug,title,excerpt,content,_embedded,date`);
  return posts.length ? normalizePost(posts[0]) : null;
}
