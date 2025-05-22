import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="flex w-full px-5 mt:4">
      <div className="flex w-[721px] max-w-full items-center gap-5 flex-wrap justify-between">
        <Link to="/" className="no-underline text-black">
          <div className="flex flex-coltext-2xl font-bold uppercase">
            <div className="leading-[36px]">AutoCycle</div>
          </div>
        </Link>
        <div className="flex items-center gap-16 text-lg font-medium justify-center ">
          <Link to="/" className="no-underline text-black font-bold">HOME</Link>
          <a href="#how-it-works" className="no-underline text-black capitalize">Solution</a>
          <a href="#faq" className="no-underline text-black capitalize">FAQ</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
