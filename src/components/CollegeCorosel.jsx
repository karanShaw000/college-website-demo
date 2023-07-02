import React, { useState } from "react";
import CollegeCard from "./UI/CollegeCard";
import collegeImg from "../collegeImg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const CollegeCorosel = () => {
  const [current, setCurrent] = useState(0);
  const [slide, setSlide] = useState("");

  const goLeftHandler = () => {
    setSlide("animate-slideInLeft");
    if (current === 0) {
      setCurrent(collegeImg.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const goRightHandler = () => {
    setSlide("animate-slideInRight");
    if (current === collegeImg.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <>
      <div className="grid grid-cols-[5%_90%_5%] ">
        <div
          onClick={goLeftHandler}
          className="cursor-pointer flex justify-center items-center"
        >
          <AiOutlineArrowLeft className="md:text-2xl lg:text-4xl text-primary" />
        </div>

        <div>
          {collegeImg.map((image, index) => {
            return (
              current === index && (
                <CollegeCard
                  key={image.id}
                  path={image.path}
                  quote={image.quote}
                  slideAnimate={slide}
                />
              )
            );
          })}
        </div>

        <div
          onClick={goRightHandler}
          className="cursor-pointer flex justify-center items-center"
        >
          <AiOutlineArrowRight className="md:text-2xl lg:text-4xl text-primary" />
        </div>
      </div>
    </>
  );
};

export default CollegeCorosel;
