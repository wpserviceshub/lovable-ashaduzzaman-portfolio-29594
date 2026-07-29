import { ExternalLink, Download, Briefcase, Code, CalendarDays } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Tech-Inspired Animated Background */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute inset-0 z-10 hero-content-scrim"></div>
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-px bg-primary animate-circuit-flow"></div>
          <div className="absolute top-20 left-44 w-px h-20 bg-primary animate-circuit-flow-delay-1"></div>
          <div className="absolute top-40 left-44 w-24 h-px bg-hero-gradient-to animate-circuit-flow-delay-2"></div>
          <div className="absolute top-60 right-20 w-40 h-px bg-primary-light animate-circuit-flow-delay-3"></div>
          <div className="absolute top-60 right-20 w-px h-32 bg-hero-gradient-to animate-circuit-flow"></div>
          <div className="absolute bottom-40 left-1/4 w-28 h-px bg-primary animate-circuit-flow-delay-1"></div>
          <div className="absolute bottom-20 right-1/3 w-36 h-px bg-hero-gradient-to animate-circuit-flow-delay-2"></div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-16 left-20 text-primary/20 font-mono text-sm animate-code-float-1">
          &lt;div className="hero"&gt;
        </div>
        <div className="absolute top-32 right-24 text-hero-gradient-to/20 font-mono text-xs animate-code-float-2">
          const developer = "Ashaduzzaman";
        </div>
        <div className="absolute bottom-40 left-16 text-primary-light/20 font-mono text-sm animate-code-float-3">
          function createMagic() {"{"}
        </div>
        <div className="absolute bottom-24 right-32 text-primary/20 font-mono text-xs animate-code-float-1">
          return "awesome portfolio";
        </div>
        <div className="absolute top-1/2 left-8 text-hero-gradient-to/20 font-mono text-sm animate-code-float-2">
          &lt;/div&gt;
        </div>

        {/* Binary Data Flow */}
        <div className="absolute top-0 left-1/4 text-primary/10 font-mono text-xs animate-binary-flow">
          01001000 01100101 01101100 01101100 01101111
        </div>
        <div className="absolute bottom-0 right-1/4 text-hero-gradient-to/10 font-mono text-xs animate-binary-flow-reverse">
          01010111 01101111 01110010 01101100 01100100
        </div>

        {/* Geometric Tech Shapes */}
        <div className="absolute top-1/4 right-1/3 w-8 h-8 border border-primary/20 rotate-45 animate-tech-rotate"></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 border border-hero-gradient-to/20 animate-tech-pulse"></div>
        <div className="absolute top-2/3 right-1/4 w-10 h-10 border-2 border-primary-light/20 rounded-full animate-tech-orbit"></div>

        {/* Data Nodes */}
        <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-primary/30 rounded-full animate-data-pulse">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-hero-gradient-to/40 rounded-full animate-data-pulse-delay">
          <div className="absolute inset-0 bg-hero-gradient-to/20 rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-3/4 left-2/3 w-4 h-4 bg-primary-light/30 rounded-full animate-data-pulse-slow">
          <div className="absolute inset-0 bg-primary-light/20 rounded-full animate-ping"></div>
        </div>

        {/* Gradient Tech Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-hero-gradient-to/5 animate-tech-gradient"></div>
        
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-hero-title">
              Hi, I'm{" "}<br />
              <span className="bg-gradient-to-r from-primary-light to-hero-gradient-to bg-clip-text text-transparent animate-gradient-text">
                Md Ashaduzzaman
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-6 animate-hero-subtitle">
              Full-Stack WordPress Developer
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed max-w-lg animate-hero-description">
              I have 10+ years of experience, and for the last 4 years I've been working globally with Kings Crest Global.
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;