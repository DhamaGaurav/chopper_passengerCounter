// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count = count+1
    console.log(count)
    countEl.textContent = count
}
let saveEl = document.getElementById("save-el")
function save(){
    let log = count + " - "
    console.log(count)
    saveEl.textContent += log
    countEl.textContent = 0
    count = 0
}