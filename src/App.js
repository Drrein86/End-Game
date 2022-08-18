import React, { useRef, useState } from "react";

import Contects from "./pages/contects";
import Script from "./pages/script";
import Plan from "./pages/plan";
import Stats from "./pages/stats";
import Navbar from "./components/Navbar/Navbar";
import { AccountBox } from "./components/accountBox";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import LoginForm from "./components/accountBox/loginForm";
import SignupForm from "./components/accountBox/signupForm";

function App() {
  const [renderMennager, setRenderMennager] = useState({
    menu: true,
    stats: false,
    contects: false,
    plan: false,
    script: false,
    loginForm: false,
    signupForm: false
  });
  const renderRef = useRef();
  const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

  const handleClick = (e) => {
    console.log(e);
    const render = Object.keys(renderMennager);
    let sc = {};
    let keys = Object.keys(e.target);
    render.forEach((key) => {
      if (key == e.target[keys[1]].name) {
        return (sc[key] = true);
      } else return (sc[key] = false);
    });
    renderRef.current = sc;
    setRenderMennager(renderRef.current);
  };


  
  return (
    <div className="App">
      <Navbar handleClick={handleClick} />

      {renderMennager.stats && <Stats handleClick={handleClick} />}
      {renderMennager.contects && <Contects  handleClick={handleClick} />
      }
      {renderMennager.script && <Script handleClick={handleClick} />}
      {renderMennager.plan && <Plan  handleClick={handleClick} />}
      {renderMennager.loginForm && <LoginForm  handleClick={handleClick} />}
      {renderMennager.signupForm && <SignupForm  handleClick={handleClick} />}

      <AppContainer>
      <AccountBox />
    </AppContainer>
    </div>
    
  );
}

export default App;
