import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-hero rounded-3xl overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 lg:px-16 lg:py-24 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-8">
              <Rocket className="w-8 h-8 text-primary" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-3xl mx-auto mb-6">
              Ready to Transform Your Digital Presence?
            </h2>

            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
              Get a free consultation and discover how we can help you achieve your growth goals. No strings attached.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/8009613543" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link to="/services">
                <Button variant="heroOutline" size="xl">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
