'use strict'

const connexionForm = document.getElementById('connexionForm')
const age = document.getElementById('age')
const role = document.getElementById('role')
const password = document.getElementById('password')

//Demander correction
// résultat retourne Bonjour simple user pour chaque cas
connexionForm.addEventListener('submit', () => {
    // const user = "user"
    const isAdmin = role.value === "admin"
    if (+age >= 18) {
        alert("Bienvenue master user")
    } else if (+age >= 18 && isAdmin) {
        alert("Vous êtes majeur")
    } else {
        alert("Bonjour simple user")
    }

})

//Partie ok
/* 
const age = prompt("Votre age :")
if(+age <=18){ alert("Bonjour simple user") }
if(+age <=18){(alert("Vous êtes majeur"))}

const role = prompt("Votre role dans l'entreprise :")
const isAdmin = +age >=18 && role === "admin"
const password = prompt("Votre mot de passe :")
if(isAdmin && password.length > 5){ alert("Bienvenue master user") }
else{ alert("Bienvenue admin") } 
*/