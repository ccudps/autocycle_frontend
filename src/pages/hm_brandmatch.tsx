import React from "react";
import BrandMatchCard from "@/components/BrandMatchCard";

const cardsData = [
  {
    brand: "IKEA",
    selectUrl: "/need-material/ikea-collaboration",
    brandPlacement: "Sustainability Leadership, Low Prices, Scandinavian Design",
    sustainabilityPlacement:
      "Committed To Using Renewable And Recycled Materials And Aiming For Climate-Positive Operations By 2030.",
    productAssumptions: "Containers, Chairs, Tables, Floor Protection",
    materialMatch: "Recycled Plastic, FSC Wood", // <-- Added for compatibility
    matchValue: "120.000€",
    combinedReach: "20 Million",
    annualVolume: "75 Tons"
  },
  {
    brand: "LEGO",
    selectUrl: "/need-material/lego-collaboration",
    brandPlacement: "Creativity, Play, Learning, Global Icon",
    sustainabilityPlacement:
      "Innovating with bio-based and recycled materials for bricks and packaging, aiming for carbon-neutral operations.",
    productAssumptions: "Bricks, Packaging, Educational Kits",
    materialMatch: "Bio-based ABS, Recycled PET", // <-- Added
    matchValue: "95.000€",
    combinedReach: "30 Million",
    annualVolume: "60 Tons"
  },
  {
    brand: "DECATHLON",
    selectUrl: "/need-material/decathlon-collaboration",
    brandPlacement: "Affordable Sports, Innovation, Mass Market",
    sustainabilityPlacement:
      "Focused on sustainable product design and circular economy in sports equipment.",
    productAssumptions: "Sports Equipment, Outdoor Gear",
    materialMatch: "Recycled Nylon, Thermoplastics", // <-- Added
    matchValue: "110.000€",
    combinedReach: "18 Million",
    annualVolume: "80 Tons"
  }
];

const NeedMaterialBrandMatch = () => (
  <div className="bg-background min-h-screen">
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
          <BrandMatchCard
            key={card.brand + idx}
            brand={card.brand}
            selectUrl={card.selectUrl}
            assumptions={card.productAssumptions}
            materialMatch={card.materialMatch}
            matchValue={card.matchValue}
            combinedReach={card.combinedReach}
            annualVolume={card.annualVolume}
          />
        ))}
      </div>
    </div>
  </div>
);

export default NeedMaterialBrandMatch;
