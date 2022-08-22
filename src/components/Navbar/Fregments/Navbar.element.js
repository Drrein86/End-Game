import styled from 'styled-components'
import { GiDiamondRing } from 'react-icons/gi'
import { Container } from '../../../GlobalStyles'


export const Nav = styled.nav`
/* background: #7772ea; */
background: #FBD3E9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #BB377D, #FBD3E9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #BB377D, #FBD3E9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
`

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;


${Container}
`

export const NavLogo = styled.div`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`

export const NavIcon = styled(GiDiamondRing)`
margin: 0.5rem;


`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px){
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%, 60%);
font-size: 1.8rem;
cursor: pointer;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px) {
display: flex;
flex-direction: column;
width: 100%;
height: 90vh;
position: absolute;
top: 80px;



left: ${({click}) => (click ? 0 : '-100%')};

opacity: 1;
transition: all 0.5s ease;
/* background: #7772ea; */
background: #FBD3E9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #BB377D, #FBD3E9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #BB377D, #FBD3E9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover {
border-bottom: 2px solid #BB377D;
}

@media screen and (max-width: 960px){
    width: 100%;

    &:hover {
        border: none;
    }
}
`;

export const NavLinks = styled.div`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
        color: #BB377D;
        transition: all 0.3s ease;
    }
}
`;

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120%;
    }
`;

export const NavBtnLink = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;
`

