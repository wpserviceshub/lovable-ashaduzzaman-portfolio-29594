import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A comprehensive WooCommerce solution with custom payment gateway integration and advanced inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      category: "E-Commerce"
    },
    {
      id: 2,
      title: "Corporate Website",
      description: "Modern responsive corporate website with custom WordPress theme, advanced SEO optimization, and multilingual support.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["WordPress", "Bootstrap", "GSAP", "PHP"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Corporate"
    },
    {
      id: 3,
      title: "Portfolio CMS",
      description: "Custom portfolio content management system with drag-and-drop functionality and real-time preview capabilities.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["WordPress", "jQuery", "CSS3", "PHP"],
      liveUrl: "#",
      githubUrl: "#",
      category: "CMS"
    },
    {
      id: 4,
      title: "Learning Management System",
      description: "Comprehensive LMS with course management, progress tracking, and integrated payment processing for online education.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
      technologies: ["WordPress", "WooCommerce", "JavaScript", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Education"
    },
    {
      id: 5,
      title: "Restaurant Management",
      description: "Complete restaurant management solution with online ordering, reservation system, and inventory tracking.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      technologies: ["WordPress", "WooCommerce", "jQuery", "GSAP"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Business"
    },
    {
      id: 6,
      title: "Booking Platform",
      description: "Advanced booking platform with calendar integration, automated notifications, and payment processing.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
      technologies: ["WordPress", "PHP", "JavaScript", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Platform"
    }
  ];

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
          {projects.map((project, index) => (
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
                    <button className="p-2 bg-background rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
                      <Eye className="w-5 h-5 text-primary" />
                    </button>
                    <button className="p-2 bg-background rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </button>
                    <button className="p-2 bg-background rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
                      <Github className="w-5 h-5 text-primary" />
                    </button>
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
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;