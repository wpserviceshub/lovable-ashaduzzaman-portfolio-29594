import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_WP_API_BASE_URL ?? "http://localhost/wp-headless-react/wp-json";

const defaultHeaders = {
  "Content-Type": "application/json",
};

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

function mapFeaturedImage(item: any): string {
  if (item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url) {
    return item._embedded["wp:featuredmedia"][0].source_url;
  }
  return "";
}

function normalizeProject(item: any) {
  return {
    id: item.id,
    slug: item.slug,
    title: item.title?.rendered ?? "",
    description: stripTags(item.excerpt?.rendered ?? ""),
    details: stripTags(item.content?.rendered ?? ""),
    featuredImage: mapFeaturedImage(item),
    category: item.acf?.project_type ?? "Project",
    liveUrl: item.acf?.live_link ?? "#",
    githubUrl: item.acf?.github_link ?? "#",
    technologies: (item.acf?.built_with ?? "").split(",").map((tech: string) => tech.trim()).filter(Boolean),
    highlights: [],
    outcome: stripTags(item.excerpt?.rendered ?? ""),
  };
}

function getTagNames(item: any): string[] {
  const terms = item?._embedded?.["wp:term"] ?? [];
  const tags = terms.flatMap((group: any[]) => group.filter((term) => term.taxonomy === "post_tag"));
  return tags.map((tag: any) => tag.name);
}

function extractHighlights(text: string): string[] {
  if (!text) {
    return [];
  }

  const sentences = text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  return sentences.slice(0, 3);
}

function normalizePost(item: any) {
  const content = item.content?.rendered ?? "";
  const excerpt = stripTags(item.excerpt?.rendered ?? "");
  const category = item?._embedded?.["wp:term"]?.flat().find((term: any) => term.taxonomy === "category")?.name ?? "Blog";
  const tags = getTagNames(item);
  const readTimeMinutes = Math.max(1, Math.ceil(stripTags(content).split(/\s+/).filter(Boolean).length / 200));

  return {
    id: item.id,
    slug: item.slug,
    title: item.title?.rendered ?? "",
    excerpt,
    content,
    featuredImage: mapFeaturedImage(item),
    date: item.date,
    category,
    publishDate: new Date(item.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    readTime: `${readTimeMinutes} min read`,
    tags,
    highlights: extractHighlights(content),
  };
}

export type ProjectItem = ReturnType<typeof normalizeProject>;
export type PostItem = ReturnType<typeof normalizePost>;

export async function getProjects(): Promise<ProjectItem[]> {
  const projects = await fetchApi<any[]>("/wp/v2/projects?per_page=100&_embed&_fields=id,slug,title,content,excerpt,acf,_embedded");
  return projects.map(normalizeProject);
}

export async function getProjectBySlug(slug: string): Promise<ProjectItem | null> {
  const projects = await fetchApi<any[]>(`/wp/v2/projects?slug=${encodeURIComponent(slug)}&_embed&_fields=id,slug,title,content,excerpt,acf,_embedded`);
  return projects.length ? normalizeProject(projects[0]) : null;
}

export async function getPosts(): Promise<PostItem[]> {
  const posts = await fetchApi<any[]>("/wp/v2/posts?per_page=20&_embed&_fields=id,slug,title,excerpt,content,_embedded,date");
  return posts.map(normalizePost);
}

export async function getPostBySlug(slug: string): Promise<PostItem | null> {
  const posts = await fetchApi<any[]>(`/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed&_fields=id,slug,title,excerpt,content,_embedded,date`);
  return posts.length ? normalizePost(posts[0]) : null;
}

export function useProjects() {
  return useQuery({ queryKey: ["projects"], queryFn: getProjects });
}

export function useProject(slug?: string) {
  return useQuery({
    queryKey: ["project", slug],
    queryFn: () => getProjectBySlug(slug ?? ""),
    enabled: Boolean(slug),
  });
}

export function usePosts() {
  return useQuery({ queryKey: ["posts"], queryFn: getPosts });
}

export function usePost(slug?: string) {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug ?? ""),
    enabled: Boolean(slug),
  });
}
