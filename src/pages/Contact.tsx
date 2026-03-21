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

        {/* Contact Methods & Form */}
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

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              {/* Contact Form */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-10 shadow-sm">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
                    <input type="text" id="name" name="name" required className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" placeholder="John Doe" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
                    <input type="email" id="email" name="email" required className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number (Optional)</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" title="10 digit phone number" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" placeholder="9876543210" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-foreground">Service Interested In</label>
                    <select id="service" name="service" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground appearance-none">
                      <option value="SEO">SEO</option>
                      <option value="Performance Marketing">Performance Marketing</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Web Design">Web Design</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
                    <textarea id="message" name="message" required minLength={20} rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none" placeholder="Tell us about your project... (min 20 characters)"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                    <span>Request Free Audit</span>
                    <ArrowRight aria-hidden="true" className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Contact Cards */}
              <div className="flex flex-col gap-6">
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">Contact Information</h3>
                  <p className="text-muted-foreground mb-8">
                    Prefer to reach out directly? Use one of the methods below. We typically respond within 2 hours.
                  </p>
                  
                  <div className="space-y-6">
                    <a href="https://wa.me/918009613543?text=Hi%20Flexura%2C%20I%27d%20like%20to%20know%20more." target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <MessageCircle aria-hidden="true" className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">WhatsApp Us</p>
                        <p className="text-sm text-muted-foreground">+91 80096 13543</p>
                      </div>
                    </a>

                    <a href="mailto:hello@flexura.com" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <Mail aria-hidden="true" className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email Us</p>
                        <p className="text-sm text-muted-foreground">hello@flexura.com</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                        <Clock aria-hidden="true" className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Response Time</p>
                        <p className="text-sm text-muted-foreground">Within 2 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-primary rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                  <h3 className="font-display text-xl font-bold mb-2">Ready for Growth?</h3>
                  <p className="text-white/80 text-sm mb-6">
                    Our team of experts is ready to help you scale your business through data-driven digital marketing.
                  </p>
                  <a href="tel:+918009613543" className="inline-flex items-center gap-2 font-semibold hover:text-white/80 transition-colors">
                    Call us directly <ArrowRight aria-hidden="true" className="w-4 h-4" />
                  </a>
                </div>
              </div>
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

export default Contact;
