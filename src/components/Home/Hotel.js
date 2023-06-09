import React from "react";


const Hotel = () => {
  return (
    <div className="bg_first py-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div></div>
        <div></div>
        <div>
          {" "}
          <button className="outline_btn">Hotel</button>
          <button className="outline_btn">Guest House</button> <br />
          <button className="outline_btn">House</button>
          <button className="outline_btn">Apartment</button>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
