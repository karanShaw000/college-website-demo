import React from "react";

const Notice = ({ title, link }) => {
  return (
    <div className="bg-slate-300 mb-1 px-2 md:px-2 md:py-4">
      <span className="font-OpenSans text-sm ">{title}</span>
      <a
        href={link}
        className="font-Ysabeau text-lg underline ml-1 text-primary"
      >
        -Link
      </a>
    </div>
  );
};

export default Notice;
