import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Target, 
  Share2, 
  FileText, 
  Mail, 
  BarChart3,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with strategic keyword targeting and technical optimization.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description: "Drive instant traffic with high-converting Google Ads and paid campaigns.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build brand awareness and engagement across all social platforms.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Create compelling content that educates, engages, and converts.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and boost retention with automated email campaigns.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with comprehensive analytics insights.",
    color: "from-indigo-500 to-blue-500",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Full-Stack Digital Marketing Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From SEO to paid ads, we offer comprehensive services designed to accelerate your growth and maximize your online potential.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <ArrowRight aria-hidden="true"  className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="gradient" size="lg">
              View All Services
              <ArrowRight aria-hidden="true"  className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
