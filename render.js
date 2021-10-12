import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  cardDelete,
  toggleLike,
  showLikedDrinks,
  showAllDrinks,
} from "./redux/state";

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        cardDelete={cardDelete}
        toggleLike={toggleLike}
        showLikedDrinks={showLikedDrinks}
        showAllDrinks={showAllDrinks}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
