import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useProject } from "../hooks/use-cms";

const ProjectDetails = () => {
  const { projectSlug } = useParams();
  const { data: project, isLoading, isError, error } = useProject(projectSlug);
  const PLACEHOLDER_IMAGE = "/placeholder.svg";

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="text-lg font-medium text-foreground">Loading project details…</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="text-lg font-medium text-destructive">Unable to load project.</p>
          <p className="mt-2 text-muted-foreground">{error instanceof Error ? error.message : "Please try again later."}</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="px-4 py-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-10 shadow-sm">
            <h1 className="mb-3 text-3xl font-semibold text-foreground">Project not found</h1>
            <p className="mb-6 text-muted-foreground">
              The project you are looking for does not exist or may have been removed.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-24 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card p-2 shadow-[0_30px_80px_-25px_rgba(15,23,42,0.25)]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
          <img
            src={project.image || PLACEHOLDER_IMAGE}
            alt={project.title}
            className="relative h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[440px]"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== PLACEHOLDER_IMAGE) {
                target.src = PLACEHOLDER_IMAGE;
              }
            }}
          />
          <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/30 bg-background/70 px-5 py-4 backdrop-blur-md sm:inset-x-10 sm:bottom-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Featured Project</p>
            <h2 className="mt-1 text-xl font-semibold text-foreground">{project.title}</h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">{project.category}</p>
              <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">{project.title}</h1>
            </div>

            <div
              className="prose prose-lg max-w-none text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary prose-a:underline prose-blockquote:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: project.details }}
            />
          </div>

          <div className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div>
              <h2 className="mb-3 text-xl font-semibold text-foreground">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ExternalLink size={16} />
                Visit live site
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                <Github size={16} />
                View code
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
