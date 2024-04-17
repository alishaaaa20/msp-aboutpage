import React from "react";
import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Intro = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div
        className="m-auto max-w-6xl p-2 md:p-12 h-5/6 text-center"
        id="about"
      >
        <div className="flex flex-col  py-8 justify-between text-center">
          <h3
            className="text-xl text-blue-900 font-bold uppercase"
            data-aos="fade-up"
          >
            OUR APPROACH
          </h3>
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="my-8 text-5xl text-gray-600 font-extrabold">
              Where Vision Meets Execution
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <p className="my-3 text-xl text-black-600">
              At Metalogic, we navigate the digital landscape with innovation,
              collaboration, and a dedicated focus on client success. Rooted in
              a commitment to pioneering solutions and anticipating future
              needs, our client relationships go beyond transactions.
              Understanding unique challenges, we craft solutions that align
              effortlessly with business objectives. With a user-centric design
              philosophy, agile methodologies, and a commitment to continuous
              learning, we promise transformative success at Metalogic Software
              Pvt. Ltd.
            </p>
          </div>
        </div>
        <div
          className="container-box  mt-8 w-2/2"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <Carousel
            responsive={responsive}
            infinite={true}
            className="owl-carousel owl-theme skill-slider"
          >
            <div className="item w-45">
              <img src={meter1} alt="Image" />
              <h5>Projects Completed</h5>
            </div>
            <div className="item w-45">
              <img src={meter2} alt="Image" />
              <h5>Satisfied Clients</h5>
            </div>
            <div className="item w-45">
              <img src={meter3} alt="Image" />
              <h5>Experts</h5>
            </div>
          </Carousel>
        </div>
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </div>
    </>
  );
};

export default Intro;
