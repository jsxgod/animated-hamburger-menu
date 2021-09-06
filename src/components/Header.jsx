import React from "react";
import { Link } from "react-router-dom";
import { Menu } from ".";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">COMPANY</Link>
            </div>
            <div className="menu-btn">
              <button>Menu</button>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
