import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-primary-foreground/15 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
        <p className="flex-1 text-center text-sm text-primary-foreground/80 sm:text-left">
          © {currentYear}. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-primary-foreground/20"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
          <span>Back to Top</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;