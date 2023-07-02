import React, { useState } from "react";
import ImageCard from "./UI/ImageCard";
import teachers from "../teachers";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Heading from "./UI/Heading";

const TeacherCarosel = () => {
  const [current, setCurrent] = useState(0);
  const [slide, setSlide] = useState("");

  const goLeftHandler = () => {
    setSlide("animate-slideInLeft");
    if (current === 0) {
      setCurrent(teachers.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const goRightHandler = () => {
    setSlide("animate-slideInRight");
    if (current === teachers.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <>
      <Heading title={"Our Teachers"} />
      <div className="grid grid-cols-[5%_90%_5%]">
        <div
          onClick={goLeftHandler}
          className="cursor-pointer flex justify-center items-center bg-gradient-to-l from-primary/90 to-primary/60"
        >
          <AiOutlineArrowLeft className=" md:text-2xl lg:text-4xl  " />
        </div>
        <div>
          {teachers.map((teacher, index) => {
            return (
              current === index && (
                <ImageCard
                  key={teacher.id}
                  name={teacher.name}
                  quote={teacher.quote}
                  qualification={teacher.qualification}
                  path={teacher.path}
                  slideAnimate={slide}
                />
              )
            );
          })}
        </div>

        <div
          onClick={goRightHandler}
          className="cursor-pointer flex justify-center items-center bg-gradient-to-r from-primary/90 to-primary/60"
        >
          <AiOutlineArrowRight className="md:text-2xl lg:text-4xl " />
        </div>
      </div>
    </>
  );
};

export default TeacherCarosel;
