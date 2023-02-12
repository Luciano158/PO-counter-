 let firstCard = 10
 let secondCard = 11
 let sum = firstCard + secondCard
 let hasBlackJack = false
 let isalive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startgame(){
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEL.textContent = "Sum : " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message ="Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isalive = false
    }
    messageEl.textContent = message
}

function newcard(){
    console.log("Drawing a new card from deck")
}

 

// console.log(isalive)

// //let age = 22

// if (age > 21){

//     console.log('Welcome')
// } else {
//     console.log("you can not enter the club")

// }


// let age = 100

// if (age === 100){

//     console.log("Here is your birthday card from the King!")
// } else if(age < 100){

//     console.log("Not elegible")
// } else {
//     console.log("Not elegible, you have already gotten one")
// }


