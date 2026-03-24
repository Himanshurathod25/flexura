import { Check, X } from "lucide-react";

const benefits = [
  {
    metric: "Time to Results",
    traditional: "3-6 Months",
    flexura: "2-4 Weeks",
  },
  {
    metric: "Cost Efficiency",
    traditional: "High Setup & Ongoing",
    flexura: "Transparent Pricing",
  },
  {
    metric: "Scalability",
    traditional: "Limited by Team",
    flexura: "Infinitely Scalable",
  },
  {
    metric: "Campaign Flexibility",
    traditional: "Slow Adjustments",
    flexura: "Real-Time Optimization",
  },
  {
    metric: "Data Analytics",
    traditional: "Manual Reporting",
    flexura: "Automated Dashboards",
  },
  {
    metric: "Client Support",
    traditional: "Limited Hours",
    flexura: "24/7 Dedicated",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-gradient">Flexura</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we stack up against traditional digital marketing approaches
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-border/50">
                <th className="text-left py-6 px-4 font-display font-bold text-foreground">
                  Metric
                </th>
                <th className="text-center py-6 px-4 font-display font-bold text-muted-foreground">
                  Traditional Approach
                </th>
                <th className="text-center py-6 px-4 font-display font-bold text-primary">
                  Flexura Way
                </th>
              </tr>
            </thead>
            <tbody>
              {benefits.map((benefit, index) => (
                <tr
                  key={index}
                  className="border-b border-border/30 hover:bg-secondary/30 transition-colors duration-300"
                >
                  <td className="py-6 px-4 font-semibold text-foreground">
                    {benefit.metric}
                  </td>
                  <td className="py-6 px-4 text-center text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <X aria-hidden="true"  className="w-5 h-5 text-red-500" />
                      <span>{benefit.traditional}</span>
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center text-foreground font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      <Check aria-hidden="true"  className="w-5 h-5 text-green-500" />
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {benefit.flexura}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the Flexura difference with our data-driven approach and proven results
          </p>
          <a
            href="https://wa.me/918009613543?text=Hi%20Flexura%2C%20I%20found%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-primary text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>Get Started Today</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
