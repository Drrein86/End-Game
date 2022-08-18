import React from 'react'
import { Button } from '../../GlobalStyles'
import {
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
  } from "./Navbar.element"
function NavOption(props) {
  
  return (
    <NavItem>
    <NavLinks name={props.name} onClick={props.handleClick}>
      {props.name}
    </NavLinks>
{/* <NavItemBtn>
  {button ? (
  <NavBtnLink to="/sign-up\in">
    <Button primary>התחברות\הרשמה</Button>
  </NavBtnLink>
) : (
  <NavBtnLink to="/sign-up\in">
<Button fontBig primary>התחברות\הרשמה</Button>
 </NavBtnLink>
)}
 </NavItemBtn> */}
 
    
  </NavItem>
   
  )
}

export default NavOption