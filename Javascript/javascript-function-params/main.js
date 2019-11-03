'use strict'

//Niveau 1: Fonctions avec function en paramètre
function firstParam() {
    const param1= console.log('How are you')
    return param1
}

function secondParam() {
    const param2= console.log('Hello buddy')
    return param2
}

setTimeout(firstParam, 2000)
setTimeout(secondParam, 500)

//Niveau 1: Fonctions à paramètres multiples
const inputEmail = document.getElementById('email')
const inputConfirmation = document.getElementById('confirmEmail')
const inputSubmit = document.getElementById('submit')

inputSubmit.addEventListener('click', () => {
    function checkConfirmationEmail(email, confirmEmail){
        const correct = document.createElement('div').textContent = "Correct"
        const notCorrect = document.createElement('div').textContent = "Not Correct"
        const check = email.value === confirmEmail.value ? correct : notCorrect; 
        alert(check)
    }
    checkConfirmationEmail(inputEmail, inputConfirmation)
    
})