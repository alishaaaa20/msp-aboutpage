import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const Reason = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl text-blue-900 font-bold">Demo Product</h1>
        <p>
          <ul>
            <li>Reason 1</li>
            <li>Reason 2</li>
            <li>Reason 3</li>
            <li>Reason 4</li>
            <li>Reason 5</li>
          </ul>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Reason;
