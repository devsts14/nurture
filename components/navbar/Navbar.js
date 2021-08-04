import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img alt="logo" src="/logo.png" width="52.6px" height="52.6px" />
        <span className="brand">TermMonitor</span>
      </div>
      <div className="navbar__main">
        <div className="head">KEYWORDS</div>
        <div className="sub">
          <label htmlFor="search">
            <input className="search" name="search" id="search" type="text" />
            <span className="submit">Submit &#8594;</span>
          </label>
          <div className="user">A</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
