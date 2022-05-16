import React from "react";
import "./cartTotal.css";

export default function CartTotal(props) {
  const taxamount = (13 / 100) * props.total;
  const amountwithtax = taxamount + props.total;
  return (
    <div className="Main-div">
      <div className="carttotals">CART TOTALS</div>
      <div className="Subtotal">
        <div>Subtotal</div>
        <div>{props.total}</div>
      </div>
      <div className="Tax">
        <div>Tax 13%</div>
        <div>{taxamount.toFixed(2)}</div>
      </div>
      <div className="Total">
        <div>Total</div>
        <div>{amountwithtax}</div>
      </div>
      <div className="checkout-div">
        <button className="checkout-button">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
}
