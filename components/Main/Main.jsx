import React from "react";
import style from "./Main.module.css";
import CardElement from "./CardElement/CardElement";

const Main = (props) => {
  // debugger;
  return (
    <main className={style.main}>
      <div className={style.mainWrapper}>
        <CardElement
          showAllDrinks={props.showAllDrinks}
          showLikedDrinks={props.showLikedDrinks}
          drinks={props.drinks}
          method={props.method}
          cardDelete={props.cardDelete}
          toggleLike={props.toggleLike}
        />
      </div>
    </main>
  );
};

export default Main;
