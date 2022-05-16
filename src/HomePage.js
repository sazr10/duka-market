import React from "react";
import Nav from "./Component/Header/Nav";
import Footer from "./Component/Footer/Footer";
import Main from "./Component/Body/Main";
import Items from "./Component/Body/ItemsCard";
import "./homePage.css";
export default function Home(props) {
  return (
    <div>
      <Nav total={props.total} />
      <Main />
      <div className="items-box">
        <Items addItem={props.addItem} />
      </div>
      <Footer />
    </div>
  );
}
