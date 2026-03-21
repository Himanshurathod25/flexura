import { useEffect, useRef, useState } from "react";
import { Star, TrendingUp, Users, Award } from "lucide-react";

interface Review {
  id: number;
  name: string;
  title: string;
  content: string;
  rating: number;
  avatar: string;
}

interface StatItem {
  label: string;
  value: string;
  suffix: string;
  icon: React.ReactNode;
  color: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Marketing Director at TechStart",
    content: "Flexura transformed our digital strategy. We saw a 150% increase in qualified leads within the first month.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CEO at GrowthCo",
    content: "The ROI was measurable immediately. Their data-driven approach eliminated guesswork from our campaigns.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Operations Manager",
    content: "Professional, responsive, and results-oriented. Flexura exceeded our expectations on every project.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "David Wilson",
    title: "Founder at InnovateLabs",
    content: "From strategy to execution, Flexura delivered excellence. Highly recommended for any digital transformation.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Jessica Lee",
    title: "Business Owner",
    content: "Our online presence improved dramatically. The team's expertise and dedication are unmatched.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "James Patterson",
    title: "Marketing Head at RetailPlus",
    content: "Best investment we made this year. Flexura's strategies brought sustainable growth to our business.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const AnimatedCounter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          setCount(Math.floor(end * progress));

          if (currentStep >= steps) {
            setCount(end);
            clearInterval(interval);
          }
        }, stepDuration);

        observer.unobserve(entry.target);
      }
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

const ReviewsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;
    const reviewWidth = 360;
    const gap = 20;
    const totalWidth = reviews.length * (reviewWidth + gap);

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= totalWidth / 2) {
        scrollPosition = 0;
      }
      if (container) {
        container.scrollLeft = scrollPosition;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  const stats: StatItem[] = [
    {
      label: "Active Clients",
      value: "250",
      suffix: "+",
      icon: <Users aria-hidden="true"  className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600",
    },
    {
      label: "Client Satisfaction",
      value: "98",
      suffix: "%",
      icon: <Award aria-hidden="true"  className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      label: "Average Rating",
      value: "4.9",
      suffix: "/5",
      icon: <TrendingUp aria-hidden="true"  className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Loved by
            </span>
            <span className="px-6 py-2 bg-gradient-primary rounded text-4xl md:text-5xl font-display font-bold text-white">
              250+ Clients
            </span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about working with Flexura for their digital growth.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative mb-20">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            {/* Duplicate reviews for seamless loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-80 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star aria-hidden="true" 
                      key={i}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-foreground mb-6 leading-relaxed">
                  "{review.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={`${review.name} - ${review.title} avatar`}
                    loading="lazy"
                    width="48"
                    height="48"
                    className="w-12 h-12 rounded-full object-cover border border-primary/20"
                  />
                  <div>
                    <p className="font-medium text-sm text-foreground">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hide scrollbar CSS */}
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        {/* Stats with Premium Design - Compact */}
        <div className="relative mt-16">
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-gradient-primary opacity-5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500 opacity-5 rounded-full blur-3xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Glassmorphic card with border */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="relative rounded-2xl bg-gradient-to-br from-card/90 to-card/60 border border-border/40 hover:border-primary/40 backdrop-blur-sm p-5 lg:p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Icon container */}
                  <div className="mb-4 inline-block">
                    <div
                      className={`relative p-2.5 rounded-lg bg-gradient-to-r ${stat.color} shadow-lg shadow-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/40 transition-all duration-500 transform group-hover:scale-110`}
                    >
                      <div className="text-white w-4 h-4">
                        {stat.icon}
                      </div>
                      {/* Icon glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-lg opacity-0 blur-lg -z-10 group-hover:opacity-60 transition-opacity duration-500`} />
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className="relative h-1.5 bg-gradient-to-r from-secondary to-secondary/50 rounded-full mb-4 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full animate-pulse`}
                      style={{
                        animation: `slideIn ${2 + index * 0.2}s ease-out forwards`,
                      }}
                    />
                  </div>

                  {/* Counter */}
                  <div className="mb-2">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
                      <AnimatedCounter end={parseInt(stat.value)} suffix={stat.suffix} />
                    </div>
                  </div>

                  {/* Label with enhanced typography */}
                  <p className="text-xs lg:text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-500 uppercase tracking-wide">
                    {stat.label}
                  </p>

                  {/* Bottom shine effect */}
                  <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Animation keyframes */}
          <style>{`
            @keyframes slideIn {
              from {
                width: 0;
              }
              to {
                width: 100%;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
