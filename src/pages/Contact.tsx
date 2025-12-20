import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MessageCircle, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Flexura | Get Your Free Digital Marketing Consultation</title>
        <meta 
          name="description" 
          content="Contact Flexura for a free digital marketing consultation. Reach out via WhatsApp to discuss your SEO, PPC, and content marketing needs." 
        />
        <link rel="canonical" href="https://flexura.com/contact" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Let's Work <span className="text-gradient">Together</span>
              </h1>
              <p className="text-lg text-primary-foreground/70">
                Ready to transform your digital presence? Get in touch with our team for a free consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Reach out to discuss your marketing goals and get a personalized strategy
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/8009613543"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  WhatsApp
                </h3>
                <p className="text-muted-foreground mb-6">
                  Chat directly with us for instant responses
                </p>
                <div className="inline-flex items-center gap-2 text-primary font-semibold">
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </a>

              {/* Email Card */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Email
                </h3>
                <p className="text-muted-foreground mb-6">
                  hello@flexura.com
                </p>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours
                </p>
              </div>

              {/* Response Time Card */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Response Time
                </h3>
                <p className="text-muted-foreground mb-6">
                  WhatsApp: Instant
                </p>
                <p className="text-sm text-muted-foreground">
                  Email: Within 24 hours
                </p>
              </div>
            </div>

            {/* Main CTA */}
            <div className="text-center">
              <a
                href="https://wa.me/8009613543"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 mb-8"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-muted-foreground">
                8009613543 • Available 24/7
              </p>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                What Happens <span className="text-gradient">Next</span>
              </h2>

              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "Initial Chat",
                    description: "Share your business goals and current challenges via WhatsApp"
                  },
                  {
                    step: 2,
                    title: "Strategy Discussion",
                    description: "We analyze your situation and propose a customized marketing roadmap"
                  },
                  {
                    step: 3,
                    title: "Proposal & Agreement",
                    description: "Receive a detailed proposal with timeline, deliverables, and investment"
                  },
                  {
                    step: 4,
                    title: "Campaign Launch",
                    description: "We implement your strategy and begin driving measurable results"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary text-white font-bold flex-shrink-0 mt-1">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Growth Journey?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let's discuss your business goals and create a winning digital marketing strategy.
            </p>
            <a
              href="https://wa.me/8009613543"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
