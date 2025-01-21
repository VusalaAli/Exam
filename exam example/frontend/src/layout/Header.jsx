import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="banner">
          <div className="banner-left">
            <img
              src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp"
              alt=""
            />
          </div>
          <div className="banner-right">
            <span>
              Flat<h2>75%Off</h2>
            </span>
            <h1>IT’S HAPPENING <br /> THIS SEASON!</h1>
            <button>PURCHASE NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
