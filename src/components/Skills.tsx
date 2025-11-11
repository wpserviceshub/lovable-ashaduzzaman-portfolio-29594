import { 
  Code2, 
  Database, 
  ShoppingCart, 
  Palette, 
  Layers, 
  Sparkles,
  Zap,
  Wrench
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code2,
      name: "WordPress",
      description: "Custom themes, plugins, and full-stack development"
    },
    {
      icon: Database,
      name: "PHP",
      description: "Backend development and server-side programming"
    },
    {
      icon: ShoppingCart,
      name: "WooCommerce",
      description: "E-commerce solutions and payment integrations"
    },
    {
      icon: Zap,
      name: "JavaScript",
      description: "Interactive frontend development and APIs"
    },
    {
      icon: Sparkles,
      name: "jQuery",
      description: "Dynamic user interfaces and animations"
    },
    {
      icon: Palette,
      name: "HTML/CSS",
      description: "Responsive design and modern styling"
    },
    {
      icon: Layers,
      name: "Bootstrap",
      description: "Rapid prototyping and responsive frameworks"
    },
    {
      icon: Wrench,
      name: "GSAP",
      description: "Advanced animations and interactive experiences"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-heading">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-hero-gradient-to mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="skill-card group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;