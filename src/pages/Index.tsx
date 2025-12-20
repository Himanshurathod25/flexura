import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
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
        <ServicesOverview />
        <WhyChooseUs />
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
