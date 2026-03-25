import LocationPageTemplate from "@/components/layout/LocationPageTemplate";

export default function GoogleAdsDelhiNcr() {
  return (
    <LocationPageTemplate
      title="Google Ads Agency in Delhi NCR | Flexura — Certified Google Partner"
      description="Certified Google Ads agency in Delhi NCR. Flexura manages high-ROI Google Ads campaigns for businesses in Delhi, Noida, Ghaziabad & Gurugram. Stop wasting ad spend."
      keywords="google ads agency delhi, google ads noida, ppc agency delhi ncr, google ads management delhi, adwords agency noida, sem agency delhi, paid ads ncr, flexura google ads"
      canonicalSlug="google-ads-delhi-ncr"
      h1="Google Ads Agency in Delhi NCR — Flexura"
      intro="Flexura manages data-driven Google Ads campaigns for businesses across Delhi NCR. We stop wasted ad spend and maximize every rupee with proven search, display, and shopping campaigns."
      city="Delhi NCR"
      schemaServiceName="Google Ads"
      services={[
        { name: "Search Ads (Google Search)", description: "Show up at the top of Google when customers search for your service." },
        { name: "Display Advertising", description: "Build brand awareness across 2M+ websites in the Google Display Network." },
        { name: "Shopping Campaigns", description: "Drive product sales directly from Google Search with Shopping ads." },
        { name: "YouTube Ads", description: "Video ad campaigns targeting NCR audiences on YouTube." },
        { name: "Remarketing Campaigns", description: "Re-engage website visitors who didn't convert the first time." },
        { name: "Google Ads Audit & Optimization", description: "Fix underperforming campaigns and lower your cost-per-click." },
      ]}
      highlights={[
        "Average 3–5x ROAS for Delhi NCR clients",
        "Google-certified campaign managers",
        "No minimum budget — suitable for all business sizes",
        "Weekly performance reports with full transparency",
        "Free Google Ads audit for new clients",
      ]}
      areas="Delhi, Noida, Ghaziabad, Gurugram, Faridabad, Greater Noida, Indirapuram, Noida Extension, Vaishali, Dwarka, Connaught Place, and all of Delhi NCR."
    />
  );
}
