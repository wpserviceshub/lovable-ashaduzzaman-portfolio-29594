import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useProjects } from "../hooks/use-cms";

const Projects = () => {
  const { data: projects, isLoading, isError, error } = useProjects();

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <p className="text-lg font-medium text-foreground">Loading featured projects…</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <p className="text-lg font-medium text-destructive">Unable to load projects.</p>
          <p className="mt-2 text-muted-foreground">{error instanceof Error ? error.message : "Please try again later."}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-heading">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-hero-gradient-to mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing some of my recent work and successful project deliveries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(projects ?? []).slice(0, 6).map((project, index) => (
            <div
              key={project.id}
              className="project-card animate-fade-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="p-2 bg-background rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                      aria-label={`View details for ${project.title}`}
                    >
                      <Eye className="w-5 h-5 text-primary" />
                    </Link>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-background rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-background rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                    >
                      <Github className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/projects" className="btn-primary group">
            <span>All Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;