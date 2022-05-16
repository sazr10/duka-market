import React from "react";
import "./cartdetails.css";

export default function Cartdetails() {
  return (
    <div>
      <div className="cart-main-div">
        <div className="Detail-product">PRODUCT</div>
        <div className="Detail">PRICE</div>
        <div className="Detail">QUANTITY</div>
        <div className="Detail">SUBTOTAL</div>
      </div>
    </div>
  );
}
