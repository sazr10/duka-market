import React from "react";
import "./nav.css";
import logo from "../../assets/logo(2).png";
import cartImage from "../../assets/Group 35.svg";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="navigation">
      <Link to="/" className="logo-img">
        <img src={logo} alt="logo" />
      </Link>

      <Link to="/cart" className="cart">
        <img className="cart-image" src={cartImage} alt="CartImage" />
        <div className="shopping-cart">
          <span className="span-details">Shopping Cart</span>
          <span className="nav-items">RS {`${props.total}`}</span>
        </div>
      </Link>
    </div>
  );
}
