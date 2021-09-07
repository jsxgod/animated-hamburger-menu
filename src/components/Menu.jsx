import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import animations from "./animations";
import cities from "./cities";

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
        <div ref={el => (cityBackground = el)} className="menu-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link ref={el => (line1 = el)} to="/opportunities" onMouseEnter={e => animations.tiltText(e, false)} onMouseOut={e => animations.tiltText(e, true)}>Opportunities</Link>
                  </li>
                  <li>
                    <Link ref={el => (line2 = el)} to="/solutions" onMouseEnter={e => animations.tiltText(e, false)} onMouseOut={e => animations.tiltText(e, true)}>Solutions</Link>
                  </li>
                  <li>
                    <Link ref={el => (line3 = el)} to="/contact" onMouseEnter={e => animations.tiltText(e, false)} onMouseOut={e => animations.tiltText(e, true)}>Contact us</Link>
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
                {cities.map(el => (
                  <span key={el.name} onMouseEnter={() => animations.changeBackground(cityBackground, el.image)} onMouseOut={() => animations.removeBackground(cityBackground)}>
                    {el.name}
                  </span>                 
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
