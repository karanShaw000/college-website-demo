import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="text-center text-primary text-3xl md:text-5xl font-serif font-semibold  py-4 ">
      <span className="relative after:content-[''] after:absolute after:w-[20%] after:h-[2px] after:right-0 after:bottom-[50%] after:bg-primary after:translate-x-[110%] before:content-[''] before:absolute before:w-[20%] before:h-[2px] before:left-0 before:bottom-[50%] before:bg-primary before:translate-x-[-110%] md:before:w-[50%]md:after:w-[50%]">
        {title}
      </span>
    </div>
  );
};

export default Heading;
