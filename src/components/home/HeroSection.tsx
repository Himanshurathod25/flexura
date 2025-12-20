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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground/80">Trusted by 500+ Businesses Worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slideUp">
            Smart Digital Marketing
            <span className="block text-gradient">That Delivers Results</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-slideUp" style={{ animationDelay: "0.1s" }}>
            Transform your online presence with data-driven strategies. We help startups and businesses scale faster with proven marketing solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slideUp" style={{ animationDelay: "0.2s" }}>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="heroOutline" size="xl">
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-slideUp" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-primary-foreground">300%</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Average ROI Increase</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-primary-foreground">500+</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-display text-3xl font-bold text-primary-foreground">10M+</span>
              </div>
              <p className="text-sm text-primary-foreground/60">Leads Generated</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
