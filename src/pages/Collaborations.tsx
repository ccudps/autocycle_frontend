import React from "react";
import { Link } from "react-router-dom";

const options = [
  {
    to: "/have-material",
    bg: "bg-accent/30 hover:bg-accent/50",
    title: "FOR BRAND COLLABRATION",
    action: "I HAVE MATERIAL",
    img: "",
    alt: "Material pile"
  },
  {
    to: "/need-material",
    bg: "bg-amber-200/50 hover:bg-amber-200/80",
    title: "FOR BRAND COLLABRATION",
    action: "I NEED MATERIAL",
    img: "S",
    alt: "Material sample"
  }
];

const Collaborations: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col items-center pt-4">
        <div className="mb-20 flex items-center justify-center w-20 h-9 relative">
          <span className="font-poppins text-base text-muted-foreground absolute left-8 top-1">Form</span>
        </div>
        
        <div className="w-full max-w-3xl">
          <h2 className="font-mulish text-2xl font-extrabold leading-snug text-primary uppercase mb-14 text-center">
            START BY TELLING US WHETHER YOU&apos;RE CONTRIBUTING OR LOOKING FOR MATERIALS.
          </h2>
          
          <div className="flex justify-between gap-8 w-full flex-wrap md:flex-nowrap">
            {options.map((opt, i) => (
              <Link
                to={opt.to}
                key={opt.to}
                className="w-[350px] h-[350px] max-md:w-full max-md:mx-auto cursor-pointer flex flex-col items-center justify-between rounded-xl shadow transition-colors duration-200 group"
              >
                <div className={`w-full h-full flex flex-col items-center justify-between py-8 px-4 ${opt.bg} rounded-xl`}>
                  <div className="flex flex-col items-center">
                    <span className="font-mulish text-lg font-bold text-primary text-center mb-2 tracking-wide">
                      {opt.title}
                    </span>
                    <span className="font-mulish text-2xl font-extrabold text-primary text-center uppercase">
                      {opt.action}
                    </span>
                  </div>
                  <img 
                    src={opt.img}
                    alt={opt.alt}
                    className="max-w-[80%] h-auto mt-4 rounded-md shadow"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
