import { CheckCircle2 } from "lucide-react";

const roadmapSteps = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description: "We analyze your business, market, and competition to design a custom digital marketing roadmap tailored to your goals.",
    details: [
      "Business analysis & market research",
      "Competitor benchmarking",
      "Goal setting & KPI definition",
      "Custom strategy proposal",
    ],
  },
  {
    step: 2,
    title: "Build & Execute",
    description: "Our experts craft and launch integrated campaigns across all channels with data-driven precision.",
    details: [
      "Campaign creation & setup",
      "Content creation & optimization",
      "Channel configuration",
      "Performance monitoring begins",
    ],
  },
  {
    step: 3,
    title: "Optimize & Scale",
    description: "We continuously refine campaigns, test variations, and scale what works to maximize your ROI.",
    details: [
      "A/B testing & optimization",
      "Budget allocation refinement",
      "Weekly performance reports",
      "Scaling successful campaigns",
    ],
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Digital Growth <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven 3-step process to transform your digital presence and drive sustainable growth
          </p>
        </div>

        {/* Roadmap Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {roadmapSteps.map((roadmap, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 group h-full">
                {/* Step Number */}
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-display font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {roadmap.step}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {roadmap.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {roadmap.description}
                  </p>

                  {/* Details List */}
                  <div className="space-y-3">
                    {roadmap.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Connector Arrow */}
              {index < roadmapSteps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-primary transform rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl border border-primary/20 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Growth Journey?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your business goals and create a winning strategy that delivers measurable results.
          </p>
          <a
            href="https://wa.me/8009613543"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>Schedule Your Discovery Call</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
