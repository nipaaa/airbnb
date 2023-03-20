import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-[#1c3c6b] py-24 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div>
            <h3>Discover</h3>
            <div>
              <a href="#!">Home</a>
              <a href="#!">Terms</a>
              <a href="#!">Refound Policy</a>
              <a href="#!">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
