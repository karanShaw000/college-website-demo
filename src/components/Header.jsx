import React from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

const Header = () => {
  return (
    <header className="h-[90px] flex justify-between px-1 py-2 items-center text-primary md:px-4 lg:px-0 ">
      <aside className="flex items-center lg:ml-6">
        <figure className="w-24 mr-2">
          <img
            src="/college-logo.jpeg"
            alt="college-logo"
            className="w-full h-16"
          />
        </figure>
        <div className="w-24 md:w-full">
          <h1 className=" font-serif font-bold text-xl">OAKRIDGE UNIVERSITY</h1>
          <p className="font-Ysabeau font-extrabold hidden md:block">
            <p>123 University Avenue Cityville,</p>
            <p>Stateville 56789 Countryland</p>
          </p>
        </div>
      </aside>

      <div>
        <AiOutlineMenu className="text-4xl lg:hidden" />
      </div>

      <div className="hidden h-[90px] ml-4  lg:flex lg:flex-col lg:justify-between font-OpenSans ">
        <div className="grid grid-cols-3 gap-3 py-1 place-items-center bg-primary text-white rounded-bl-xl font-semibold ">
          <a href="tel:+918820117198" className="text-xl cursor-pointer">
            +91 9164 2274
          </a>
          <a
            href="mailto:shawkaran2002@gmail.com"
            className="text-xl cursor-pointer"
          >
            admin.office@oakridge.com
          </a>
          <div className="grid grid-cols-4 gap-3 text-2xl justify-self-end pr-4">
            <AiFillFacebook className="cursor-pointer" />
            <AiFillInstagram className="cursor-pointer" />
            <AiFillLinkedin className="cursor-pointer" />
            <AiFillTwitterSquare className="cursor-pointer" />
          </div>
        </div>
        <nav className="flex justify-between items-center mb-3 pr-4 xl:text-lg">
          <ul className="flex justify-between items-center font-semibold">
            <li className="px-2 xl:pr-8">
              <button className="hover:border-b-2 border-primary transition-all">
                Academics
              </button>
            </li>
            <li className="px-2 xl:pr-8">
              <button className="hover:border-b-2 border-primary transition-all">
                Admission
              </button>
            </li>
            <li className="px-2 xl:pr-8">
              <button className="hover:border-b-2 border-primary transition-all">
                Infrastructure
              </button>
            </li>
            <li className="px-2 xl:pr-8">
              <button className="hover:border-b-2 border-primary transition-all">
                Placement
              </button>
            </li>
            <li className="px-2 xl:pr-8">
              <button className="hover:border-b-2 border-primary transition-all">
                Library
              </button>
            </li>
          </ul>
          <div className="flex-grow">
            <button className="px-2 py-1 xl:ml-4 bg-highText rounded-full hover:bg-primary hover:text-white transition-all">
              APPLY NOW
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
