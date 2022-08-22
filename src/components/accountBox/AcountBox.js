import React, { useState } from "react";
import LoginForm from "./Fregments/loginForm";
import { AccountContext } from "./Fregments/accountContext";
import SignupForm from "./Fregments/signupForm";
import {BoxContainer, TopContainer, BackDrop, HeaderContainer, HeaderText, SmallText, InnerContainer, backdropVariants, expandingTransition} from "./AccountBoxStyle";


export default function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

 // const handleLogClick = (e) => {};
  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        {props.isSinged == false && (
          <InnerContainer>
            {active === "signin" && (
              <LoginForm handleSetIsSinged={props.handleSetIsSinged} />
            )}
            {active === "signup" && (
              <SignupForm handleSetIsSinged={props.handleSetIsSinged} />
            )}
          </InnerContainer>
        )}
      </BoxContainer>
    </AccountContext.Provider>
  );
}
