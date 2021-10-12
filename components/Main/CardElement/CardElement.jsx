import React from "react";
import style from "./CardElement.module.css";

const CardElement = (props) => {
  let refInput = React.createRef();
  //удалить карточку
  let cardDelete = (id) => {
    props.cardDelete(id);
  };
  //поставить убрать/лайк
  let toggleLike = (id) => {
    props.toggleLike(id);
  };

  let cardElement; //карточка нашего напитка

  //кликаем на кнопку, получаем true / false
  //вызываем нужный метод
  let drinksFilterbyLike = () => {
    if (refInput.current.checked) {
      props.showLikedDrinks();
    } else {
      props.showAllDrinks();
    }
  };

  //функция возращает объект 
  let structuraElement = (name, img, id, colorStyle) => {
    return (
      <div
        style={{ background: colorStyle }}
        key={id}
        className={style.cardElement}
      >
        <span className={style.elementInfo}>{name}</span>
        {/* <span> */}
          <img className={style.elementImg} src={img} />
        {/* </span> */}
        <button
          id={id}
          onClick={(e) => {
            cardDelete(e.target.id);
          }}
        >
          Delete
        </button>

        <button
          id={id}
          onClick={(e) => {
            toggleLike(e.target.id);
          }}
        >
          Like
        </button>
      </div>
    );
  };



  if (props.method[0].showLike == false) {

    cardElement = props.drinks.map((p) => {
    let colorStyle;

      if (p.like == "true") {
        colorStyle = "red";
      }

      return structuraElement(
        p.strDrink,
        p.strDrinkThumb,
        p.idDrink,
        colorStyle
      );
    });
  } else if (props.method[0].showLike == true) {
    cardElement = props.drinks.map((p) => {
      let colorStyle;
      if (p.like == "true") colorStyle = "red";

      if (p.like == "true") {

        return structuraElement(
          p.strDrink,
          p.strDrinkThumb,
          p.idDrink,
          colorStyle
        );
      }
    });
  }  


  // отвалилось после переписания на функцию
  //   cardElement = "К сожалению вы ничего не выбрали";
  // }

  return (
    <div className={style.cardWrapper}>
      <label className={style.checkedLikes}>
        <input ref={refInput} type="checkbox" onClick={drinksFilterbyLike} />
        показать понравившиеся напитки
      </label>
      <div className={style.innerCards}>{cardElement}</div>
    </div>
  );
};

export default CardElement;
