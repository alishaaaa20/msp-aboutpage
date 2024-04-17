import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import heroImg from "../images/web-dev.svg";
import icon from "../assets/info-lg.svg";

import {
  hero_text_dark,
  hero_text_light,
  outline_dark,
  outline_light,
} from "../assets";

const Hero = ({ theme }) => {
  return (
    <>
      <div className="hero" id="about">
        <div>
          <NavBar />
        </div>

        <div
          className="m-auto overflow-hidden mx-4 mt-30 lg:mt-10 p-2 md:p-12 h-5/6"
          data-aos="zoom-in"
        >
          <div
            id="hero"
            className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left"
          >
            <div
              className="lg:w-1/2 flex flex-col justify-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900 mt-20">
                Driving Innovations And Empowering Business
              </h1>
              <div className="text-xl tracking-tight mb-5 text-black-500">
                Metalogic envisions a future where technology serves as a
                catalyst for limitless human potential, fostering innovation and
                empowering organizations to thrive in a transformative digital
                era.
              </div>
              <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <Link
                  to="/"
                  className="text-white bg-red-600 hover:bg-red-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div
              className="flex lg:justify-end w-full lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <img
                alt="card img"
                className="rounded-t float-right duration-1000 w-full lg:w-4/5 md:w-3/4 sm:w-2/3 md:rounded-3xl"
                src={heroImg}
              />
            </div>
          </div>
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="700">
          <a
            className="block w-[139px] h-[139px] mx-auto mt-[64px] relative cursor-pointer"
            href="/get-reason"
          >
            <img
              src={theme ? outline_dark : outline_light}
              alt="outline"
              className="absolute top-[50%] left-[50%] w-full h-full block -translate-x-[50%] -translate-y-[50%] rotator"
            />
            <img
              src={theme ? hero_text_dark : hero_text_light}
              alt="explore"
              className="absolute top-[50%] left-[50%] w-[120px] h-[118px] block rotator -translate-x-[50%] -translate-y-[50%]"
            />
            <img
              src={theme ? icon : icon}
              alt="arrow"
              className="absolute top-[50%] left-[50%] w-[48px] h-[42px] block -translate-x-[50%] -translate-y-[50%] "
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
