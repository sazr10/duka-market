import React from "react";
import "./cart.css";
import Nav from "../Header/Nav";
import Footer from "../Footer/Footer";
import CartTotal from "./CartTotal";

import Cartelement from "./Cartelement";
import Cartdetails from "./Cartdetails";

export default function Cart(props) {
  return (
    <div>
      <Nav total={props.total} />

      <div className="Cart-list-div">
        <div>
          <Cartdetails />
          <Cartelement
            cartData={props.cartData}
            addCartItem={props.addCartItem}
            deleteItem={props.deleteItem}
            deleteall={props.deleteall}
            total={props.total}
          />
        </div>
        <CartTotal total={props.total} />
      </div>
      <Footer />
    </div>
  );
}
