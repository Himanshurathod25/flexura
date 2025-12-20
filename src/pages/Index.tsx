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
        <title>Flexura | Smart Digital Marketing Agency That Delivers Results</title>
        <meta 
          name="description" 
          content="Transform your online presence with Flexura's data-driven digital marketing. SEO, PPC, social media, and content marketing for startups and businesses." 
        />
        <meta name="keywords" content="digital marketing agency, SEO, PPC, social media marketing, content marketing" />
        <link rel="canonical" href="https://flexura.com" />
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
