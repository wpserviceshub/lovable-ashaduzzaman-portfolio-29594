import { Code, Users, Globe, Award } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getHomePageSettings, HomePageSettings } from "@/services/cms";

interface AboutHomePageSettings extends HomePageSettings {
  section_title?: string;
  highlight_title?: string;
  about_me?: string;
  service_items?: Array<{
    number: string;
    title: string;
    icon: string;
  }>;
}

const iconMap = [Code, Users, Globe, Award] as const;

const parseStatValue = (value: string) => {
  const match = value.match(/^(\d+)(.*)$/);
  if (match) {
    return { numeric: parseInt(match[1], 10), suffix: match[2] || "" };
  }
  return { numeric: 0, suffix: "" };
};

const animateCounter = (from: number, to: number, duration: number, onUpdate: (value: number) => void) => {
  const start = performance.now();
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    onUpdate(to);
    return;
  }

  const step = (currentTime: number) => {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(from + (to - from) * eased);
    onUpdate(value);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const About = () => {
  const { data: homeSettings } = useQuery<AboutHomePageSettings | null>({
    queryKey: ["cms", "home-settings"],
    queryFn: getHomePageSettings,
    staleTime: 1000 * 60 * 5,
  });

  const fallbackStats = [
    { icon: Code, value: "10+", label: "Years Experience" },
    { icon: Users, value: "150+", label: "Happy Clients" },
    { icon: Globe, value: "4+", label: "Years Experience Global Team" },
    { icon: Award, value: "170+", label: "Projects Completed" },
  ];

  const stats = (homeSettings?.service_items && homeSettings.service_items.length > 0
    ? homeSettings.service_items.map((item) => ({
        icon: Code,
        value: item.number || "",
        label: item.title || "",
      }))
    : fallbackStats
  ).map((stat, index) => ({
    ...stat,
    icon: iconMap[index] ?? Code,
  }));

  const sectionTitle = homeSettings?.section_title || "About Me";
  const highlightTitle = homeSettings?.highlight_title || "Passionate Full-Stack WordPress Developer";
  const aboutContent = homeSettings?.about_me || "<p>With over 10 years of comprehensive experience in web development, I specialize in creating robust, scalable WordPress solutions that drive business growth. My expertise spans from custom theme development to complex e-commerce implementations.</p><p>For the past 4 years, I've been privileged to work with Kings Crest Global, serving clients worldwide and delivering high-quality digital solutions. My approach combines technical expertise with creative problem-solving to exceed client expectations.</p><p>I'm passionate about clean code, user experience, and staying current with the latest web technologies. Every project is an opportunity to create something exceptional that makes a real difference for businesses and their customers.</p>";

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-heading">{sectionTitle}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-hero-gradient-to mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              {highlightTitle}
            </h3>
            <div
              className="space-y-4 text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: aboutContent }}
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-background p-6 rounded-xl shadow-soft text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;