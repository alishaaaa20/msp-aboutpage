import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-2 bg-gray-100 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12  py-4 md:py-16 border-t border-gray-200 lg:ml-2">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4 mr-8">
              <div className="box-border border-b-4 border-blue-800 p-8 bg-gray-200 text-red-600 text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-extrabold text-4xl mb-4">metalogic</h3>
                <h5 className="text-md font-medium text-blue-800 mb-4">
                  Software Private limited
                </h5>
                <div className=" text-md font-medium text-gray-600 text-left">
                  <p>
                    <svg
                      className="w-7 h-7  inline-block"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"
                      />
                    </svg>
                    Saptakhel, Lalitpur (Head Office)
                  </p>
                  <p>
                    <svg
                      className="w-6 h-6 inline-block"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>
                    +977 9851353599
                  </p>
                  <p>
                    <svg
                      className="w-6 h-6 inline-block"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                    <a
                      href="mailto:info@metalogic.com.np"
                      className="email-link"
                    >
                      info@metalogic.com.np
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-5 md:col-span-3 lg:col-span-3 ml-2 mx-auto">
              <div className="flex flex-col">
                <h6 className="text-[#ffffff] text-xl font-bold mb-4">
                  Company
                </h6>
                <ul className="text-md">
                  <li className="mb-2">
                    <HashLink
                      to="#"
                      className="text-[#ffffff] hover:text-red-600 hover:tracking-wider transition duration-250 ease-in-out"
                    >
                      Feedback
                    </HashLink>
                  </li>
                  <li className="mb-2">
                    <HashLink
                      to="#"
                      className="text-[#ffffff] hover:text-red-600 hover:tracking-wider transition duration-250 ease-in-out"
                    >
                      Partnership
                    </HashLink>
                  </li>
                  <li className="mb-2">
                    <HashLink
                      to="#"
                      className="text-[#ffffff] hover:text-red-600 hover:tracking-wider transition duration-250 ease-in-out"
                    >
                      Terms & Conditions
                    </HashLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-3 mx-auto">
              <div className="flex-col mr-20">
                <h6 className="text-[#ffffff] text-xl font-bold mb-4">
                  OUR SERVICES
                </h6>
                <ul className="text-md">
                  <li className="mb-2">
                    <Link
                      to="#"
                      className="text-[#ffffff] hover:text-red-600 hover:tracking-wider transition duration-250 ease-in-out"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="#"
                      className="text-[#ffffff] hover:text-red-600 hover:tracking-wider transition duration-250 ease-in-out"
                    >
                      Mobile App Development
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="#"
                      className="text-[#ffffff] hover:text-red-600 hover:tracking-wider transition duration-250 ease-in-out"
                    >
                      Custom Software Development
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="#"
                      className="text-[#ffffff] hover:text-red-600 hover:tracking-wider transition duration-250 ease-in-out"
                    >
                      Cloud Computing Services
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="#"
                      className="text-[#ffffff] hover:text-red-600 hover:tracking-wider transition duration-250 ease-in-out"
                    >
                      Quality Assurance and Testing
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="#"
                      className="text-[#ffffff] hover:text-red-600 hover:tracking-wider transition duration-250 ease-in-out"
                    >
                      UI/UX Designing
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="#"
                      className="text-[#ffffff] hover:text-red-600 hover:tracking-wider transition duration-250 ease-in-out"
                    >
                      Maintenance and Support
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="#"
                      className="text-[#ffffff] hover:text-red-600 hover:tracking-wider transition duration-250 ease-in-out"
                    >
                      Dev Ops
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="#"
                      className="text-[#ffffff] hover:text-red-600 hover:tracking-wider transition duration-250 ease-in-out"
                    >
                      Blockchain Solutions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* 4th block */}
            <div className="col-span-6 lg:col-span-1 ml-3 mx-auto">
              <h6 className="text-[#ffffff] text-xl font-bold mb-4">Join</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#ffffff] hover:text-red-600 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Careers
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#ffffff]  hover:text-red-600 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Internships
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* end block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900"></div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li>
                    <Link
                      to="#"
                      className="flex justify-center items-center text-blue-900 hover:text-red-600 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                      </svg>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <a
                      href="https://www.facebook.com/metalogicsoftware"
                      target="_blank"
                      className="flex justify-center items-center text-blue-900 hover:text-red-600 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                      </svg>
                    </a>
                  </li>
                  <li className="ml-4">
                    <a
                      href="https://www.instagram.com/metalogicsoftware?igsh=bDE5dG1pdGFoMGg3"
                      target="_blank"
                      className="flex justify-center items-center text-blue-900 hover:text-red-600 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        class="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </a>
                  </li>
                  <li className="ml-4">
                    <a
                      href="https://www.linkedin.com/company/metalogic-software-pvt-ltd/"
                      target="_blank"
                      className="flex justify-center items-center text-blue-900 hover:text-red-600 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="linkedin"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                    </a>
                  </li>
                </ul>
                <div className="text-sm text-gray-200 font-semibold py-1">
                  Copyright &copy; {new Date().getFullYear()}
                  {"  "}
                  <HashLink to="#" className=" hover:text-red-600">
                    Metalogic Software Private Limited
                  </HashLink>
                  . All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
