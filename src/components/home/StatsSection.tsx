import { Users, TrendingUp, Award } from "lucide-react";
import { useEffect, useState } from "react";

const statsData = [
  { icon: Users, label: "Active Clients", value: 250, prefix: "", suffix: "+" },
  { icon: TrendingUp, label: "Avg Growth", value: 180, prefix: "", suffix: "%" },
  { icon: Award, label: "Satisfaction Rate", value: 98, prefix: "", suffix: "%" },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const animationDuration = 2000; // 2 seconds
    const startTime = Date.now();

    const animateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      setCounts(
        statsData.map((stat) => {
          const currentValue = Math.floor(stat.value * progress);
          return currentValue;
        })
      );

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    animateCount();
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Thousands of <span className="text-gradient">Successful Businesses</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Real results that speak for themselves
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {statsData.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="mb-3">
                    <div className="font-display text-5xl md:text-6xl font-bold text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      {stat.prefix}{counts[index]}{stat.suffix}
                    </div>
                  </div>

                  {/* Label */}
                  <p className="font-semibold text-foreground text-lg">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Message */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join hundreds of businesses experiencing exponential growth with our proven digital marketing strategies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
