import { Star, TrendingUp, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const caseStudies = [
  {
    id: 1,
    company: "TechStart Solutions",
    logo: "TS",
    industry: "Software & Technology",
    quote: "Flexura transformed our online presence. Within 6 months, our organic traffic increased dramatically and we saw a 150% boost in qualified leads.",
    clientName: "Sarah Johnson",
    clientRole: "Marketing Director",
    metrics: [
      { label: "Traffic Increase", value: "280%", icon: "📈" },
      { label: "Lead Generation", value: "+150%", icon: "🎯" },
      { label: "Conversion Rate", value: "45%", icon: "✅" },
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50/50",
  },
  {
    id: 2,
    company: "GrowthHub E-commerce",
    logo: "GH",
    industry: "E-commerce & Retail",
    quote: "The team's strategic approach to digital marketing helped us scale our revenue. Their data-driven campaigns delivered ROI that exceeded our expectations by 3x.",
    clientName: "Michael Chen",
    clientRole: "CEO",
    metrics: [
      { label: "Revenue Growth", value: "+320%", icon: "💰" },
      { label: "Customer Base", value: "+400%", icon: "👥" },
      { label: "ROI", value: "5.2x", icon: "🚀" },
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50/50",
  },
  {
    id: 3,
    company: "wellness & Beauty Co",
    logo: "WB",
    industry: "Beauty & Wellness",
    quote: "Flexura's social media strategy helped us build a loyal community of 50K+ engaged followers. Our brand awareness and sales have never been stronger.",
    clientName: "Emma Rodriguez",
    clientRole: "Social Media Manager",
    metrics: [
      { label: "Followers", value: "50K+", icon: "💬" },
      { label: "Engagement Rate", value: "12.5%", icon: "❤️" },
      { label: "Sales Boost", value: "+200%", icon: "📊" },
    ],
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50/50",
  },
];

const ClientCaseStudies = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollSpeed = 0.5; // pixels per millisecond
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;

        setScrollPosition((prev) => {
          let newPosition = prev + scrollSpeed;
          // Reset to start when reaching end (seamless loop)
          if (newPosition >= scrollWidth - clientWidth) {
            newPosition = 0;
          }
          container.scrollLeft = newPosition;
          return newPosition;
        });
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Success Stories That <span className="text-gradient">Inspire</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from real clients. See how we've helped businesses across industries achieve their growth goals.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div 
          ref={scrollContainerRef}
          className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
          style={{
            scrollBehavior: "smooth",
            display: "flex",
            gap: "2rem",
            width: "100%",
          }}
        >
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className={`${study.bgColor} rounded-3xl border border-border/50 p-8 lg:p-10 hover:border-primary/50 transition-all duration-300 group flex-shrink-0 w-full md:w-96`}
            >
              {/* Header with Company Logo and Rating */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  {/* Company Logo */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">{study.logo}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {study.company}
                  </h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {study.industry}
                  </p>
                </div>
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star aria-hidden="true" 
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-foreground font-medium mb-6 leading-relaxed italic">
                "{study.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="mb-8 pb-8 border-b border-border/50">
                <p className="font-semibold text-foreground text-sm">
                  {study.clientName}
                </p>
                <p className="text-xs text-muted-foreground">
                  {study.clientRole}
                </p>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                {study.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white/40 rounded-xl hover:bg-white/60 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{metric.icon}</span>
                      <span className="text-sm font-medium text-muted-foreground">
                        {metric.label}
                      </span>
                    </div>
                    <span className={`font-bold text-lg bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <a
                  href="https://wa.me/918009613543?text=Hi%20Flexura%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-300"
                >
                  Get Similar Results
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl border border-primary/20 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Become Our Next Success Story?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your business goals and create a winning strategy tailored just for you.
          </p>
          <a
            href="https://wa.me/918009613543?text=Hi%20Flexura%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>Get Free Consultation</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientCaseStudies;
