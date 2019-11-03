'use strict'

//Ingrédients
const farine = 1
const sucre = 1.5
const oeufs = 3
const lait = 2.5
const chocolat = 10
const décoration = 3.5
const fruits = 5

//prix foret noire
const prixForetNoire =
    (farine * 1) +
    (sucre * 1) +
    (oeufs * 2) +
    (lait * 0.5) +
    (chocolat * 2) +
    (décoration * 5)

//prix tarte au fraise
const prixTarteFraise =
    (fruits * 2) +
    (farine * 0.5) +
    (sucre * 0.5) +
    (oeufs * 0.5) +
    (lait * 0.5) +
    (chocolat * 0.25) +
    (décoration * 2)

//calcul du coefficient
const valeurCoeff = prompt('entrer votre coefficient de marge')
function coeff(valeur) {

    const prixTCC = valeur * +valeurCoeff

    return prixTCC
}
//afficher prix coutant et prix vendu
const div = document.createElement('div')
div.textContent = `Prix coutant: ${prixForetNoire} €, Prix vendu: ${coeff(prixForetNoire)} €`
document.body.append(div)

// Vous avez 5 boutiques. Toutes les boutiques vendront 90% de ce qui a été produit. Vous produisez, 6 gâteaux de chaque type.

//production total de chaque gâteuax
function productionGateaux() {
    const typeGateau = prixForetNoire + prixTarteFraise
    const nbBoutique = 5
    const production = 6
    const productionTotal = (typeGateau * production)* nbBoutique
    return productionTotal
}
console.log(`productution totale est de gâteaux : ${ productionGateaux()}`)

// Quelle est la trésorerie quotidienne à prévoir pour faire les gâteaux ?
function tresorerie() {
    const tresorerie = productionGateaux()
    return tresorerie
}
console.log(`tresorerie : ${tresorerie().toFixed(0)}`)

// Quelle sera la recette quotidienne ?
function recetteQuotidienne() {
    const recette = tresorerie() * coeff(prixTarteFraise+prixForetNoire)
    
    return recette
}
console.log(`recette ${recetteQuotidienne().toFixed(0)}`)
// Quel sera le bénéfice ?
function benefice(){
    const benef = recetteQuotidienne() - productionGateaux()
    return benef
}
console.log(`bénéfices :  ${benefice().toFixed(0)}`)

// Si le bénéfice est pair, alors affichez le message: "Bim...", si le bénéfice est impair, affichez "Bam...".
// Demander correction pour cette partie 
let benefices = benefice()
function isPair(valeurBenef){
    const reponse = valeurBenef % 2
    if (reponse === 0) {
        console.log('Bim')
    }else {
        console.log('Bam')
    }
    
    return reponse
}
console.log(`réponse :  ${isPair(benefices)}`)

