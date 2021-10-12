import React from "react";
import Main from "./components/Main/Main";

function App(props) {
  return (
    <div className="App">

      <Main
        showLikedDrinks={props.showLikedDrinks}
        showAllDrinks= {props.showAllDrinks}
        drinks={props.state.drinks}
        method={props.state.method}
        cardDelete={props.cardDelete}
        toggleLike={props.toggleLike}
      />
    </div>
  );
}

export default App;
