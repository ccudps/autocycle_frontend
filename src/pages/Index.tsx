import React from "react";
import Navbar from "@/components/Indexsections/Navbar";
import HeroSection from "@/components/Indexsections/HeroSection";
import HowItWorks from "@/components/Indexsections/HowItWorks";
import FaqSection from "@/components/Indexsections/FaqSection";
import GIFSection from "@/components/Indexsections/GIFSection";
import Footer from "@/components/Indexsections/Footer";

const Index: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-background max-w-[1600px] mx-auto min-h-screen">
        <Navbar />
        <HeroSection />
        <HowItWorks />
        <GIFSection />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
