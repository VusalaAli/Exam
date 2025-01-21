import React from "react";
import { NavLink } from "react-router";

const MainNavbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img
            src="https://preview.colorlib.com/theme/shop/img/logo.png.webp"
            alt=""
          />
        </div>
        <div className="nav-list">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/wishlist">Wishlist</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
