import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

const services = [
  { id: 1, name: "SEO Optimization", icon: "🔍" },
  { id: 2, name: "PPC Campaigns", icon: "📢" },
  { id: 3, name: "Social Media", icon: "📱" },
  { id: 4, name: "Content Marketing", icon: "✍️" },
  { id: 5, name: "Email Marketing", icon: "📧" },
  { id: 6, name: "Analytics", icon: "📊" },
  { id: 7, name: "Brand Strategy", icon: "🎯" },
  { id: 8, name: "Conversion Rate", icon: "💰" },
  { id: 9, name: "Influencer Marketing", icon: "⭐" },
  { id: 10, name: "ORM", icon: "🛡️" },
];

const RunningServices = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollSpeed = 0.8; // pixels per millisecond
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
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex items-center gap-3 justify-center mb-8">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Our Core Services
          </h2>
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Comprehensive digital marketing solutions running continuously to boost your business growth
        </p>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Services */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 px-8 overflow-x-hidden scroll-smooth"
          style={{
            scrollBehavior: "smooth",
          }}
        >
          {/* First Set */}
          {services.map((service) => (
            <div
              key={`${service.id}-1`}
              className="flex-shrink-0 w-72 h-32 bg-white/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 flex flex-col items-center justify-center group hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-semibold text-center text-foreground">
                {service.name}
              </h3>
              <div className="mt-2 h-1 w-8 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}

          {/* Second Set (for seamless loop) */}
          {services.map((service) => (
            <div
              key={`${service.id}-2`}
              className="flex-shrink-0 w-72 h-32 bg-white/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 flex flex-col items-center justify-center group hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-semibold text-center text-foreground">
                {service.name}
              </h3>
              <div className="mt-2 h-1 w-8 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Info */}
      <div className="container mx-auto px-4 mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          Scroll to see all our services running continuously to drive your success
        </p>
      </div>
    </section>
  );
};

export default RunningServices;
