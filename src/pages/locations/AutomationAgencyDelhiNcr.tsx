import LocationPageTemplate from "@/components/layout/LocationPageTemplate";

export default function AutomationAgencyDelhiNcr() {
  return (
    <LocationPageTemplate
      title="Automation Agency in Delhi NCR | Flexura — AI & Business Automation"
      description="Top business automation agency in Delhi NCR. Flexura automates workflows, CRM, marketing, and operations for Delhi, Noida & Ghaziabad businesses using AI-powered tools."
      keywords="automation agency delhi, business automation delhi ncr, marketing automation noida, workflow automation delhi, ai automation delhi, crm automation ncr, flexura automation"
      canonicalSlug="automation-agency-delhi-ncr"
      h1="Automation Agency in Delhi NCR — Flexura"
      intro="Flexura helps Delhi NCR businesses save time and scale faster with intelligent automation. From marketing to operations — we eliminate repetitive tasks and let your team focus on growth."
      city="Delhi NCR"
      schemaServiceName="Business Automation"
      services={[
        { name: "Marketing Automation", description: "Automate email sequences, lead follow-ups, and nurture campaigns." },
        { name: "CRM Automation Setup", description: "HubSpot, Zoho, or custom CRM workflows for sales teams." },
        { name: "WhatsApp Business Automation", description: "Auto-reply, chatbot, and bulk messaging for customer support." },
        { name: "Social Media Scheduling", description: "Automated posting and reporting across all platforms." },
        { name: "Workflow & Operations Automation", description: "Zapier, Make.com, and custom API integrations." },
        { name: "AI Chatbot Development", description: "24/7 website and WhatsApp chatbots for lead capture and support." },
      ]}
      highlights={[
        "Save 10–20 hours per week with smart automation",
        "No-code and custom-code solutions available",
        "Serving agencies, real estate, clinics, and e-commerce in NCR",
        "Full onboarding and training for your team",
        "Ongoing support and system monitoring",
      ]}
      areas="Delhi, Noida, Ghaziabad, Gurugram, Faridabad, Greater Noida, Indirapuram, Dwarka, Rohini, and all of the Delhi NCR metro region."
    />
  );
}
