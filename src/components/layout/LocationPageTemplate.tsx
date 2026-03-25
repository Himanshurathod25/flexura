import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

interface Service {
  name: string;
  description: string;
}

interface LocationPageTemplateProps {
  title: string;
  description: string;
  keywords: string;
  canonicalSlug: string;
  h1: string;
  intro: string;
  city: string;
  services: Service[];
  highlights: string[];
  areas: string;
  schemaServiceName: string;
}

const LocationPageTemplate = ({
  title,
  description,
  keywords,
  canonicalSlug,
  h1,
  intro,
  city,
  services,
  highlights,
  areas,
  schemaServiceName,
}: LocationPageTemplateProps) => {
  const waLink = `https://wa.me/918009613543?text=Hi%20Flexura%2C%20I%20need%20${encodeURIComponent(schemaServiceName)}%20in%20${encodeURIComponent(city)}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: schemaServiceName,
    provider: {
      "@type": "LocalBusiness",
      name: "Flexura",
      url: "https://flexura.in",
      telephone: "+918009613543",
      email: "hello@flexura.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        addressRegion: "Delhi NCR",
        addressCountry: "IN",
      },
    },
    areaServed: city,
    description,
    url: `https://flexura.in/${canonicalSlug}`,
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://flexura.in/${canonicalSlug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://flexura.in/${canonicalSlug}`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="bg-gradient-hero text-white py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              {h1}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              {intro}
            </p>
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="gradient" className="rounded-full px-8 py-3 text-base font-semibold hover:scale-105 transition-transform">
                Get a Free Strategy Call →
              </Button>
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
              {schemaServiceName} Services in {city}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div
                  key={s.name}
                  className="p-6 rounded-2xl border border-border/50 bg-card shadow-card hover:shadow-soft transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{s.name}</h3>
                  <p className="text-muted-foreground text-sm">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-10">
              Why Choose Flexura in {city}?
            </h2>
            <ul className="space-y-4 text-left max-w-xl mx-auto">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-foreground">
                  <span className="mt-0.5 text-primary font-bold text-lg">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-14 px-4 bg-background">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Areas We Serve in {city}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{areas}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-hero text-white text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-display font-bold mb-4">
              Ready to Grow in {city}?
            </h2>
            <p className="text-white/80 mb-8">
              Get a free consultation with our {city} team. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <Button variant="gradient" className="rounded-full px-8 py-3 font-semibold hover:scale-105 transition-transform">
                  WhatsApp Us Now
                </Button>
              </a>
              <a href="mailto:hello@flexura.in">
                <Button variant="outline" className="rounded-full px-8 py-3 font-semibold border-white/30 text-white hover:bg-white/10">
                  Email: hello@flexura.in
                </Button>
              </a>
            </div>
            <p className="text-white/60 text-sm mt-6">📞 +91 80096 13543 | Mo–Sa 9AM–7PM</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LocationPageTemplate;
