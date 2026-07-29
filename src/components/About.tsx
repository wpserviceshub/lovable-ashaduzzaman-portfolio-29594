import { Code, Users, Globe, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, value: "10+", label: "Years Experience" },
    { icon: Users, value: "150+", label: "Happy Clients" },
    { icon: Globe, value: "4+", label: "Years Experience Global Team" },
    { icon: Award, value: "170+", label: "Projects Completed" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-heading">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-hero-gradient-to mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Passionate Full-Stack WordPress Developer
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 10 years of comprehensive experience in web development, I specialize in creating 
                robust, scalable WordPress solutions that drive business growth. My expertise spans from 
                custom theme development to complex e-commerce implementations.
              </p>
              <p>
                For the past 4 years, I've been privileged to work with Kings Crest Global, serving 
                clients worldwide and delivering high-quality digital solutions. My approach combines 
                technical expertise with creative problem-solving to exceed client expectations.
              </p>
              <p>
                I'm passionate about clean code, user experience, and staying current with the latest 
                web technologies. Every project is an opportunity to create something exceptional that 
                makes a real difference for businesses and their customers.
              </p>
            </div>
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