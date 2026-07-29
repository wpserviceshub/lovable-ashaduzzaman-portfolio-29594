import { ExternalLink, Download, Briefcase, Code, CalendarDays } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Tech-Inspired Animated Background */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.12),transparent_35%)]"></div>
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 h-px w-24 bg-primary/60 animate-circuit-flow"></div>
          <div className="absolute top-20 left-34 h-16 w-px bg-primary/50 animate-circuit-flow-delay-1"></div>
          <div className="absolute top-36 left-34 h-px w-16 bg-hero-gradient-to/60 animate-circuit-flow-delay-2"></div>
          <div className="absolute top-60 right-20 h-px w-28 bg-primary-light/50 animate-circuit-flow-delay-3"></div>
          <div className="absolute top-60 right-48 h-20 w-px bg-hero-gradient-to/50 animate-circuit-flow"></div>
          <div className="absolute bottom-40 left-1/4 h-px w-20 bg-primary/50 animate-circuit-flow-delay-1"></div>
          <div className="absolute bottom-24 right-1/3 h-px w-24 bg-hero-gradient-to/50 animate-circuit-flow-delay-2"></div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-16 left-20 text-primary/15 font-mono text-sm animate-code-float-1">
          &lt;div className="hero"&gt;
        </div>
        <div className="absolute top-32 right-24 text-hero-gradient-to/15 font-mono text-xs animate-code-float-2">
          const developer = "Ashad";
        </div>
        <div className="absolute bottom-40 left-16 text-primary-light/15 font-mono text-sm animate-code-float-3">
          function createMagic() {"{"}
        </div>
        <div className="absolute bottom-24 right-32 text-primary/15 font-mono text-xs animate-code-float-1">
          return "portfolio";
        </div>
        <div className="absolute top-1/2 left-8 text-hero-gradient-to/15 font-mono text-sm animate-code-float-2">
          &lt;/div&gt;
        </div>

        {/* Binary Data Flow */}
        <div className="absolute top-0 left-1/4 text-primary/10 font-mono text-xs animate-binary-flow">
          01001000 01100101 01101100 01101100 01101111
        </div>
        <div className="absolute bottom-0 right-1/4 text-hero-gradient-to/10 font-mono text-xs animate-binary-flow-reverse">
          01110111 01101111 01110010 01101011
        </div>

        {/* Geometric Tech Shapes */}
        <div className="absolute top-1/4 right-1/3 h-8 w-8 rotate-45 border border-primary/15 animate-tech-rotate"></div>
        <div className="absolute bottom-1/3 left-1/4 h-6 w-6 border border-hero-gradient-to/15 animate-tech-pulse"></div>
        <div className="absolute top-2/3 right-1/4 h-10 w-10 rounded-full border-2 border-primary-light/15 animate-tech-orbit"></div>

        {/* Data Nodes */}
        <div className="absolute top-1/3 left-1/3 h-3 w-3 rounded-full bg-primary/20 animate-data-pulse">
          <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/3 h-2 w-2 rounded-full bg-hero-gradient-to/25 animate-data-pulse-delay">
          <div className="absolute inset-0 rounded-full bg-hero-gradient-to/15 animate-ping"></div>
        </div>
        <div className="absolute top-3/4 left-2/3 h-4 w-4 rounded-full bg-primary-light/20 animate-data-pulse-slow">
          <div className="absolute inset-0 rounded-full bg-primary-light/10 animate-ping"></div>
        </div>

        {/* Gradient Tech Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-hero-gradient-to/5 opacity-70 animate-tech-gradient"></div>
        
        {/* Matrix-style Falling Elements */}
        <div className="absolute top-0 left-1/4 text-primary/10 font-mono text-xs animate-matrix-fall">
          {"{"}
          <br />
          "skills": [
          <br />
          &nbsp;&nbsp;"React",
          <br />
          &nbsp;&nbsp;"WordPress"
          <br />
          ]
          <br />
          {"}"}
        </div>
        <div className="absolute top-0 right-1/4 text-hero-gradient-to/10 font-mono text-xs animate-matrix-fall-delay">
          console.log(
          <br />
          &nbsp;&nbsp;"Building amazing"
          <br />
          &nbsp;&nbsp;"websites..."
          <br />
          );
        </div>
      </div>

      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary-foreground/90 shadow-sm backdrop-blur-sm">
              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-primary" />
              Available for freelance & long-term projects
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-6xl animate-hero-title">
              Building fast, modern, and conversion-focused digital experiences
            </h1>

            <h2 className="mb-6 text-xl font-semibold text-primary-foreground/90 md:text-2xl animate-hero-subtitle">
              Full-Stack WordPress Developer crafting websites for brands, startups, and growing businesses
            </h2>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 animate-hero-description">
              I combine clean UI design, strong development foundations, and performance-driven WordPress solutions to create websites that look sharp and deliver results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-hero-buttons">
              <button className="btn-primary group hover:scale-105 transition-all duration-300">
                <Briefcase size={20} />
                <span>Upwork</span>
                <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <button className="btn-secondary group hover:scale-105 transition-all duration-300">
                <Code size={20} />
                <span>Freelancer</span>
                <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <button className="btn-secondary group hover:scale-105 transition-all duration-300">
                <CalendarDays size={20} />
                <span>Schedule Call</span>
                <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <button className="btn-secondary group hover:scale-105 transition-all duration-300">
                <Download size={20} />
                <span>Resume</span>
                <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-hero-image">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-hero-gradient-to rounded-full blur-2xl opacity-20 scale-110 animate-pulse-glow"></div>
              <div className="relative bg-background p-2 rounded-full shadow-large hover:shadow-xl transition-all duration-500">
                <img
                  src="/lovable-uploads/uploaded-picture.png"
                  alt="Md Ashaduzzaman - Full-Stack WordPress Developer"
                  className="w-80 h-80 object-cover rounded-full transform hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center lg:mt-16">
          <div className="flex animate-bounce flex-col items-center justify-center">
            <div className="flex h-10 w-6 items-center justify-center rounded-full border-2 border-primary-foreground/60">
              <div className="mt-2 h-3 w-1 rounded-full bg-primary-foreground/60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;