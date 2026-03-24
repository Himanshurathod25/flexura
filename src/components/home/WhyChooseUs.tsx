import { CheckCircle2, Zap, Shield, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Results-Driven Approach",
    description: "Every strategy is built around measurable outcomes. We focus on ROI, not vanity metrics.",
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    description: "Real-time dashboards and detailed monthly reports keep you informed every step of the way.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Partnership",
    description: "Your success is our success. We work as an extension of your team, not just another vendor.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Track Record",
    description: "500+ successful campaigns across diverse industries with an average 300% ROI increase.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Flexura</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Your Growth Partner in the Digital Age
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We don't just run campaigns—we build sustainable growth engines. Our data-driven strategies are designed to scale with your business and deliver long-term success.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative">
            <div className="bg-gradient-hero rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                <div className="text-center p-2">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                    98%
                  </div>
                  <p className="text-primary-foreground/70 text-sm">Client Retention Rate</p>
                </div>
                <div className="text-center p-2">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                    50+
                  </div>
                  <p className="text-primary-foreground/70 text-sm">Expert Team Members</p>
                </div>
                <div className="text-center p-2">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                    8+
                  </div>
                  <p className="text-primary-foreground/70 text-sm">Years of Excellence</p>
                </div>
                <div className="text-center p-2">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                    24/7
                  </div>
                  <p className="text-primary-foreground/70 text-sm">Support Available</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 right-0 sm:-right-4 bg-card rounded-2xl p-4 shadow-card border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Zap aria-hidden="true"  className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Top Rated</div>
                    <div className="text-xs text-muted-foreground">Agency 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
