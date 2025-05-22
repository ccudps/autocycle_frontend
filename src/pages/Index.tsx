import React from "react";
import Navbar from "@/components/Indexsections/Navbar";
import HeroSection from "@/components/Indexsections/HeroSection";
import HowItWorks from "@/components/Indexsections/HowItWorks";
import FaqSection from "@/components/Indexsections/FaqSection";
import GIFSection from "@/components/Indexsections/GIFSection"
import Footer from "@/components/Indexsections/Footer";

const Index: React.FC = () => {
  return (
    <div className="bg-background min-h-screen pt:5">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <GIFSection /> 
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
