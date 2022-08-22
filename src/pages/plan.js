import React from "react";


function Plan({ handleClick }) {
  return (
    <div>
      <h1>plan</h1>
      <button name="menu" onClick={handleClick}>
        לתפריט
      </button>
    </div>
  );
}

export default Plan;
