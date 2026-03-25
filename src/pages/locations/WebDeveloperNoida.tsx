import LocationPageTemplate from "@/components/layout/LocationPageTemplate";

export default function WebDeveloperNoida() {
  return (
    <LocationPageTemplate
      title="Web Developer in Noida | Flexura — Top Rated Agency"
      description="Looking for a web developer in Noida? Flexura builds fast, SEO-ready, high-converting websites for businesses in Noida Sector 62, Sector 18, Greater Noida & entire NCR."
      keywords="web developer noida, website development noida, web design noida, noida web agency, wordpress developer noida, react developer noida, flexura noida"
      canonicalSlug="web-developer-noida"
      h1="Web Developer in Noida — Flexura"
      intro="Flexura is Noida's top-rated web development agency. We build fast, modern, SEO-optimized websites for businesses across Noida, Greater Noida, and all of Delhi NCR."
      city="Noida"
      schemaServiceName="Web Development"
      services={[
        { name: "Custom Website Development", description: "Bespoke websites built to your brand and business goals." },
        { name: "E-commerce Development", description: "High-converting online stores with seamless checkout experience." },
        { name: "Landing Page Design", description: "Conversion-focused landing pages that generate leads and sales." },
        { name: "WordPress & Next.js Development", description: "Flexible CMS and modern React-based site builds." },
        { name: "Website Speed Optimization", description: "Core Web Vitals improvements for better Google rankings." },
        { name: "Mobile-First Responsive Design", description: "Pixel-perfect layouts that work on every device." },
      ]}
      highlights={[
        "100% SEO-ready websites built to rank on Google",
        "Delivered in 7–14 business days",
        "Affordable pricing for Noida startups and businesses",
        "Local Noida team, available Mon–Sat 9AM–7PM",
        "Post-launch support and maintenance included",
      ]}
      areas="Sector 62, Sector 63, Sector 18, Sector 15, Sector 16, Sector 12, Greater Noida West, Noida Extension, Expressway, Film City, Dadri Road, and all surrounding areas of Delhi NCR."
    />
  );
}
