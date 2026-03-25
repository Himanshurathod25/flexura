import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Location Pages
import WebDeveloperNoida from "./pages/locations/WebDeveloperNoida";
import WebDeveloperDelhi from "./pages/locations/WebDeveloperDelhi";
import WebDeveloperGhaziabad from "./pages/locations/WebDeveloperGhaziabad";
import DigitalMarketingNoida from "./pages/locations/DigitalMarketingNoida";
import DigitalMarketingDelhi from "./pages/locations/DigitalMarketingDelhi";
import SeoAgencyNoida from "./pages/locations/SeoAgencyNoida";
import LeadGenerationNoida from "./pages/locations/LeadGenerationNoida";
import AutomationAgencyDelhiNcr from "./pages/locations/AutomationAgencyDelhiNcr";
import VideoEditingNoida from "./pages/locations/VideoEditingNoida";
import GoogleAdsDelhiNcr from "./pages/locations/GoogleAdsDelhiNcr";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Location Pages */}
            <Route path="/web-developer-noida" element={<WebDeveloperNoida />} />
            <Route path="/web-developer-delhi" element={<WebDeveloperDelhi />} />
            <Route path="/web-developer-ghaziabad" element={<WebDeveloperGhaziabad />} />
            <Route path="/digital-marketing-noida" element={<DigitalMarketingNoida />} />
            <Route path="/digital-marketing-delhi" element={<DigitalMarketingDelhi />} />
            <Route path="/seo-agency-noida" element={<SeoAgencyNoida />} />
            <Route path="/lead-generation-noida" element={<LeadGenerationNoida />} />
            <Route path="/automation-agency-delhi-ncr" element={<AutomationAgencyDelhiNcr />} />
            <Route path="/video-editing-noida" element={<VideoEditingNoida />} />
            <Route path="/google-ads-delhi-ncr" element={<GoogleAdsDelhiNcr />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
