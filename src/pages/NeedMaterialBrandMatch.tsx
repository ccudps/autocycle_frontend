import React from "react";
import BrandMatchCard from "@/pages/nm_brandmatch";

const cardsData = [
  {
    brand: "IKEA",
    selectUrl: "/need-material/ikea-collaboration",
    assumptions: "Containers, Chairs, Tables, Floor Protection",
    materialMatch: "Containers, Chairs, Tables, Floor Protection",
    matchValue: "120.000€",
    combinedReach: "20 Million",
    annualVolume: "75 Tons"
  },
  {
    brand: "LEGO",
    selectUrl: "/need-material/lego-collaboration",
    assumptions: "Containers, Chairs, Tables, Floor Protection",
    materialMatch: "Containers, Chairs, Tables, Floor Protection",
    matchValue: "120.000€",
    combinedReach: "20 Million",
    annualVolume: "75 Tons"
  },
  {
    brand: "DECATHLON",
    selectUrl: "/need-material/decathlon-collaboration",
    assumptions: "Containers, Chairs, Tables, Floor Protection",
    materialMatch: "Containers, Chairs, Tables, Floor Protection",
    matchValue: "120.000€",
    combinedReach: "20 Million",
    annualVolume: "75 Tons"
  }
];

const NeedMaterialBrandMatch = () => (
  <div className="bg-background min-h-screen">
    {/* Top navigation and heading */}
    <div className="max-w-5xl mx-auto pt-16 px-4 sm:px-8">
      <div className="flex items-center gap-4 font-poppins text-base text-muted-foreground mb-12">
        <span className="text-muted-foreground">Form</span>
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" className="rotate-90">
          <path d="M6.31971 15.4084L11.1962 10.5319L6.31971 5.65543L7.295 3.70483L14.1221 10.5319L7.295 17.359L6.31971 15.4084Z" fill="currentColor" />
        </svg>
        <span className="text-primary">Brands</span>
      </div>
      <h1 className="font-mulish text-2xl sm:text-3xl font-extrabold uppercase text-center text-primary mb-14">
        All set. Your results are ready to explore
      </h1>
      <div className="flex flex-col gap-10">
        {cardsData.map((card, idx) => (
          <BrandMatchCard key={card.brand + idx} {...card} />
        ))}
      </div>
    </div>
  </div>
);

export default NeedMaterialBrandMatch;
