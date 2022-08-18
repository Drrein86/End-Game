import React from "react";
import { NavLogo, NavIcon, MobileIcon} from "./Navbar.element";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Button } from "../../GlobalStyles";

function HeaderSection(props) {
  return (
    <>
      <NavLogo>
        <NavIcon />
        End Game
        
      </NavLogo>
      

      <MobileIcon onClick={props.handleMenuClick}>
        {props.click ? <AiOutlineClose /> : <AiOutlineMenu />}
      </MobileIcon>
      
    </>
  );
}

export default HeaderSection;
