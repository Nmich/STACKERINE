'use strict'

// Mettez ces deux instructions dans une fonction nommée askName
// Demandez au user son nom
function getName() {
    const name = prompt("Votre nom : ")
    return name
}
// Affichez sa réponse
console.log(getName())
// Demandez au user son age
const age = prompt("Votre age : ")

function getAge() {
    return +age
}

// Affichez sa réponse
// Affichez s'il est majeur ou non
function askHowOld() {
    +age >= 18 ? console.log(`Vous avez : ${getAge()} ans`) : console.log('')
}

askHowOld()
// Mettez ces 3 instructions dans une fonction nommée askHowOld
// Exécutez les deux fonctions précédemment créees