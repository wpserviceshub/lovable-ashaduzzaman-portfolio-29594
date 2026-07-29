import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github, Eye } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import projects from "../data/projects";
import { slugify } from "../lib/slug";

const ProjectArchive = () => {
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
          {projects.map((project) => {
            const projectSlug = slugify(project.title);

            return (
              <div key={project.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-large">
                <div className="relative overflow-hidden">
                  <Link to={`/projects/${projectSlug}`}>
                    <img src={project.image} alt={project.title} className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110" />
                  </Link>
                  <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <Link to={`/projects/${projectSlug}`} className="group">
                    <h2 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h2>
                  </Link>
                  <p className="mb-4 text-muted-foreground">{project.description}</p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <Link to={`/projects/${projectSlug}`} className="inline-flex items-center gap-2 font-medium text-primary">
                      <Eye className="h-4 w-4" /> View Details
                    </Link>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium text-muted-foreground hover:text-primary">
                      <ExternalLink className="h-4 w-4" /> Live
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium text-muted-foreground hover:text-primary">
                      <Github className="h-4 w-4" /> Code
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
