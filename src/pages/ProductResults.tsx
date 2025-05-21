import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductResults: React.FC = () => {
  const { brand } = useParams();
  const navigate = useNavigate();

  // Mock data based on selected brand
  const brandData = {
    company: "BMW",
    collaborator: brand?.toUpperCase() || "DECATHLON",
    material: "Plastic/PP",
    location: "Munich",
    description:
      "This piece of furniture is a striking collaboration between BMW and IKEA, embodying the essence of circular design and functional minimalism. The structure features a sleek, aerodynamic silhouette reminiscent of automotive form language—its gently rounded edges and precise panel alignment evoke the precision of a BMW dashboard, while its matte black drawer fronts contrast elegantly with the soft olive green frame, nodding to sustainable material palettes and calm interior moods. The unit comprises four integrated drawers with recessed pull handles, echoing the ergonomic intuitiveness of car interiors, and a spacious open shelf that brings in IKEA's signature functionality and accessibility. Ideal for both home offices and living rooms, this item offers a visual and emotional bridge between high-performance engineering and relaxed domestic living.",
    matchValue: "120.000€",
    combinedReach: "20 Million",
    annualPlasticVolume: "75 Tons"
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb navigation */}
      <div className="max-w-5xl mx-auto pt-16 px-4 sm:px-8">
        <div className="flex items-center gap-4 font-poppins text-base text-muted-foreground mb-8">
          <Link to="/" className="text-muted-foreground hover:underline">Form</Link>
          <svg width="20" height="21" fill="none" className="rotate-90 text-muted-foreground">
            <path d="M6.31971 15.4084L11.1962 10.5319L6.31971 5.65543L7.295 3.70483L14.1221 10.5319L7.295 17.359L6.31971 15.4084Z" fill="currentColor" />
          </svg>
          <Link
            to={brand?.includes('have') ? "/hm_brandmatch" : "/nm_brandmatch"}
            className="text-muted-foreground hover:underline"
          >
            Brands
          </Link>
          <svg width="20" height="21" fill="none" className="rotate-90 text-muted-foreground">
            <path d="M6.31971 15.4084L11.1962 10.5319L6.31971 5.65543L7.295 3.70483L14.1221 10.5319L7.295 17.359L6.31971 15.4084Z" fill="currentColor" />
          </svg>
          <span className="text-primary">Suggestion</span>
        </div>

        {/* Brand header */}
        <h1 className="font-[Figtree,sans-serif] text-[60px] sm:text-[100px] font-extrabold uppercase leading-[1] text-primary mb-10">
          {brandData.company}<br />X<br />{brandData.collaborator}
        </h1>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Product image */}
          <div className="lg:w-1/2">
            <div className="bg-muted rounded-lg flex items-center justify-center p-8 min-h-[320px]">
              <img
                src="/lovable-uploads/65bd1d70-31e6-43c0-89a1-eb902a13b48d.png"
                alt="BMW Collaboration Product"
                className="w-full max-w-[400px] rounded-lg shadow"
              />
            </div>
          </div>

          {/* Right side - Product details */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            {/* User input summary */}
            <div className="bg-accent/30 p-8 mb-8 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-primary font-poppins">USER INPUT:</h3>
              <div className="grid grid-cols-2 gap-y-3 font-mulish text-base">
                <div>Company Name</div>
                <div className="font-bold">{brandData.company}</div>
                <div>Collab. Company</div>
                <div className="font-bold">{brandData.collaborator}</div>
                <div>Material</div>
                <div className="font-bold">{brandData.material}</div>
                <div>Location</div>
                <div className="font-bold">{brandData.location}</div>
              </div>
              <Button
                className="mt-6 float-right font-poppins bg-primary text-primary-foreground hover:bg-primary/90"
                type="button"
                onClick={() => navigate(-1)}
              >
                Change
              </Button>
            </div>

            {/* Product description */}
            <p className="text-base mb-8 text-primary font-mulish">{brandData.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div>
                <h4 className="uppercase text-xs font-bold text-muted-foreground mb-1 font-mulish">MATCH VALUE</h4>
                <p className="text-lg font-semibold">{brandData.matchValue}</p>
              </div>
              <div>
                <h4 className="uppercase text-xs font-bold text-muted-foreground mb-1 font-mulish">COMBINED REACH</h4>
                <p className="text-lg font-semibold">{brandData.combinedReach}</p>
              </div>
              <div>
                <h4 className="uppercase text-xs font-bold text-muted-foreground mb-1 font-mulish">ANNUAL PLASTIC VOLUME</h4>
                <p className="text-lg font-semibold">{brandData.annualPlasticVolume}</p>
              </div>
            </div>
          </div>
        </div>

        {/* More inspiration section */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold mb-6 font-mulish text-primary">Explore more inspiration &gt;</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col">
                <div className="bg-muted aspect-square mb-4 flex items-center justify-center rounded-lg">
                  <img
                    src={`/lovable-uploads/65bd1d70-31e6-43c0-89a1-eb902a13b48d.png`}
                    alt={`BMW x VITRA Product ${i}`}
                    className="w-3/4 h-3/4 object-cover rounded"
                  />
                </div>
                <h4 className="font-semibold font-poppins text-primary">Dynamic Comfort</h4>
                <p className="text-sm text-muted-foreground font-mulish">
                  Eco-friendly materials for furniture and home products
                </p>
              </div>
            ))}
          </div>

          {/* Product idea input */}
          <div className="mb-16">
            <label className="block mb-4 font-mulish text-primary">
              What kind of product do you imagine for this collaboration? (optional)
            </label>
            <Input
              type="text"
              placeholder="Backpack, Nightstand"
              className="w-full h-14 border border-border rounded-lg font-mulish text-base"
            />
          </div>

          {/* Get inspired button */}
          <div className="flex justify-center mb-16">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 py-4 px-8 text-xl rounded-lg font-poppins"
              onClick={() => navigate("/collaborations")}
              type="button"
            >
              Get inspired
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductResults;
