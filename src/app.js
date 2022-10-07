/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numero = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const iconos = ["❤️", " ♠️", "♣️", "♦️"];

function randomcartaselement(array) {
  const numeroaleatorio = Math.floor(Math.random() * array.length);
  const elementoaleatorio = array[numeroaleatorio];
  return elementoaleatorio;
}

const numerocarta = document.querySelector("#numero");
const iconocarta = document.querySelector("#iconos1");
const iconocarta1 = document.querySelector("#iconos2");
numerocarta.innerHTML = randomcartaselement(numero);
let finaliconos = randomcartaselement(iconos);
iconocarta.innerHTML = finaliconos;
iconocarta1.innerHTML = finaliconos;
