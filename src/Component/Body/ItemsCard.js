import React from "react";
import "./itemsCard.css";

import Hoddie from "../../assets/hc2tydvn.png";
import LevisJeans from "../../assets/hf30snql.png";
import DiorBoots from "../../assets/5v67b4jo.png";
import DrMartin from "../../assets/evv02c6j.png";
import Converse from "../../assets/i1ho2ra8.png";
import ZaraJacket from "../../assets/7ts03xhj.png";
import LevisJacket from "../../assets/8e4cp7rt.png";
import ArrowNecklace from "../../assets/7064o0yy.png";
import AddCartButton from "./AddCartButton";

let AllItems = [
  {
    id: 1,
    Image: Hoddie,
    Name: "Essentials Hoddie White",
    Price: 6999,
    Sex: "Men",
  },
  {
    id: 2,
    Image: LevisJeans,
    Name: "Levis Mens Dark Jeans",
    Price: 2500,
    Sex: "Men",
  },
  {
    id: 3,
    Image: DiorBoots,
    Name: "Dior Chelsea Boots",
    Price: 3000,
    Sex: "Men",
  },
  {
    id: 4,
    Image: DrMartin,
    Name: "Dr Martin Boots",
    Price: 15000,
    Sex: "Men",
  },
  {
    id: 5,
    Image: Converse,
    Name: "Converse Black Chuks",
    Price: 6990,
    Sex: "Men",
  },
  {
    id: 6,
    Image: ZaraJacket,
    Name: "Zara Suede Jacket",
    Price: 3000,
    Sex: "Men",
  },
  {
    id: 7,
    Image: LevisJacket,

    Name: "Levis Jeans Jacket",
    Price: 3500,
    Sex: "Men",
  },
  {
    id: 8,
    Image: ArrowNecklace,
    Name: "Mens Arrow Head Necklace",
    Price: 300,
    Sex: "Men",
  },
];
export default function Items(props) {
  return AllItems.map((x) => (
    <div className="items-list">
      <div className="itemss">
        <div className="item-image-div">
          <img className="item-image" src={x.Image} alt="" />
          <AddCartButton item={x} addItem={props.addItem} />
        </div>
        <span className="sexspan">{x.Sex}</span>
        <span className="namespan">{x.Name} </span>
        <span className="pricespan">{x.Price}</span>
      </div>
    </div>
  ));
}
