//document.getElementById("count-el").innerText = 5

//let myage = 21

//let humandogratio = 7

//let mydogage = myage * humandogratio

//console.log(mydogage)

let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEL = document.getElementById("total-el")

let count = 0


function increment () {
count += 1
countEl.textContent = count


}


function save() {

    let hope = count + " : "

    saveEL.textContent += ' ' + hope
    countEl.textContent = 0
count = 0

}


function minus() {
 let minus = count += -1

countEl.textContent = count 

}

function total ()  {

   let total = 


   totalEL.textContent += total
   
}