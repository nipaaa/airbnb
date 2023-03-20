import React from "react";

const Transportation = () => {
  return (
    <div className="bg_third lg:pl-32 py-36">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div></div>
        <div></div>
        <div>
          {" "}
          <button className="outline_btn">Transportation</button>
          <button className="outline_btn">Property</button> <br />
          <button className="outline_btn">Engineering & Industrial</button>
          <button className="outline_btn">Party</button> <br />
          <button className="outline_btn">Fashion </button>
          <button className="outline_btn">Professional Worker</button>
        </div>
      </div>
    </div>
  );
};

export default Transportation;
