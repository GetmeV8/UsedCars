import React from "react";
import {  Link } from "react-router-dom";

const Footer = () => {


  return (
    <>
      <div className=" w-full">
        <div className="relative">
          <div className="h-auto md:h-full mt-[480px] md:mt-48 bg-[#21282D]">
            <div className="flex flex-col md:flex-row  px-10 md:h-80 h-full items-center font-thin  ">
              <div className="w-full md:w-1/3 md:pr-20 p-4">
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
                    <h3 className="text-white font-medium text-lg md:text-xl text-center sm:text-left">
                      KMK technologies limited
                    </h3>
                  </div>

                </div>
              </div>
              <div className="w-full  flex flex-col md:flex-row pl-0 md:pl-20 text-white items-start text-center md:text-start md:items-center justify-between">
                <div className="w-full md:w-auto mb-6 md:mb-0 font-medium">
                  <ul className="leading-10">
                    <li>
                      <Link to="/">Services</Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                      >
                        Spare Parts
                      </Link>
                    </li>
                    <li>
                      <a href="/">Privacy Policies</a>
                    </li>
                  </ul>
                </div>
               
                <hr className="border-t border-gray-600 md:hidden w-full my-8 md:my-0" />
                <div className="w-full md:w-auto flex flex-col md:items-start items-center font-medium">
                  <ul>
                    <li className="flex md:flex-row flex-col gap-2 items-center mb-4">
                      <img
                        src="/Images/location.png"
                        alt="Location"
                        // className="mr-2"
                        style={{ width: "18px", height: "auto" }}
                      />
                      <a
                        href="https://maps.app.goo.gl/WnCF5r"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        address,japan
                      </a>
                    </li>
                    <li className="flex md:flex-row flex-col gap-2 items-center mb-4">
                      <img
                        src="/Images/phone.png"
                        alt="Phone"
                        // className="mr-2"
                        style={{ width: "18px", height: "auto" }}
                      />
                      <a
                        href="tel:+91 22 4225 4225"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +91 22 4444 5555
                      </a>
                    </li>
                    <li className="flex md:flex-row flex-col gap-2 items-center mb-4">
                      <img
                        src="/Images/email.png"
                        alt="Email"
                        // className="mr-2"
                        style={{ width: "18px", height: "auto" }}
                      />
                      <a
                        href="mailto:contact@kmk,com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        kmk@technologies.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* line */}
            <hr className="border-t border-gray-600 my-8 md:my-0" />
            <div className="flex md:flex-row  flex-col gap-4 text-white justify-between py-4 px-10 items-center">
              <p className="font-thin ">© 2024 KMK All rights reserved</p>
              <hr className="border-t border-gray-600 w-full md:hidden" />
              <div className="flex gap-2 ">
                <div>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/Images/linked.png"
                      alt="linkedin"
                      style={{ width: "35px", height: "35px" }}
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/Images/facebook.png"
                      alt="facebook"
                      style={{ width: "35px", height: "35px" }}
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/Images/instagram.png"
                      alt="Instagram"
                      style={{ width: "35px", height: "35px" }}
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/Images/x.png"
                      alt="x"
                      style={{ width: "35px", height: "35px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
