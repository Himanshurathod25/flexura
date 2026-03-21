import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Compass, 
  Rocket, 
  Heart, 
  Wand2, 
  Zap, 
  Handshake,
  Crown,
  CheckCircle,
  Flame,
  Brain,
  ArrowRight,
  Check
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: 1,
    icon: Compass,
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    description: "Dominate organic search results and drive free, sustainable traffic to your website with proven strategies.",
    benefits: [
      "Organic traffic growth",
      "Long-term sustainable results",
      "Reduced customer acquisition cost",
      "Enhanced brand credibility",
      "Competitive advantage"
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50/50",
  },
  {
    id: 2,
    icon: Rocket,
    title: "Search Engine Marketing",
    shortTitle: "SEM / PPC",
    description: "Get instant visibility with high-converting paid advertising campaigns that deliver measurable ROI.",
    benefits: [
      "Instant traffic and leads",
      "Measurable ROI",
      "Complete control over budget",
      "Precise targeting options",
      "Fast campaign optimization"
    ],
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50/50",
  },
  {
    id: 3,
    icon: Heart,
    title: "Social Media Marketing",
    shortTitle: "SMM",
    description: "Build a loyal community and amplify your brand across social platforms with engaging content.",
    benefits: [
      "Brand awareness growth",
      "Community engagement",
      "Customer loyalty",
      "Viral reach potential",
      "Direct sales channel"
    ],
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50/50",
  },
  {
    id: 4,
    icon: Wand2,
    title: "Content Marketing",
    shortTitle: "Content",
    description: "Create compelling content that educates, engages, and converts your audience into loyal customers.",
    benefits: [
      "Thought leadership",
      "Audience education",
      "SEO improvement",
      "Lead nurturing",
      "Trust building"
    ],
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50/50",
  },
  {
    id: 5,
    icon: Zap,
    title: "Email Marketing",
    shortTitle: "Email",
    description: "Nurture leads and boost customer retention with personalized email campaigns that drive conversions.",
    benefits: [
      "High ROI potential",
      "Customer retention",
      "Personalized messaging",
      "Automation efficiency",
      "Measurable results"
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50/50",
  },
  {
    id: 6,
    icon: Handshake,
    title: "Affiliate Marketing",
    shortTitle: "Affiliate",
    description: "Expand your reach through commission-based partner promotions and grow your network exponentially.",
    benefits: [
      "Low-risk expansion",
      "Performance-based model",
      "Extended reach",
      "Partnership growth",
      "Revenue scaling"
    ],
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50/50",
  },
  {
    id: 7,
    icon: Crown,
    title: "Influencer Marketing",
    shortTitle: "Influencer",
    description: "Leverage trusted voices to reach your target audience authentically and build credibility fast.",
    benefits: [
      "Authentic endorsements",
      "Targeted reach",
      "Quick audience access",
      "Credibility boost",
      "Content multiplier"
    ],
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50/50",
  },
  {
    id: 8,
    icon: CheckCircle,
    title: "Reputation Management",
    shortTitle: "ORM",
    description: "Protect and enhance your brand's online image across all platforms with proactive management.",
    benefits: [
      "Positive brand image",
      "Trust building",
      "Crisis management",
      "Customer confidence",
      "Long-term reputation"
    ],
    color: "from-slate-500 to-gray-600",
    bgColor: "bg-slate-50/50",
  },
  {
    id: 9,
    icon: Flame,
    title: "Conversion Rate Optimization",
    shortTitle: "CRO",
    description: "Turn more visitors into customers with data-driven optimization and strategic improvements.",
    benefits: [
      "Higher conversion rates",
      "Increased revenue",
      "Better ROI",
      "User experience improvement",
      "Data-driven decisions"
    ],
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50/50",
  },
  {
    id: 10,
    icon: Brain,
    title: "Analytics & Reporting",
    shortTitle: "Analytics",
    description: "Make informed decisions with comprehensive data insights and transparent performance reporting.",
    benefits: [
      "Data-driven decisions",
      "Clear visibility",
      "Performance tracking",
      "ROI measurement",
      "Continuous improvement"
    ],
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50/50",
  },
];

const Services = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Digital Marketing Services | SEO, PPC, Social Media | Flexura</title>
        <meta 
          name="description" 
          content="Comprehensive digital marketing services including SEO, PPC, social media marketing, content marketing, and more. Grow your business with Flexura." 
        />
        <link rel="canonical" href="https://flexura.com/services" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Complete Digital Marketing <span className="text-gradient">Services</span>
              </h1>
              <p className="text-lg text-primary-foreground/70 mb-8">
                Comprehensive solutions designed to accelerate your growth, increase visibility, and maximize ROI across all digital channels.
              </p>
              <a
                href="https://wa.me/918009613543?text=Hi%20Flexura%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span>Get Free Consultation</span>
                <ArrowRight aria-hidden="true"  className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Services We Offer
              </h2>
              <p className="text-muted-foreground text-lg">
                Pick the services that fit your needs, or combine them for a complete digital marketing strategy
              </p>
            </div>

            {/* Services Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service) => {
                const Icon = service.icon;
                const isHovered = hoveredId === service.id;

                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setHoveredId(service.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`${service.bgColor} rounded-3xl border border-border/50 p-8 transition-all duration-300 group cursor-pointer hover:border-primary/50 hover:shadow-lg relative h-full`}
                  >
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-4">
                      {service.shortTitle}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Benefits - Shows on Hover */}
                    <div className={`space-y-2 mb-6 transition-all duration-300 ${isHovered ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"}`}>
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <Check aria-hidden="true"  className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <a
                      href="https://wa.me/918009613543?text=Hi%20Flexura%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-300 group/link"
                    >
                      <span>Learn More</span>
                      <ArrowRight aria-hidden="true"  className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                );
              })}
            </div>

            {/* Why Choose Our Services */}
            <div className="mt-20 p-12 lg:p-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl border border-primary/20">
              <div className="max-w-3xl">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Our Services?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Check aria-hidden="true"  className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Data-Driven Approach</h3>
                      <p className="text-muted-foreground">Every decision backed by data and analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check aria-hidden="true"  className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Expert Team</h3>
                      <p className="text-muted-foreground">Industry veterans with proven track records</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check aria-hidden="true"  className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Transparent Reporting</h3>
                      <p className="text-muted-foreground">Clear insights into your campaign performance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check aria-hidden="true"  className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Custom Solutions</h3>
                      <p className="text-muted-foreground">Tailored strategies for your unique business</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let's discuss which services are right for your business goals and create a winning strategy.
            </p>
            <a
              href="https://wa.me/918009613543?text=Hi%20Flexura%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span>Get Free Consultation</span>
              <ArrowRight aria-hidden="true"  className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;
