import React from "react";
import "./addCartButton.css";
export default function addCartButton(props) {
  const item = props.item;
  return (
    <div>
      <button
        className="addtocart"
        onClick={() =>
          props.addItem(item.Image, item.Name, item.id, item.Price)
        }
      >
        Add to Cart
      </button>
    </div>
  );
}
