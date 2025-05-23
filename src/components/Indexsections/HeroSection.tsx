import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="w-full bg-white flex py-16 border-2 border-red-200 items-3center">
      <div className="flex flex-col md:flex-row w-full max-w-[1600px] justify-center px-4">
        {/* LEFT COLUMN */}
        <div className="w-full md:w-70% z-10 border-2 border-red-200">
          <h1 className="text-black text-[clamp(4rem,6vw,8rem)] leading-none uppercase font-bold relative">
            Connect<br />Brands
          </h1>
          <div className="relative w-[100%] flex-shrink-0 aspect-square  xl:h-[600px]">
          {/* Light blue square background */}
          <div className="absolute -top-4 left-0 w-full h-full bg-blue-100 rounded -z-10 ml-5">
          {/* Text in top-left of grey square */}
          <div className="absolute bottom-2 left-1 z-10 text-left">
            <span className="font-bold text-l text-black leading-tight text-[clamp(1rem,2vw,2rem)]">
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
          {/* Heading */}
          <div className="absolute top-[240px] -right-[5rem]">
                <h2 className=" text-black text-[clamp(4rem,6vw,8rem)] leading-none uppercase font-bold w-fit ml-auto text-right mb:2 ">
                  <span className="block">CLOSE </span>
                  <span className="block">LOOPS</span>
                </h2>
          </div>

          </div>
          

          </div>
          
          <div className="mt-6 text-base text-gray-800 font-normal z-10">
              Show your commitment to sustainability by elevating your brand.<br />
              We transform your recycling efforts into a powerful brand asset that customers trust and remember.<br /><br />
              We match brands based on material technical requirements, brand placement, and advertising value.
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-center w-full border-2 border-red-200">
        {/* Samsonite x Bosch */} 
          <div className="w-full flex justify-end items-center z-10 border-2 border-red-800">
            {/* Grey square background */}
            <div className="relative w-[70%] aspect-square bg-gray-300 z-10 max-w-[400px]">
              {/* Text in top-right of grey square */}
              <div className="relative top-0 right-2 z-10 text-right">
                <span className="font-bold text-black leading-tight text-[clamp(1rem,2vw,2rem)]">
                  BOSCH<br />x<br />SAMSONITE
                </span>
              </div>
              {/* Suitcase image overlapping the square */}
              <img
                src="/images/boschxsamsonite.png"
                alt="BMW x Samsonite Luggage"
                className="absolute bottom-0 -left-5 h-[70%] z-20 max-w-[240] border-2 border-red-800"
                style={{ pointerEvents: 'none' }}
                draggable={false}
              />
            </div>
          </div>

          {/* Container for button between squares */}
          <div className="w-full h-[300px] flex justify-end items-center z-10 border-2 border-red-800">
            <Link to="/collaborations">
              <button className="bg-black text-white px-8 py-4 text-M hover:bg-gray-900 transition  border-red-200">
                FIND YOUR COLLABORATION
              </button>
            </Link>
          </div>

        <div className="flex w-full justify-end items-center h-[100px] border-2 border-red-800">
          <div className="relative w-full h-full">
            {/* Amber square background */}
            <div className="absolute right-0 w-[70%] aspect-square border-2 border-red-800 bg-[#F1E7D7] max-w-[400px] z-0">
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
                <span className="font-bold text-black leading-tight text-[clamp(1rem,2vw,2rem)]">
                  BMW<br />x<br />IKEA
                </span>
              </div>
            </div>
      
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
