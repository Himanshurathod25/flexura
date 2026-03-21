import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 left-0 right-0 z-[1000] transition-all duration-500 ${scrolled ? "top-4 left-4 right-4" : ""}`}>
      <div className={`bg-card/95 backdrop-blur-xl border border-border/50 rounded-full shadow-card mx-auto max-w-5xl transition-all duration-500 ${
        scrolled 
          ? "py-2 px-6 lg:px-8 border-primary/30 bg-card/98 shadow-lg" 
          : "py-4 px-8 lg:px-10"
      }`}>
        <div className="flex items-center justify-between h-auto">
          {/* Logo */}
          <Link 
            to="/" 
            className={`flex items-center gap-2 group transition-all duration-300 ${scrolled ? "scale-90" : "scale-100"}`}
          >
            <div className={`bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
              scrolled ? "w-8 h-8" : "w-10 h-10"
            }`}>
              <span className={`text-primary-foreground font-display font-bold transition-all duration-300 ${
                scrolled ? "text-lg" : "text-xl"
              }`}>F</span>
            </div>
            <span className={`font-display font-bold text-foreground group-hover:text-primary transition-all duration-300 ${
              scrolled ? "text-lg hidden sm:inline" : "text-xl"
            }`}>Flexura</span>
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
                } ${scrolled ? "text-xs px-3 py-1" : ""}`}
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
            <a href="https://wa.me/918009613543?text=Hi%20Flexura%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer">
              <Button 
                variant="gradient" 
                className={`rounded-full hover:scale-105 transition-all duration-300 ${scrolled ? "text-sm px-6 py-2" : "px-8 py-3"}`}
              >
                Book a Call
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-full hover:bg-secondary transition-all duration-300 ${scrolled ? "scale-90" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X aria-hidden="true"  className="w-6 h-6 text-foreground" />
            ) : (
              <Menu aria-hidden="true"  className="w-6 h-6 text-foreground" />
            )}
          </button>
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
            <a href="https://wa.me/918009613543?text=Hi%20Flexura%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              <Button variant="gradient" className="w-full mt-2 rounded-full">
                Book a Call
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
