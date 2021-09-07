import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { Menu } from ".";

const Header = ({ history }) => {

  const [menuState, setMenuState] = useState({
    initial: false,
    clicked: null,
    display: "Menu"
  });

  const [btnState, setBtnState] = useState(true);

  useEffect(() => {
    history.listen(() => {
      setMenuState({
        clicked: false,
        display: "Menu"
      });
    })
  })

  // prevent spam clicking the menu button
  const disableMenu = () => {
    setBtnState(!btnState)
    setTimeout(() => {
      setBtnState(true);
    }, 2000);
  }

  const handleMenu = () => {
    disableMenu();

    if(menuState.initial === false){
      setMenuState({
        initial: null,
        clicked: true,
        display: "Close"
      })
    } else if (menuState.clicked === true) {
      setMenuState({
        clicked: !menuState.clicked,
        display: "Menu"
      })
    } else if (menuState.clicked === false) {
      setMenuState({
        clicked: !menuState.clicked,
        display: "Close"
      })
    }
  }


  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">COMPANY</Link>
            </div>
            <div className="menu-btn">
              <button disabled={!btnState} onClick={handleMenu}>Menu</button>
            </div>
          </div>
        </div>
      </div>
      <Menu state={menuState} />
    </header>
  );
};

export default withRouter(Header);
