import React from "react";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import TopNav from "./TopNav";

const Header = () => {
  return (
    <>
      <div className="header">
        <TopNav/>
        <NavBar />
        <MobileNav/>
      </div>
    </>
  );
};

export default Header;
