import React from "react";
import { BsStars } from "react-icons/bs";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12 relative">
      <section data-aos="zoom-in-down">
        <BsStars className="text-red-600 text-4xl my-2 ml-8" />

        <div className="my-4 py-4">
          <h2 className="my-2 text-left ml-8 text-xl text-blue-900 uppercase font-bold">
            OUR FOUNDATION
          </h2>

          <h2 className="mt-4 mx-12 text-left ml-8 text-xl lg:text-4xl font-extrabold  text-gray-600 ">
            Bridging Futures Since 2023
          </h2>
          <div data-aos="fade-up" data-aos-delay="400">
            <p className="my-3 text-s text-black-600 ml-8">
              We strive for excellence in every aspect of our work, from the
              quality of our code to the user experience of our products.
            </p>
          </div>
        </div>

        <div className="lg:w-1/4 ml-8" data-aos="fade-up" data-aos-delay="200">
          <div className="text-red-600 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
              <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>
            </svg>
          </div>
          <h3 className="text-3xl text-blue-900 font-bold">
            2023 <span className="font-black">Founded</span>
          </h3>
          <div>
            <p className="my-3 text-xl text-gray-600 font-semibold">
              In 2023, Metalogic: a beacon of innovation. Youthful, unwavering
              commitment to exceptional software. Fresh perspective, building a
              legacy of quality and excellence.
            </p>
          </div>
        </div>

        <div
          className="lg:w-1/3 flex flex-col lg:mx-80 justify-center z-20 relative lg:pl-40"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="text-red-600 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
            </svg>
          </div>
          <h3 className="text-3xl text-blue-900 font-bold">
            Visionary <span className="font-black">Leadership</span>
          </h3>
          <div>
            <p className="my-3 text-xl text-gray-600 font-semibold">
              Metalogic: Founded by forward-thinking visionaries, we harness
              technology to shape the future, driven by innovation and
              groundbreaking solutions.
            </p>
          </div>
        </div>
        <div
          className="lg:w-1/3 flex flex-col lg:ml-auto lg:pr-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="text-red-600 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 3.703a8.905 8.905 0 0 1 6.318 2.618A8.905 8.905 0 0 1 21.937 12a8.905 8.905 0 0 1-2.619 6.317A8.905 8.905 0 0 1 12 21.937a8.905 8.905 0 0 1-6.317-2.619A8.905 8.905 0 0 1 3.703 12c0-1.495.378-2.907 1.099-4.153A8.904 8.904 0 0 1 12 3.703zm0 1.406a7.5 7.5 0 0 0-5.303 12.803A7.5 7.5 0 0 0 12 20.594a7.5 7.5 0 0 0 5.303-12.804A7.5 7.5 0 0 0 12 5.109zm0 0c-.875 0-1.715.168-2.499.476a9.206 9.206 0 0 0-1.8 1.8 9.22 9.22 0 0 0-.476 2.5c0 .715.168 1.4.476 2.042a9.224 9.224 0 0 0 1.8 1.801c.641.308 1.327.476 2.5.476.715 0 1.4-.168 2.042-.476a9.22 9.22 0 0 0 1.801-1.8c.308-.641.476-1.327.476-2.5 0-.715-.168-1.4-.476-2.042a9.22 9.22 0 0 0-1.8-1.801A7.563 7.563 0 0 0 12 6.515zm0 0c.785 0 1.555.137 2.3.399a8.905 8.905 0 0 0 4.317 1.095 7.5 7.5 0 0 1-7.617 7.617A8.905 8.905 0 0 0 6.51 14.3 8.916 8.916 0 0 0 5.414 12a8.906 8.906 0 0 0 1.097-4.317A7.5 7.5 0 0 1 12 6.51zm0 0" />
            </svg>
          </div>
          <h3 className="text-3xl text-blue-900 font-bold">
            Commitment to <span className="font-black">Excellence</span>
          </h3>
          <div>
            <p className="my-3 text-xl text-gray-600 font-semibold">
              Founded on an unwavering commitment to excellence. Our culture,
              instilled by founders, centers on continuous improvement,
              delivering high-quality software with dedication.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
