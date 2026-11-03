import React from "react";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/50 py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <img
              src="/logo.png"
              alt="Tivane Software Solutions"
              className="h-10 w-10 rounded-full object-cover border border-primary/20 shadow-lg"
            />
            <span className="font-heading font-semibold text-foreground text-sm">
              Tivane Software Solutions
            </span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="#applications" onClick={(e) => handleScrollTo(e, "#applications")} className="hover:text-primary transition-colors">
              Applications
            </a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-muted-foreground text-center md:text-right">
            &copy; {new Date().getFullYear()} T.S.S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
