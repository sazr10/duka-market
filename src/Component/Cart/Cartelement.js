import React from "react";
import "./cartelement.css";
// import { useState } from "react";

export default function Cartelement(props) {
  return (
    <div className="carItemList">
      {props.cartData.map((x) => {
        return (
          <>
            <div className="cartItemList">
              <div className="product-details">
                <div className="items-image-div">
                  <img className="items-image" src={x.image} alt="j" />
                </div>
                <p className="items-name">{x.itemName}</p>
              </div>
              <div className="Details">
                <div className="price-details">{x.price}</div>
              </div>
              <div className="Details">
                <div className="quantity-details">
                  <div
                    className="add-minus"
                    onClick={() => props.deleteItem(x.id)}
                  >
                    -
                  </div>
                  <div className="add-minus-counter">{x.amount}</div>
                  <div
                    className="add-minus"
                    onClick={() =>
                      props.addCartItem(x.image, x.itemName, x.id, x.price)
                    }
                  >
                    +
                  </div>
                </div>
              </div>
              <div className="Details">
                <div className="subtotal-details">{x.subtotal}</div>
              </div>
              <div className="Details">
                <div
                  className="delete-div"
                  onClick={() => props.deleteall(x.id, "multi")}
                >
                  x
                </div>
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
}
