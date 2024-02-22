const adButton = document.querySelector('.adição')
const subButton = document.querySelector('.subtração')
const divButton = document.querySelector('.divisão')
const multButton = document.querySelector('.multiplicação')
const potButton = document.querySelector('.potência')
const raizButton = document.querySelector('.raiz')

function clickAd() {
    let num1 = parseInt(document.querySelector('#num1').value)
    let num2 = parseInt(document.querySelector('#num2').value)
    let num3 = document.querySelector('#num3')

    num3.value = num1 + num2
}

function clickSub() {
    let num1 = document.querySelector('#num1').value
    let num2 = document.querySelector('#num2').value
    let num3 = document.querySelector('#num3')

    num3.value = num1 - num2
}

function clickDiv() {
    let num1 = document.querySelector('#num1').value
    let num2 = document.querySelector('#num2').value
    let num3 = document.querySelector('#num3')

    num3.value = num1 / num2
}

function clickMult() {
    let num1 = document.querySelector('#num1').value
    let num2 = document.querySelector('#num2').value
    let num3 = document.querySelector('#num3')

    num3.value = num1 * num2
}

function clickPot() {
    let num1 = document.querySelector('#num1').value
    let num2 = document.querySelector('#num2').value
    let num3 = document.querySelector('#num3')

    num3.value = Math.pow(num1, num2)
}

function clickRaiz() {
    let num1 = document.querySelector('#num1').value
    let num3 = document.querySelector('#num3')

    num3.value = Math.sqrt(num1, 2)
}

adButton.addEventListener("click", clickAd)
subButton.addEventListener("click", clickSub)
divButton.addEventListener("click", clickDiv)
multButton.addEventListener("click", clickMult)
potButton.addEventListener("click", clickPot)
raizButton.addEventListener("click", clickRaiz)