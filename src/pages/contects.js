import React from "react";

function Contects({ handleClick }) {
  return (
    <div>
      <h1>contects</h1>
      <button name="menu" onClick={handleClick}>
        לתפריט
      </button>
    </div>
  );
}

export default Contects;
