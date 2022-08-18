import React from "react";

function Stats({ handleClick }) {
  return (
    <div>
      <h1>stats</h1>

      <button name="menu" onClick={handleClick}>
        {" "}
        לתפריט
      </button>
      
    </div>
  );
}

export default Stats;
