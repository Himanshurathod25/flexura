import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Award, TrendingUp, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Focused",
    description: "Every strategy is built around measurable outcomes. We focus on what moves the needle for your business.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is our priority. We work as an extension of your team, not just another vendor.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven",
    description: "We let the data guide our decisions. Every campaign is backed by analytics and insights.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards. Good enough is never good enough for us.",
  },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "300%", label: "Average ROI" },
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Flexura | Our Mission & Expert Digital Marketing Team</title>
        <meta 
          name="description" 
          content="Learn about Flexura's mission, vision, and the expert team behind our digital marketing success. Trusted by 500+ businesses worldwide." 
        />
        <link rel="canonical" href="https://flexura.com/about" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                About <span className="text-gradient">Flexura</span>
              </h1>
              <p className="text-lg text-primary-foreground/70">
                We're a team of passionate digital marketers dedicated to helping businesses thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Mission */}
              <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-card border border-border/50">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target aria-hidden="true"  className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes with data-driven digital marketing strategies that deliver measurable results. We believe every business deserves access to world-class marketing expertise that drives real growth.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-card border border-border/50">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye aria-hidden="true"  className="w-7 h-7 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted digital marketing partner for ambitious businesses worldwide. We envision a future where data-driven marketing is accessible to all, and every business can achieve its full potential online.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <p className="text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
                What Drives Us Every Day
              </h2>
              <p className="text-muted-foreground text-lg">
                Our core values shape everything we do, from how we approach client relationships to how we execute campaigns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client-First Approach */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Approach</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                  Client-First, Always
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  We don't believe in one-size-fits-all solutions. Every business is unique, and your marketing strategy should be too. We take the time to understand your goals, challenges, and audience before crafting a customized approach.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Dedicated account manager for personalized support",
                    "Transparent communication and regular updates",
                    "Flexible strategies that adapt to your needs",
                    "Focus on long-term partnerships, not quick wins",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant="gradient" size="lg">
                    Work With Us
                    <ArrowRight aria-hidden="true"  className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <div className="bg-gradient-primary rounded-3xl p-8 lg:p-12 flex items-center justify-center aspect-square">
                <Users aria-hidden="true"  className="w-32 h-32 text-white/20" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let's start a conversation about how Flexura can help your business achieve its digital marketing goals.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl">
                Get Started Today
                <ArrowRight aria-hidden="true"  className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
