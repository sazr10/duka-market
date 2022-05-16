import "./app.css";
import Home from "./HomePage";
import Cart from "./Component/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Items from "./Component/Body/ItemsCard";

function App() {
  const [cartData, setcartData] = useState([]);
  const [total, setTotal] = useState("0");

  const addCartItem = (image, itemName, id, price) => {
    const temp = [...cartData];
    const findindex = cartData.findIndex((item) => {
      return id === item.id;
    });
    if (findindex !== -1) {
      const item = temp[findindex];
      item.amount = item.amount + 1;
      item.subtotal = item.subtotal + price;
      temp[findindex] = item;
    } else {
      temp.push({ image, itemName, id, price, amount: 1, subtotal: price });
    }
    let sum = 0;
    temp.forEach((item) => {
      sum = item.subtotal + sum;
    });
    setTotal(sum);
    setcartData(temp);
  };

  const deleteItem = (id) => {
    let temp = [...cartData];
    const findindex = cartData.findIndex((item) => {
      return id === item.id;
    });
    const item = temp[findindex];
    if (item.amount > 1) {
      item.amount = item.amount - 1;
      item.subtotal = item.subtotal - item.price;
      temp[findindex] = item;
    } else {
      temp = deleteall(id, "single");
    }
    let sum = 0;
    temp.forEach((item) => {
      sum = item.subtotal + sum;
    });
    setTotal(sum);
    setcartData(temp);
  };

  const deleteall = (id, type) => {
    const temp = cartData.filter((item) => item.id !== id);
    if (type === "single") {
      return temp;
    }
    setcartData(temp);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home addItem={addCartItem} total={total} />}
        />
        <Route
          path="Cart"
          element={
            <Cart
              cartData={cartData}
              addCartItem={addCartItem}
              deleteItem={deleteItem}
              deleteall={deleteall}
              total={total}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
