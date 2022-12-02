let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sum =document.getElementById("sum-el")


function add() {

   

    let a = num1 + num2

    sum.textContent += a
}

function subtract() {

    let a = num1 - num2

   sum.textContent += a
}

function divide() {

    let a = num1 / num2

    sum.textContent += a
}

function multiply() {

    let a = num1 * num2

    sum.textContent += a
}

