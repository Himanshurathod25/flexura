import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import RunningServices from "@/components/home/RunningServices";
import ServicesOverview from "@/components/home/ServicesOverview";
import BenefitsSection from "@/components/home/BenefitsSection";
import GrowthSection from "@/components/home/GrowthSection";
import RoadmapSection from "@/components/home/RoadmapSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ReviewsSection from "@/components/home/ReviewsSection";
import ClientCaseStudies from "@/components/home/ClientCaseStudies";
import StatsSection from "@/components/home/StatsSection";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Flexura | SEO, Google Ads &amp; Web Development Agency — Worldwide</title>
        <meta 
          name="description" 
          content="Flexura helps businesses worldwide grow online with SEO, Google Ads, website development and performance marketing. From Delhi to Dubai — we deliver real results. Get a free strategy call today." 
        />
        <meta name="keywords" content="SEO agency, Google Ads agency, PPC, web development, digital marketing, performance marketing, lead generation" />
        <link rel="canonical" href="https://flexura.in" />
      </Helmet>

      <Navbar />
      
      <main>
        <HeroSection />
        <RunningServices />
        <ServicesOverview />
        <BenefitsSection />
        <GrowthSection />
        <RoadmapSection />
        <WhyChooseUs />
        <ReviewsSection />
        <ClientCaseStudies />
        <StatsSection />
        <FAQ />
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
