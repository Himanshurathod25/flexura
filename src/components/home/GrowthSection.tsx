import { Target, Zap, BarChart3, Users, TrendingUp, Share2 } from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Lead Generation",
    description: "Automated lead capture and qualification that works around the clock, filling your pipeline with high-quality prospects.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Campaign Optimization",
    description: "Real-time campaign monitoring and optimization that ensures every marketing dollar works harder for your business.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: BarChart3,
    title: "Growth Analytics",
    description: "Comprehensive data insights and dashboards that reveal exactly what's working and where to double down.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Audience Building",
    description: "Strategic community building and engagement that transforms followers into loyal customers.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Revenue Scaling",
    description: "Proven frameworks to scale your revenue while maintaining healthy profit margins and customer satisfaction.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Share2,
    title: "Channel Integration",
    description: "Seamless integration across all digital channels for cohesive, consistent brand messaging.",
    color: "from-indigo-500 to-blue-500",
  },
];

const GrowthSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Where We Drive <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Driving measurable results across all digital channels with precision and excellence
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:bg-card/80 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${solution.color} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our integrated approach ensures every channel works in harmony to maximize your ROI
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
