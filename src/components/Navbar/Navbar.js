import React, { useState } from "react";
import HeaderSection from "./Fregments/HeaderSection";
import NavOption from "./Fregments/NavOption";
import { Nav, NavbarContainer, NavMenu } from "./Fregments/Navbar.element";
import { IconContext } from "react-icons/lib";
import { GlobalStyle, Button } from '../../GlobalStyles';

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const [submited, setSubmited] = useState(false);

  const handleMenuClick = (e) => {
    let keys = Object.keys(e.target);
    e.target[keys[1]].name == "subButton"
      ? setSubmited(!submited)
      : setClick(!click);
  };

  let Buttons = ["home", "stats", "contects", "plan", "script", "home", "invite","script2"];
  let buttonsToShow = Buttons.map((ButtonName, i) => (
    <NavOption key={i} name={ButtonName} handleClick={props.handleClick} />
  ));

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <GlobalStyle />
        <NavbarContainer>
          <HeaderSection
            handleMenuClick={handleMenuClick}
            submited={submited}
            click={click}
          />

          <NavMenu onClick={handleMenuClick} click={click}>
            <Button
              to="./loginForm"
              name="loginForm"
              onClick={props.handleClick}
            >
              {props.isSinged ? "מחובר" : "התחברות"}
            </Button>
            {buttonsToShow}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
