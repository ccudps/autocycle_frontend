import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="w-full bg-white flex justify-center py-16 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row w-full max-w-[1600px] justify-center px-4">
        {/* LEFT COLUMN */}
        <div className="w-2/3 z-10">
          <h1 className="text-black text-[64px] lg:text-[100px] leading-none uppercase font-bold relative">
            SMART<br />RECYCLING
          </h1>
          <div className="relative w-[80%] flex-shrink-0 md:aspect-square xl:aspect-auto xl:h-[500px]">
          {/* Light blue square background */}
          <div className="absolute -top-4 left-0 w-full h-full bg-blue-100 rounded -z-10 ml-5">
          {/* Text in top-left of grey square */}
          <div className="absolute bottom-2 left-1 z-10 text-left">
            <span className="font-bold text-2xl text-black leading-tight">
              BMW<br />x<br />DECATHLON
            </span>
          </div>
          
          {/* Frisbee image overlapping the square */}
          <img
            src="/images/bmwxdecathlonfrisbee.png"
            alt="BMW x Decathlon Frisbee"
            className="absolute right-[6.5rem] top-8 w-[20px] md:w-[1800px] h-auto z-20"
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
        <div className="w-1/3 z-10">
          <div className="relative flex-shrink-0">
            {/* Grey square background */}
            <div className="relative top-4 left-0 w-[80%] aspect-square bg-gray-300 rounded z-10">
              {/* Text in top-right of grey square */}
              <div className="relative top-0 right-2 z-10 text-right">
                <span className="font-bold text-2xl text-black leading-tight">
                  BOSCH<br />x<br />SAMSONITE
                </span>
              </div>
              {/* Suitcase image overlapping the square */}
              <img
                src="/images/bmwxsamsoniteluggage.png"
                alt="BMW x Samsonite Luggage"
                className="absolute right-[6.5rem] -bottom-10 w-[40px] md:w-[1800px] h-auto z-20"
                style={{ pointerEvents: 'none' }}
                draggable={false}
              />
            </div>
          </div>

          <div className="relative justify-end mt-2 mb-5 pr-4">
          {/* Heading */}
          <h2 className="text-black text-[40px] lg:text-[80px] uppercase font-bold text-right w-full">
            BRAND<br />STRONGER
          </h2>
          {/* Button */}
          <Link to="/collaborations" className="self-end">
            <button className="bg-black text-white px-8 py-4 text-xl rounded font-bold hover:bg-gray-900 transition mt-2">
              FIND YOUR COLLABORATION
            </button>
          </Link>
          {/* Card: BMW x IKEA */}
          </div>

          <div className="relative w-[80%] aspect-square flex-shrink-0">
            {/* Amber square background */}
            <div className="absolute top-0 left-0 w-full h-full bg-amber-200 rounded z-0"></div>
            {/* Chair image overlapping the square */}
            <img
              src="/images/bmwxikeachair.png"
              alt="BMW x IKEA Chair"
              className="absolute right-[6.5rem] -bottom-30 w-[10px] md:w-[900px] h-auto z-20"
              style={{ pointerEvents: 'none' }}
              draggable={false}
            />

            {/* Text in top-left of square */}
            <div className="absolute top-7 left-7 z-10 text-left">
              <span className="font-bold text-2xl text-black leading-tight">
                BMW<br />x<br />IKEA
              </span>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
