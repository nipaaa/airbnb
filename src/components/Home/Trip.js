import React from "react";

const Trip = () => {
  return (
    <div className="bg_second lg:pl-32 py-36">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          {" "}
          <button className="outline_btn">Domistic Trip</button>
          <button className="outline_btn">Global Trip</button> <br />
          <button className="outline_btn">Day Trip</button>
          <button className="outline_btn">Women's Special</button> <br />
          <button className="outline_btn">Senior Special</button>
          <button className="outline_btn">Adventure</button>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Trip;
