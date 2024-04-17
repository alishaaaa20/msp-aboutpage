import React from "react";
import img from "../images/vission.jpg";

const Foundation = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left "
          data-aos="fade-up"
        >
          <div
            className="lg:w-1/2 flex flex-col lg:mx-7 justify-center shadow-xl"
            style={{ boxShadow: "0 8px 6px rgba(255, 0, 0)" }}
          >
            <img
              alt="card img"
              className="rounded-t lg:rounded-l-none lg:rounded-tl-none lg:rounded-bl-none"
              src={img}
              style={{
                mixBlendMode: "darken",
                transform: "translateX(-20px)",
              }}
            />
          </div>

          <div
            className="flex-col my-7 text-right lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3
              className="text-xl text-blue-900 font-bold uppercase"
              data-aos="fade-up"
            >
              OUR MISSION
            </h3>
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="my-8 text-5xl text-gray-600 font-extrabold">
                Dedication to innovation
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <p className="my-3 text-lg lg:text-x text-black-600">
                We believe that every project is an opportunity to create
                something remarkable – a chance to push boundaries, challenge
                norms, and exceed expectations. We approach each endeavor with
                curiosity and creativity, striving to craft solutions that not
                only meet your needs but also propel you ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foundation;
