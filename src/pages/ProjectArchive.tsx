import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github, Eye } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useProjects } from "../hooks/use-cms";

const ProjectArchive = () => {
  const { data: projects, isLoading, isError, error } = useProjects();
  const PLACEHOLDER_IMAGE = "/placeholder.svg";

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-medium text-foreground">Loading projects…</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-medium text-destructive">Unable to load projects.</p>
          <p className="mt-2 text-muted-foreground">{error instanceof Error ? error.message : "Please try again later."}</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">Archive</p>
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">All Projects</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Browse the complete collection of websites and digital experiences I have built.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects?.map((project, index) => {
            const projectSlug = project.slug;

            return (
              <div
                key={project.id}
                className="project-card animate-fade-in-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || PLACEHOLDER_IMAGE}
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== PLACEHOLDER_IMAGE) {
                        target.src = PLACEHOLDER_IMAGE;
                      }
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex space-x-4">
                      <Link
                        to={`/projects/${projectSlug}`}
                        className="rounded-full bg-background p-2 shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl"
                        aria-label={`View details for ${project.title}`}
                      >
                        <Eye className="h-5 w-5 text-primary" />
                      </Link>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-background p-2 shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl"
                      >
                        <ExternalLink className="h-5 w-5 text-primary" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-background p-2 shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl"
                      >
                        <Github className="h-5 w-5 text-primary" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <Link to={`/projects/${projectSlug}`} className="group/title">
                      <h2 className="text-xl font-semibold text-foreground transition-colors group-hover/title:text-primary">
                        {project.title}
                      </h2>
                    </Link>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {project.category}
                    </span>
                  </div>

                  <p className="mb-4 leading-relaxed text-muted-foreground">{project.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      to={`/projects/${projectSlug}`}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <Eye size={16} />
                      View Details
                    </Link>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 transition-colors hover:bg-accent"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectArchive;
