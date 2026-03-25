import LocationPageTemplate from "@/components/layout/LocationPageTemplate";

export default function DigitalMarketingNoida() {
  return (
    <LocationPageTemplate
      title="Digital Marketing Agency in Noida | Flexura — Results-Driven"
      description="Top digital marketing agency in Noida. Flexura delivers SEO, Google Ads, social media, and lead generation for businesses across Noida Sector 62, 63, Greater Noida & NCR."
      keywords="digital marketing noida, digital marketing agency noida, online marketing noida, social media marketing noida, performance marketing noida, flexura digital noida"
      canonicalSlug="digital-marketing-noida"
      h1="Digital Marketing Agency in Noida — Flexura"
      intro="Flexura is Noida's results-driven digital marketing agency. We combine SEO, paid ads, social media, and analytics to grow your business online — fast and measurably."
      city="Noida"
      schemaServiceName="Digital Marketing"
      services={[
        { name: "Search Engine Optimization (SEO)", description: "Rank higher on Google for Noida and NCR searches." },
        { name: "Google Ads & PPC", description: "Instant traffic with high-ROI paid search campaigns." },
        { name: "Social Media Marketing", description: "Build followers and engagement on Instagram, Facebook & LinkedIn." },
        { name: "Lead Generation", description: "Quality leads for real estate, education, healthcare & more." },
        { name: "Content Marketing", description: "Blogs, videos and content that ranks and converts." },
        { name: "Performance Marketing", description: "Data-driven campaigns optimized for measurable ROI." },
      ]}
      highlights={[
        "Proven track record of growing Noida businesses online",
        "Monthly reporting with full transparency",
        "No long-term lock-in contracts",
        "Dedicated account manager for your brand",
        "Serving SMEs, startups and enterprises in Noida & NCR",
      ]}
      areas="Sector 62, Sector 63, Sector 18, Film City, Sector 16, Sector 15, Greater Noida, Noida Extension, Expressway, Dadri, and all surrounding Noida NCR areas."
    />
  );
}
