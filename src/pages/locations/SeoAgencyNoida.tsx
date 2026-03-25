import LocationPageTemplate from "@/components/layout/LocationPageTemplate";

export default function SeoAgencyNoida() {
  return (
    <LocationPageTemplate
      title="SEO Agency in Noida | Flexura — Rank on Google Page 1"
      description="Top SEO agency in Noida. Flexura delivers keyword research, on-page SEO, technical SEO, and link building to help Noida businesses rank on Google and get organic traffic."
      keywords="seo agency noida, seo services noida, search engine optimization noida, seo company noida, local seo noida, seo expert noida, google ranking noida, flexura seo"
      canonicalSlug="seo-agency-noida"
      h1="SEO Agency in Noida — Rank Higher on Google"
      intro="Flexura is Noida's specialist SEO agency. We deliver proven search engine optimization strategies that move Noida businesses from page 3 to page 1 of Google — permanently."
      city="Noida"
      schemaServiceName="SEO"
      services={[
        { name: "Keyword Research & Strategy", description: "Find the exact terms your Noida customers search for." },
        { name: "On-Page SEO Optimization", description: "Optimize every page title, meta, heading and content." },
        { name: "Technical SEO Audit", description: "Fix crawlability, speed, structured data and indexing issues." },
        { name: "Local SEO for Noida", description: "Rank in Google Maps and local pack for Noida searches." },
        { name: "Link Building", description: "High-authority backlinks that boost your domain rating." },
        { name: "Monthly SEO Reporting", description: "Full transparency — rankings, traffic, and goals tracked monthly." },
      ]}
      highlights={[
        "Proven results: Page 1 rankings for 50+ Noida businesses",
        "White-hat SEO only — no penalties, no shortcuts",
        "Local SEO expertise for Noida, NCR, and pan-India",
        "Google Search Console and Analytics integrated tracking",
        "Dedicated SEO strategist for your account",
      ]}
      areas="Sector 62, Sector 18, Sector 63, Greater Noida, Noida Extension, Film City, Sector 16, Sector 15, Tech Parks & Business Hubs across Noida and NCR."
    />
  );
}
