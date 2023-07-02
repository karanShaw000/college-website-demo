import React from "react";

const CollegeCard = ({ path, quote, slideAnimate }) => {
  return (
    <div className={`relative  ${slideAnimate} shadow-xl`}>
      <img
        src={path}
        alt={path}
        className="h-60 md:h-[25rem] lg:h-[30rem] w-full rounded-lg"
      />
      <div className="absolute top-0 left-0 bg-black/50  w-full h-full rounded-lg shadow-xl"></div>

      <div className="  absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center ">
        <div className="px-2 py-2 w-[80%] bg-white/20 backdrop-blur-md text-highText/80 rounded-lg shadow-xl text-sm md:text-2xl md:top-[10rem] md:px-4 md:py-6 lg:top-[18rem] lg:w-[70%] border-gainsboro/40 border-2 font-Ysabeau font-semibold">
          {quote}
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
