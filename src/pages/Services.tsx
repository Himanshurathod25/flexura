import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Target, 
  Share2, 
  FileText, 
  Mail, 
  Users,
  Star,
  Shield,
  TrendingUp,
  BarChart3,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Dominate organic search results and drive free, sustainable traffic to your website.",
    features: ["Keyword Research & Strategy", "On-Page & Technical SEO", "Off-Page & Link Building", "Local SEO & Google Maps"],
    goal: "Free Organic Traffic",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Search Engine Marketing (SEM / PPC)",
    description: "Get instant visibility with high-converting paid advertising campaigns.",
    features: ["Google Search & Display Ads", "Shopping Campaigns", "Remarketing Strategies", "Landing Page Optimization"],
    goal: "Instant Traffic & Leads",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Share2,
    title: "Social Media Marketing (SMM)",
    description: "Build a loyal community and amplify your brand across social platforms.",
    features: ["Instagram & Facebook Marketing", "LinkedIn & X (Twitter)", "Content Creation & Curation", "Paid Social Advertising"],
    goal: "Brand Awareness & Engagement",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Create compelling content that educates, engages, and converts your audience.",
    features: ["Blog Posts & Articles", "Video & Reel Production", "Infographics & Visuals", "Case Studies & Whitepapers"],
    goal: "Build Trust & Authority",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and boost customer retention with personalized email campaigns.",
    features: ["Newsletter Campaigns", "Automated Drip Sequences", "Promotional Emails", "A/B Testing & Optimization"],
    goal: "Customer Retention & Conversions",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Affiliate Marketing",
    description: "Expand your reach through commission-based partner promotions.",
    features: ["Affiliate Program Setup", "Partner Recruitment", "Performance Tracking", "Commission Management"],
    goal: "Sales Growth with Low Risk",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Star,
    title: "Influencer Marketing",
    description: "Leverage trusted voices to reach your target audience authentically.",
    features: ["Influencer Research & Outreach", "Campaign Strategy", "Product Reviews & Sponsored Posts", "Performance Analytics"],
    goal: "Reach Targeted Audiences Quickly",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Shield,
    title: "Online Reputation Management (ORM)",
    description: "Protect and enhance your brand's online image across all platforms.",
    features: ["Google Review Management", "Social Media Monitoring", "Crisis Response Strategy", "Brand Sentiment Analysis"],
    goal: "Positive Brand Image",
    color: "from-slate-500 to-gray-600",
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization (CRO)",
    description: "Turn more visitors into customers with data-driven optimization.",
    features: ["UI/UX Improvements", "A/B & Multivariate Testing", "Funnel Analysis", "Heat Mapping & Analytics"],
    goal: "More Leads from Same Traffic",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Make informed decisions with comprehensive data insights and reporting.",
    features: ["Google Analytics Setup", "Search Console Optimization", "Custom Dashboard Creation", "Monthly Performance Reports"],
    goal: "Data-Driven Decisions",
    color: "from-indigo-500 to-blue-500",
  },
];

const Services = () => {
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
                Our Digital Marketing <span className="text-gradient">Services</span>
              </h1>
              <p className="text-lg text-primary-foreground/70">
                Comprehensive solutions designed to accelerate your growth, increase visibility, and maximize ROI across all digital channels.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:gap-12">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>

                    {/* Goal Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">Goal: {service.goal}</span>
                    </div>

                    {/* Features */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-foreground text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact">
                      <Button variant="gradient">
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* Visual Card */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className={`bg-gradient-to-br ${service.color} rounded-3xl p-8 lg:p-12 aspect-square flex items-center justify-center`}>
                      <service.icon className="w-32 h-32 text-white/20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let's discuss which services are right for your business goals. Book a free consultation today.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;
