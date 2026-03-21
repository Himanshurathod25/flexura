import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How long does it take to see results?",
    answer: "Results vary by service. PPC campaigns can show results within 2-4 weeks, while SEO typically takes 3-6 months. Our data-driven approach ensures measurable improvements at every stage."
  },
  {
    id: 2,
    question: "What makes Flexura different from other agencies?",
    answer: "We combine strategic expertise with transparent reporting and personalized service. Every campaign is customized to your business goals with 24/7 support and real-time optimization."
  },
  {
    id: 3,
    question: "Do you work with startups and small businesses?",
    answer: "Absolutely! We work with businesses of all sizes. We customize our services and pricing to fit your budget while delivering professional results."
  },
  {
    id: 4,
    question: "How do you measure campaign success?",
    answer: "We track KPIs specific to your goals: traffic growth, lead generation, conversions, ROI, engagement rates, and more. You'll get transparent monthly reports."
  },
  {
    id: 5,
    question: "Can I see examples of your previous work?",
    answer: "Yes! Check out our Case Studies section featuring real client results with 250+ Clients, 98% satisfaction rate, and proven ROI across industries."
  },
  {
    id: 6,
    question: "What if I want to cancel or change my services?",
    answer: "We offer flexible service agreements. You can adjust, upgrade, or pause services anytime based on your changing needs."
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get clarity on our services, pricing, and process before you start your growth journey
          </p>
        </div>

        {/* FAQs Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-secondary/30 transition-colors duration-300"
              >
                <h3 className="font-semibold text-foreground text-left text-lg">
                  {faq.question}
                </h3>
                {openId === faq.id ? (
                  <ChevronUp aria-hidden="true"  className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown aria-hidden="true"  className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
                )}
              </button>

              {openId === faq.id && (
                <div className="px-6 pb-6 border-t border-border/30 animate-in fade-in slide-in-from-top-2">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Still have questions? Let's talk!
          </p>
          <a
            href="https://wa.me/918009613543?text=Hi%20Flexura%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>Chat on WhatsApp</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
