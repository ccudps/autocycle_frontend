import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="w-full bg-white flex py-16">
      <div className="flex flex-col md:flex-row w-full max-w-[1600px] justify-center px-4">
        {/* LEFT COLUMN */}
        <div className="w-full md:w-60% z-10">
          <h1 className="text-black text-[64px] lg:text-[100px] leading-none uppercase font-bold relative">
            Connect<br />Brands
          </h1>
          <div className="relative w-[100%] flex-shrink-0 md:aspect-square xl:aspect-auto xl:h-[500px]">
          {/* Light blue square background */}
          <div className="absolute -top-4 left-0 w-full h-full bg-blue-100 rounded -z-10 ml-5">
          {/* Text in top-left of grey square */}
          <div className="absolute bottom-2 left-1 z-10 text-left">
            <span className="font-bold text-l text-black leading-tight">
              BMW<br />x<br />DECATHLON
            </span>
          </div>
          
          {/* Frisbee image overlapping the square */}
          <img
            src="/images/bmwxdecathlon.png"
            alt="BMW x Decathlon Frisbee"
            className="absolute -left-5 top-8 w-[73%] h-auto z-20"
            style={{ pointerEvents: 'none' }}
            draggable={false}
          />
          </div>
          

          </div>

          <div className="mt-6 text-base text-gray-800 font-normal z-10">
              Show your commitment to sustainability by elevating your brand.<br />
              We transform your recycling efforts into a powerful brand asset that customers trust and remember.<br /><br />
              We match brands based on material technical requirements, brand placement, and advertising value.
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-40% z-10">
        {/* Samsonite x Bosch */} 
          <div className="relative flex-shrink-0 w-[100%] h-[0] pt-[72%]">
            {/* Grey square background */}
            <div className="absolute top-4 right-2 w-[65%] aspect-square bg-gray-300 rounded z-10 max-w-[340px]">
              {/* Text in top-right of grey square */}
              <div className="relative top-0 right-2 z-10 text-right">
                <span className="font-bold text-l text-black leading-tight">
                  BOSCH<br />x<br />SAMSONITE
                </span>
              </div>
              {/* Suitcase image overlapping the square */}
              <img
                src="/images/boschxsamsonite.png"
                alt="BMW x Samsonite Luggage"
                className="absolute -left-8 -bottom-5 w-[75%] h-auto z-20"
                style={{ pointerEvents: 'none' }}
                draggable={false}
              />
            </div>
          </div>

          <div className="relative mb:8">
            {/* Heading */}
            <div className="relative w-full overflow-visible">
                <h2 className="text-black text-[40px] md:text-[60px] lg:text-[80px] leading-none uppercase font-bold w-fit ml-auto text-right mb:2">
                  <span className="block">CLOSE </span>
                  <span className="block">LOOPS</span>
                </h2>
            </div>
          {/* Button */}
          <Link to="/collaborations" className="self-end">
            <button className="bg-black absolute right-0 text-white px-8 py-2 text-s hover:bg-gray-900 transition mt:4">
              FIND YOUR COLLABORATION
            </button>
          </Link>
          {/* Card: BMW x IKEA */}
          </div>

          <div className="relative flex-shrink-0 w-[100%] h-[0] pt-[100%]">
            {/* Amber square background */}
            <div className="absolute top-12 right-0 w-[70%] aspect-square bg-[#F1E7D7] z-0">
            {/* Chair image overlapping the square */}
              <img
                src="images/bmxikeachair.png"
                alt="BMW x IKEA Chair"
                className="absolute left-[1rem] -bottom-10 w-[95%] h-auto z-30"
                style={{ pointerEvents: 'none' }}
                draggable={false}
              />

              {/* Text in top-left of square */}
              <div className="absolute top-2 left-2 z-20 text-left">
                <span className="font-bold text-l text-black leading-tight">
                  BMW<br />x<br />IKEA
                </span>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
