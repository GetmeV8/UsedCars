import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const location = useLocation();

  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showAccordion, setShowAccordion] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const toggleHamburgerMenu = () => {
    setShowAccordion(false);
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const toggleAccordion = () => {
    setShowAccordion(!showAccordion);
  };

 

  return (
    <div
      className={` ${"sticky z-[1050] bg-white top-0 left-0 right-0 flex items-center h-14 justify-between px-2 md:hidden"}`}
    >
      {/* <div className=""> */}
      <Link to="/">
        <div
          className={` cursor-pointer z-50 text-neutral-950 h-14 w-[250px] text-center flex justify-between items-center `}
        >
          <div className="flex items-center">
            <h3>AUTOALLY </h3>
          </div>
        </div>
      </Link>
      <div className="flex font-semibold">
        <button
          className={`text-neutral-950 h-10    rounded-bl-xl `}
          onClick={toggleHamburgerMenu}
        >
          {showHamburgerMenu ? (
            <img
              src="/Images/close.png"
              className="w-6 mx-2 "
              alt="Close Menu"
            />
          ) : (
            <img
              src="/Images/menu.png"
              className="w-6 mx-2"
              alt="Hamburger Menu"
            />
          )}
        </button>

        {showHamburgerMenu && isSmallScreen && (
          <div className="fixed top-0 right-0 h-full w-full bg-white z-[1100] shadow">
            <div
              className="flex justify-between w-full py-6 px-3 items-center"
              onClick={toggleHamburgerMenu}
            >
              <img
                src="/assets/Logo.png"
                className="px-2"
                alt=""
                style={{
                  width: "70px",
                  height: "auto",
                  filter: "brightness(1)",
                }}
              />

              <img className="h-4 w-4" src="/Images/close.png" alt="" />
            </div>

         
            <Link to="/getintouch" onClick={toggleHamburgerMenu}>
              <div className="bg-[#c71523] mx-4 mt-36 z-[1000] text-white p-1 rounded-md hover:bg-[#4087ba]  justify-center flex items-center gap-2 cursor-pointer">
                Login/Signup
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
};

export default MobileNav;
