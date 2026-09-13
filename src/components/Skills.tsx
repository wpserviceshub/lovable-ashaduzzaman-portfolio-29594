import {
  Code2,
  Database,
  ShoppingCart,
  Palette,
  Layers,
  Sparkles,
  Zap,
  Wrench,
  Globe,
  Smartphone,
  Server,
  Cloud,
  Lock,
  GitBranch,
  Terminal,
  Box,
  type LucideIcon,
} from "lucide-react";
import { useSkills } from "../hooks/use-cms";

const iconMap: Record<string, LucideIcon> = {
  wordpress: Code2,
  php: Database,
  woocommerce: ShoppingCart,
  javascript: Zap,
  jquery: Sparkles,
  html: Palette,
  css: Palette,
  bootstrap: Layers,
  gsap: Wrench,
  react: Code2,
  node: Server,
  typescript: Code2,
  python: Terminal,
  api: Globe,
  mobile: Smartphone,
  cloud: Cloud,
  security: Lock,
  git: GitBranch,
  devops: Cloud,
  database: Database,
};

const resolveIcon = (name: string): LucideIcon => {
  const key = name.toLowerCase();
  return iconMap[key] ?? Box;
};

const Skills = () => {
  const { data: skills = [], isLoading, isError } = useSkills();

  if (isLoading) {
    return (
      <section id="skills" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-hero-gradient-to mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expertise built through years of hands-on experience and continuous learning
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="skill-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                    <div className="w-6 h-6 rounded bg-primary/20 animate-pulse" />
                  </div>
                  <div className="h-5 w-24 rounded bg-primary/10 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-primary/10 animate-pulse" />
                  <div className="h-3 w-4/5 rounded bg-primary/10 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError || !skills.length) {
    return (
      <section id="skills" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-hero-gradient-to mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expertise built through years of hands-on experience and continuous learning
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = resolveIcon(skill.name);
              return (
                <div
                  key={skill.id}
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
  }

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
            const IconComponent = resolveIcon(skill.name);
            return (
              <div
                key={skill.id}
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