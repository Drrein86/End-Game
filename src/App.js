import React, { useRef, useState } from "react";
import "./components/accountBox/Fregments/common";
import Contects from "./pages/contects";
import Script from "./pages/script";
import Plan from "./pages/plan";
import Stats from "./pages/Stats/stats";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";
import AccountBox from "./components/accountBox/AcountBox";
import Home from "./pages/Home";
import Invatetion from "./pages/Invatetion";
import Script2 from "./pages/script2";
function App() {
  const [renderMennager, setRenderMennager] = useState({
    menu: true,
    stats: false,
    contects: false,
    plan: false,
    script: false,
    invite: false,
    script2: false,
    home: false,
    loginForm: false,
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

  const [isSinged, setIsSinged] = useState(false);
  const handleClick = (e) => {
    console.log(e);
    const render = Object.keys(renderMennager);
    let sc = {};
    let keys = Object.keys(e.target);
    render.forEach((key) => {
      if (
        e.target[keys[1]].name == "loginForm" &&
        isSinged &&
        key == e.target[keys[1]].name
      ) {
        sc[key] = false;
        sc["home"] = true;
      } else if (key == e.target[keys[1]].name) {
        sc[key] = true;
      } else sc[key] = false;
    });
    renderRef.current = sc;
    setRenderMennager(renderRef.current);
  };

  const handleSetIsSinged = (e) => {
    console.log(e);
    setIsSinged(true);
    setRenderMennager((prev) => {
      return { ...prev, home: true };
    });
  };
  return (
    <div className="App">
      <Navbar handleClick={handleClick} isSinged={isSinged} />

      {renderMennager.stats && <Stats handleClick={handleClick} />}
      {renderMennager.contects && <Contects handleClick={handleClick} />}
      {renderMennager.script && <Script handleClick={handleClick} />}
      {renderMennager.plan && <Plan handleClick={handleClick} />}
      {renderMennager.home && <Home />}
      {renderMennager.invite && <Invatetion />}
      {renderMennager.script2 && <Script2 />}
      {renderMennager.loginForm && !isSinged && (
        <AppContainer>
          <AccountBox
            handleClick={handleClick}
            handleSetIsSinged={handleSetIsSinged}
            isSinged={isSinged}
          />
        </AppContainer>
      )}
    </div>
  );
}

export default App;
