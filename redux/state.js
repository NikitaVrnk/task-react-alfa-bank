import React, { useEffect, useState, setState, Component } from "react";
import * as axios from "axios";
import { renderEntireTree } from "../render";

const API = "https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
let state = {
  drinks: [],
  method: [{ showLike: false }, { isLoaded: false }],
};

//ответ с сервера
const didMount = (API, obj) => {
  axios
    .get(API)
    .then((res) => {
      res.data.drinks.map((element) => {
        obj.drinks.push(element);
      });
    })
    .then((res) => {
      renderEntireTree(state);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
didMount(API, state);

//удаление объекта из стейта по id кнопки
export let cardDelete = (id) => {
  state.drinks.forEach(function (el, i) {
    if (el.idDrink == id) state.drinks.splice(i, 1);
  });
  renderEntireTree(state);
};

//поставить/убрать лайк нужной карточки
export let toggleLike = (id) => {
  state.drinks.forEach(function (el, i) {
    if (el.idDrink == id) {
      state.drinks[i].like == "true"
        ? (state.drinks[i].like = "false")
        : (state.drinks[i].like = "true");
    }
  });
  renderEntireTree(state);
};


//изменение статуса метода и показать все карточки с лайком(для чекаута)
export let showLikedDrinks = () => {
  state.method[0].showLike = true;
  renderEntireTree(state);
};

//изменение статуса метода и показать все карточки без лайка(для чекаута)
export let showAllDrinks = () => {
  state.method[0].showLike = false;
  renderEntireTree(state);
};

export default state;
