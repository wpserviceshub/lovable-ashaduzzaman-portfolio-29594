import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-light rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-hero-gradient-to rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Md Ashaduzzaman</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Full-Stack WordPress Developer with 8+ years of experience creating 
              exceptional web solutions for clients worldwide.
            </p>
            <div className="text-primary-foreground/60 text-sm">
              <p>📧 ashaduzzaman@example.com</p>
              <p>📞 +880 123 456 7890</p>
              <p>📍 Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Articles", href: "#articles" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>WordPress Development</p>
              <p>WooCommerce Solutions</p>
              <p>Custom Theme Development</p>
              <p>Plugin Development</p>
              <p>Website Optimization</p>
              <p>Technical Consulting</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-primary-foreground/80 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-red-400 text-red-400 animate-pulse" />
            <span>© {currentYear} Md Ashaduzzaman. All rights reserved.</span>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;