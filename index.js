let numberEl = document.getElementById("number-el")
let count = 0
let previousEl = document.getElementById("previuos-el")

function increament() {
    count = count + 1
    numberEl.textContent  = count
}

function save() {
   previousEl.textContent += count + " - "

   count = 0
   numberEl.textContent  = 0
}