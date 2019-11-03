'use strict'

const userAge = prompt("Votre age : ")
const isWoman = prompt("Êtes vous une femme ?"); 
const isAnAdult = +userAge >= 18 ? isWoman === "oui" ? console.log("30€") : console.log("35€") :  console.log("15€");
