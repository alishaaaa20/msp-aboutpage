import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const Reason = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center items-center h-screen px-8">
        <div className="flex flex-col py-8 justify-between text-center max-w-screen-md mx-auto">
          <h3
            className="text-xl text-blue-900 font-bold uppercase"
            data-aos="fade-up"
          >
            Why?
          </h3>
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="my-9 text-4xl text-gray-600 font-extrabold">
              I choose to recreate this website because...
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <p className="my-3 text-xl text-black-600">
              Even though the 'About Us' page looked nice with all those latest
              technologies, it is a significant part of the website and
              contained important information such as identity, values, and
              purpose. While recreating the page, I gained a deeper
              understanding of the company. I wanted to provide a fresh new look
              to the page without losing the essence of the original.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Reason;
