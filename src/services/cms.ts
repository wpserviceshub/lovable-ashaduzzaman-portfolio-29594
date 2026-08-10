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
    image: "/portfolio/kcg.png?w=500&h=300&fit=crop",
    category: "Technology",
    liveUrl: "https://kingscrestglobal.com/",
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
    image: "/portfolio/cleverain.png?w=500&h=300&fit=crop",
    category: "Website",
    liveUrl: "https://www.cleverain.com/",
    githubUrl: "https://github.com/example/cleverain",
    technologies: ["React", "Tailwind", "WordPress"],
    highlights: ["CMS-powered content", "Fast responsive experience", "Modern visual design"],
    outcome: "The launch increased engagement and made future content updates effortless.",
  },
  {
    id: 9,
    slug: "ags",
    title: "Aylward Game Solicitors",
    description: "Aylward Game Solicitors Brisbane was established in 1998 and are based in modern and attractive (and we think quite unique) offices in Brisbane’s CBD, providing high-quality legal advice and representation to clients throughout Queensland and more widely around Australia. As your local Brisbane lawyer or solicitor, our role is to protect your rights and promote your best interests.",
    details: "Brisbane Solicitors and Family Lawyers committed to providing industry-leading legal services across Australia.",
    featuredImage: "/portfolio/ags.png",
    image: "/portfolio/ags.png?w=500&h=300&fit=crop",
    category: "Law Firm",
    liveUrl: "https://aylwardgame.com.au/",
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

const fallbackArticles: CmsPost[] = [
  {
    id: 1,
    slug: "the-rise-of-ai-how-artificial-intelligence-is-changing-the-world",
    title: "The Rise of AI: How Artificial Intelligence is Changing the World",
    excerpt: "Artificial intelligence (AI) is transforming the world at an unprecedented pace. From smart assistants and self-driving cars to medical breakthroughs and advanced robotics, AI is reshaping every aspect of our lives.",
    image: "/article/the-rise-of-al-how-artificial-intelligence-is-changing-the-world-thumbnail.jpg",
    featuredImage: "/article/the-rise-of-al-how-artificial-intelligence-is-changing-the-world-thumbnail.jpg",
    category: "Technology",
    date: "2026-02-18T00:00:00",
    publishDate: "February 18, 2026",
    readTime: "8 min read",
    tags: ["AI", "Technology"],
    content: "Artificial intelligence is no longer a futuristic concept; it is a present-day force driving innovation across every industry. From automating repetitive tasks to unlocking new product experiences, AI is helping teams move faster and make smarter decisions. In this article, we look at how AI is shaping the modern world and what it means for the future of work, creativity, and everyday life.",
    highlights: ["AI adoption continues to grow across industries", "Automation is improving business efficiency", "New tools are changing how we create and solve problems"],
  },
  {
    id: 2,
    slug: "building-a-colorful-pencil-drawing-tool-with-html5-canvas",
    title: "Building a Colorful Pencil Drawing Tool with HTML5 Canvas",
    excerpt: "Create a colorful, interactive pencil drawing tool using HTML5 Canvas and JavaScript. Smooth strokes and dynamic rainbow effects bring creativity to life right in the browser.",
    image: "/article/2d-pencil-drawing-thumbnail.jpg",
    featuredImage: "/article/2d-pencil-drawing-thumbnail.jpg",
    category: "Javascript",
    date: "2025-07-19T00:00:00",
    publishDate: "July 19, 2025",
    readTime: "12 min read",
    tags: ["HTML", "Javascript", "Pencil Drawing"],
    content: "HTML5 Canvas provides a great foundation for building interactive browser apps. By combining drawing logic with a few visual enhancements, you can create an experience that feels fun and expressive. This article walks through the creation of a simple yet engaging drawing tool you can use directly in the browser.",
    highlights: ["Canvas APIs make drawing simple", "Interactive tools can be built without external libraries", "Color and motion add personality to the experience"],
  },
  {
    id: 3,
    slug: "creating-a-stylish-profile-card-with-a-wave-transition-in-html-css",
    title: "Creating a Stylish Profile Card with a Wave Transition in HTML & CSS",
    excerpt: "A well-designed profile card can make a powerful first impression on your personal portfolio. In this post, I’ll walk you through how I designed and coded a modern, clean profile card with a wave transition using just HTML and CSS.",
    image: "/article/wave-card-using-html-css-style-thumbnail-1440-1080.jpg",
    featuredImage: "/article/wave-card-using-html-css-style-thumbnail-1440-1080.jpg",
    category: "CSS",
    date: "2025-06-20T00:00:00",
    publishDate: "June 20, 2025",
    readTime: "10 min read",
    tags: ["CSS", "HTML"],
    content: "A polished profile card can elevate a portfolio or personal website instantly. By using layered gradients, smooth transitions, and creative motion, you can make a simple component feel memorable and modern. This article explores a simple design pattern that looks great and remains easy to implement.",
    highlights: ["CSS transitions can create a premium feel", "Small design choices make a big difference", "The layout remains lightweight and easy to adapt"],
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
  try {
    const posts = await fetchApi<any[]>("/wp/v2/posts?per_page=20&_embed&_fields=id,slug,title,excerpt,content,_embedded,date");
    return posts.map(normalizePost);
  } catch (error) {
    console.warn("CMS articles unavailable, using fallback article data", error);
    return fallbackArticles.map((article) => ({ ...article, tags: [...article.tags], highlights: [...article.highlights] }));
  }
}

export async function getPostBySlug(slug: string): Promise<CmsPost | null> {
  try {
    const posts = await fetchApi<any[]>(`/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed&_fields=id,slug,title,excerpt,content,_embedded,date`);
    if (posts.length) {
      return normalizePost(posts[0]);
    }
  } catch (error) {
    console.warn("CMS article details unavailable, using fallback article data", error);
  }

  return fallbackArticles.find((article) => article.slug === slug) ?? null;
}
