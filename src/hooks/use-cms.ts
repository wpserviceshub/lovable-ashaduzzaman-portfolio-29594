import { useQuery } from "@tanstack/react-query";
import {
  getPostBySlug,
  getPosts,
  getProjectBySlug,
  getProjects,
  getSkills,
  getTestimonials,
  CmsPost,
  CmsProject,
  CmsSkill,
  CmsTestimonial,
} from "../services/cms";

const defaultQueryOptions = {
  staleTime: 1000 * 60 * 5,
  cacheTime: 1000 * 60 * 10,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
};

export function useProjects() {
  return useQuery<CmsProject[], Error>({
    queryKey: ["cms", "projects"],
    queryFn: getProjects,
    ...defaultQueryOptions,
  });
}

export function useProject(slug?: string) {
  return useQuery<CmsProject | null, Error>({
    queryKey: ["cms", "project", slug],
    queryFn: () => getProjectBySlug(slug ?? ""),
    enabled: Boolean(slug),
    ...defaultQueryOptions,
  });
}

export function useSkills() {
  return useQuery<CmsSkill[], Error>({
    queryKey: ["cms", "skills"],
    queryFn: getSkills,
    ...defaultQueryOptions,
  });
}

export function usePosts() {
  return useQuery<CmsPost[], Error>({
    queryKey: ["cms", "posts"],
    queryFn: getPosts,
    ...defaultQueryOptions,
  });
}

export function useTestimonials() {
  return useQuery<CmsTestimonial[], Error>({
    queryKey: ["cms", "testimonials"],
    queryFn: getTestimonials,
    ...defaultQueryOptions,
  });
}

export function usePost(slug?: string) {
  return useQuery<CmsPost | null, Error>({
    queryKey: ["cms", "post", slug],
    queryFn: () => getPostBySlug(slug ?? ""),
    enabled: Boolean(slug),
    ...defaultQueryOptions,
  });
}
