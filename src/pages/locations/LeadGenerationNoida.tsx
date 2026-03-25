import LocationPageTemplate from "@/components/layout/LocationPageTemplate";

export default function LeadGenerationNoida() {
  return (
    <LocationPageTemplate
      title="Lead Generation in Noida | Flexura — Quality Leads Guaranteed"
      description="Flexura is Noida's top lead generation agency. We generate high-quality, sales-ready leads for real estate, education, healthcare, and B2B businesses in Noida & NCR."
      keywords="lead generation noida, lead generation company noida, b2b lead generation noida, real estate leads noida, lead generation agency noida ncr, flexura leads noida"
      canonicalSlug="lead-generation-noida"
      h1="Lead Generation Agency in Noida — Flexura"
      intro="Flexura specializes in high-quality lead generation for Noida businesses. From real estate to B2B SaaS — we deliver sales-ready leads using Google Ads, SEO, and social media funnels."
      city="Noida"
      schemaServiceName="Lead Generation"
      services={[
        { name: "Google Ads Lead Campaigns", description: "Instant leads via search and display ads targeting Noida buyers." },
        { name: "Meta Ads (Facebook & Instagram)", description: "Social media lead funnels with retargeting and lookalike audiences." },
        { name: "Landing Page Optimization", description: "High-converting pages designed specifically to capture leads." },
        { name: "Real Estate Lead Generation", description: "Qualified buyer and investor leads for Noida properties." },
        { name: "B2B Lead Generation", description: "LinkedIn and email outreach to decision-makers in NCR." },
        { name: "Lead Nurturing & CRM Setup", description: "Automated follow-up sequences to convert leads to customers." },
      ]}
      highlights={[
        "Guaranteed minimum lead volumes per campaign",
        "100% verified and qualified leads — no junk",
        "Cost-per-lead model available for Noida clients",
        "Industry-specific campaigns: real estate, education, health",
        "Real-time lead delivery to your CRM or WhatsApp",
      ]}
      areas="Sector 62, Sector 137, Greater Noida West, Noida Expressway, Sector 150, Knowledge Park, Film City, all Noida sectors, and surrounding NCR belt."
    />
  );
}
