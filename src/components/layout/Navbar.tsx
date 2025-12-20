import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-full shadow-card mx-auto max-w-5xl">
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-primary-foreground font-display font-bold text-xl">F</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">Flexura</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-300 ${
                    location.pathname === link.path ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`} />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link to="/contact">
                <Button variant="gradient" className="rounded-full hover:scale-105 transition-transform duration-300">
                  Get Free Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-5xl bg-card/95 backdrop-blur-xl border border-border/50 rounded-3xl shadow-card p-4 animate-scaleIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="gradient" className="w-full mt-2 rounded-full">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
