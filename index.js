// document.getElementById("count-el").innerText = 5


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


let count = 0
let save = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function saveit() {
    saveEl.innerText += " " + count + " - "
    count = 0
    countEl.innerText = count
}
