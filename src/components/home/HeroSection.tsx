import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative mx-auto px-4 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fadeIn">
            <div className="flex text-amber-500 text-sm">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <span className="text-sm font-medium text-primary-foreground/80 border-l border-primary-foreground/20 pl-2">
              Trusted by 500+ Businesses Worldwide
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slideUp">
            We Build, Rank & Grow
            <span className="block text-gradient">Businesses Across the Globe.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-slideUp" style={{ animationDelay: "0.1s" }}>
            From high-converting websites to Google Ads, SEO & full-funnel digital marketing — Flexura is your one-stop growth partner, wherever you are in the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 animate-slideUp" style={{ animationDelay: "0.2s" }}>
            <a
              href="https://wa.me/918009613543?text=Hi%20Flexura%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center shadow-lg shadow-primary/25"
              style={{ padding: "14px 32px", fontSize: "16px" }}
            >
              Get a Free Strategy Call
            </a>
            <a href="#case-studies" className="text-primary-foreground font-medium hover:text-primary transition-colors flex items-center gap-2">
              See Our Work <ArrowRight aria-hidden="true" className="w-5 h-5" />
            </a>
          </div>

          {/* Service Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16 animate-slideUp" style={{ animationDelay: "0.25s" }}>
            {["SEO", "Google Ads / PPC", "Website Development", "Lead Generation", "Branding"].map((service) => (
              <span key={service} className="px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/70 text-sm whitespace-nowrap hover:bg-primary-foreground/10 hover:border-primary-foreground/30 transition-colors cursor-default">
                {service}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 max-w-4xl mx-auto animate-slideUp" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp aria-hidden="true"  className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-primary-foreground">300%</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Average ROI Increase</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users aria-hidden="true"  className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-primary-foreground">500+</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles aria-hidden="true"  className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-primary-foreground">10M+</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Leads Generated</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="font-display text-3xl font-bold text-primary-foreground">5+</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Client Logo Strip */}
        <div className="mt-20 pt-10 border-t border-primary-foreground/10 text-center animate-slideUp" style={{ animationDelay: "0.4s" }}>
          <p className="text-primary-foreground/50 text-sm font-medium uppercase tracking-wider mb-6">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
            <span className="font-bold text-xl text-primary-foreground/70">CompanyA</span>
            <span className="font-bold text-xl text-primary-foreground/70">BrandB</span>
            <span className="font-bold text-xl text-primary-foreground/70">StartupC</span>
            <span className="font-bold text-xl text-primary-foreground/70">TechCorp</span>
            <span className="font-bold text-xl text-primary-foreground/70">EnterpriseE</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
