import React from "react";
import { useState, useEffect, useRef } from "react";
import HeaderSection from "./HeaderSection";
import NavOption from "./NavOption";
import { Nav, NavbarContainer, NavMenu } from "./Navbar.element";
import { IconContext } from "react-icons/lib";
import { GlobalStyle, Button } from "../../GlobalStyles";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const [submited, setSubmited] = useState(false);

  const handleMenuClick = (e) => {
    let keys = Object.keys(e.target);
    e.target[keys[1]].name == "subButton"
      ? setSubmited(!submited)
      : setClick(!click);
  };
  

  let Buttons = ["home", "stats", "contects", "plan", "script"];
  let buttonsToShow = Buttons.map((ButtonName, i) => (
    <NavOption key={i} name={ButtonName} handleClick={props.handleClick} />
  ));

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <GlobalStyle></GlobalStyle>
        <NavbarContainer>
        <HeaderSection handleMenuClick={handleMenuClick}
            submited={submited}
            click={click}/>
            
          <NavMenu onClick={handleMenuClick} click={click}>
            {buttonsToShow}
          {/* //  <Button to="./loginForm" name="loginForm" onClick={props.handleMenuClick}>התחברות/הרשמה</Button> */}
   

          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};


export default Navbar;
