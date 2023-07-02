import React from "react";
import Heading from "./UI/Heading";
import Notice from "./UI/Notice";
import NoticeSeeds from "../NoticeSeeds";

const NoticeBoard = () => {
  return (
    <section className="px-2 py-4 flex flex-col items-center justify-center ">
      <Heading title={"Notice"} />
      <div className="w-[85%]  border-primary border-2 overflow-y-auto h-[10rem] md:w-[60%] md:h-[20rem] lg:h-[30rem] lg:w-[80%]">
        {NoticeSeeds.map((notice) => (
          <Notice key={notice.id} title={notice.title} link={notice.link} />
        ))}
      </div>
    </section>
  );
};

export default NoticeBoard;
