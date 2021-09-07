import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

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
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.07
        }
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" }
      })
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menu, {
        duration: 0,
        css: { display: "block"}
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      }); 
      openMenu(revealMenuBackground, revealMenu);
    }
  }, [state])

  const openMenu = (firstNode, secondNode) => {
    gsap.from([firstNode, secondNode], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.1
      }
    })
  }

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
