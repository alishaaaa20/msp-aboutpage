import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <>
      <HashLink
        className="px-6 font-semibold text-white-500 hover:text-red-600"
        smooth
        to="/"
      >
        Home
      </HashLink>
      <HashLink
        className="px-6 font-semibold text-white-500 hover:text-red-600"
        smooth
        to="/"
      >
        Services
      </HashLink>
      <HashLink
        className="px-6 font-semibold text-white-500 hover:text-red-600"
        to="/"
      >
        Career
      </HashLink>
      <HashLink
        className="px-6 font-semibold text-white-500 hover:text-red-600"
        to="/"
      >
        About Us
      </HashLink>
      <HashLink
        className="text-white bg-red-600 hover:bg-red-600 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
        smooth
        to="/"
      >
        Get in Touch
      </HashLink>
    </>
  );
};

export default NavLinks;
