import React from "react";

const ImageCard = ({ name, quote, qualification, path, slideAnimate }) => {
  return (
    <div
      className={` px-1 py-2 md:px-2 md:py-4    font-mono lg:flex lg:justify-around lg:items-center lg:px-4 lg:py-6 shadow-2xl ${slideAnimate} bg-primary`}
    >
      <div className="flex justify-center items-center mt-2 flex-shrink-0  lg:mr-6  lg:mt-0">
        <img
          src={path}
          alt={name}
          className="w-80 h-60 lg:w-[25rem] lg:h-[20rem] shadow-2xl rounded-2xl "
        />
      </div>

      <div className="text-center  py-10   text-white">
        <h3 className="text-4xl font-bold mb-3 ">{name}</h3>
        <p className="text-xl  mb-3">{quote}</p>
        <p className="text-2xl underline">{qualification}</p>
      </div>
    </div>
  );
};

export default ImageCard;
