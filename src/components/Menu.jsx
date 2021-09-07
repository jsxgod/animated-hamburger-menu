import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import animations from "./animations";

const Menu = ({state}) => {

  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if(state.clicked === false) {
      animations.hideMenu(revealMenu, revealMenuBackground, menu);
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      animations.openMenu(revealMenuBackground, revealMenu, menu);
      animations.staggerText([line1, line2, line3]);
      animations.fadeInMoveUp(info);
    }
  }, [state])

  return (
    <div ref={el => (menu = el)} className="menu">
      <div ref={el => (revealMenuBackground = el)} className="menu-secondary-bg-color"></div>
      <div ref={el => (revealMenu = el)} className="menu-layer">
        <div className="menu-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link ref={el => (line1 = el)} to="/opportunities">Opportunities</Link>
                  </li>
                  <li>
                    <Link ref={el => (line2 = el)} to="/solutions">Solutions</Link>
                  </li>
                  <li>
                    <Link ref={el => (line3 = el)} to="/contact">Contact us</Link>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className="info">
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="locations">
                Locations:
                <span>Dallas</span>
                <span>Austin</span>
                <span>New York</span>
                <span>San Francisco</span>
                <span>Beijing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
