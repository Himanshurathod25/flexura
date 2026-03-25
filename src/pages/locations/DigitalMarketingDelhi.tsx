import LocationPageTemplate from "@/components/layout/LocationPageTemplate";

export default function DigitalMarketingDelhi() {
  return (
    <LocationPageTemplate
      title="Digital Marketing Agency in Delhi | Flexura — Top Rated"
      description="Best digital marketing agency in Delhi. Flexura provides SEO, Google Ads, social media marketing, and lead generation for Delhi businesses. Get measurable results today."
      keywords="digital marketing agency delhi, digital marketing delhi, online marketing delhi, social media marketing delhi, performance marketing delhi, google ads delhi, flexura delhi"
      canonicalSlug="digital-marketing-delhi"
      h1="Digital Marketing Agency in Delhi — Flexura"
      intro="Flexura is Delhi's trusted digital marketing partner. We help Delhi businesses reach more customers online with SEO, Google Ads, social media, and data-driven performance marketing."
      city="Delhi"
      schemaServiceName="Digital Marketing"
      services={[
        { name: "SEO Services Delhi", description: "Rank on page 1 of Google for Delhi and NCR keywords." },
        { name: "Google Ads Management", description: "ROI-focused PPC campaigns for Delhi audiences." },
        { name: "Social Media Marketing", description: "Instagram, Facebook and LinkedIn growth strategies." },
        { name: "Email Marketing", description: "Targeted campaigns to nurture and convert your leads." },
        { name: "Lead Generation", description: "High-quality leads for real estate, clinics, schools & more." },
        { name: "Brand Building", description: "Consistent brand identity across all digital channels." },
      ]}
      highlights={[
        "Delhi's most affordable full-service digital marketing",
        "No hidden costs — transparent monthly pricing",
        "Track every rupee spent with detailed analytics",
        "Google-certified team with 4+ years of experience",
        "Hindi & English support for Delhi clients",
      ]}
      areas="Connaught Place, Lajpat Nagar, South Delhi, Dwarka, Rohini, Pitampura, Karol Bagh, Saket, Vasant Kunj, Janakpuri, East Delhi, North Delhi, and all of Delhi NCR."
    />
  );
}
