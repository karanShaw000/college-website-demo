import React from "react";
import Heading from "./UI/Heading";

const AboutUs = () => {
  return (
    <section className="px-2 py-4 flex justify-center items-center flex-col ">
      <Heading title={"About Us"} />
      <p className="w-[85%] text-primary font-OpenSans lg:text-xl">
        Welcome to Oakridge University, where excellence meets opportunity.
        Founded in 1875, Oakridge University has been a prestigious institution
        of higher learning committed to nurturing curious minds and empowering
        the leaders of tomorrow. Situated amidst the breathtaking landscapes of
        Cityville, our campus offers a serene and inspiring environment that
        encourages holistic growth and academic exploration. At Oakridge, we
        take pride in our distinguished faculty members, who are not only
        experts in their fields but also dedicated mentors fostering
        intellectual curiosity and critical thinking among our diverse student
        community. We offer a wide array of cutting-edge programs, empowering
        students to discover their passions and unlock their fullest potential.
        Our commitment to academic rigor goes hand in hand with a vibrant campus
        life. Students engage in a myriad of extracurricular activities, from
        arts and sports to community service and entrepreneurship.
      </p>
    </section>
  );
};

export default AboutUs;
