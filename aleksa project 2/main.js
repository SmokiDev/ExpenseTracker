let nameInput = document.querySelector(".name-input")
let dateInput = document.querySelector(".date-input")
let numberInput = document.querySelector(".number-input")
let expenseBtn = document.querySelector(".expense-btn")
let table = document.querySelector("table")
expenseBtn.addEventListener("click", (e) => {
  e.preventDefault()
const trDiv = document.createElement("tr")
const newTdOne = document.createElement("td")
newTdOne.innerText = nameInput.value
const newTdTwo = document.createElement("td")
newTdTwo.innerText = dateInput.value
const newTdThree = document.createElement("td")
newTdThree.innerText = numberInput.value 
const removeBtn = document.createElement("td")
removeBtn.innerHTML = '<button class="remove-btn">X</button>'
trDiv.appendChild(newTdOne)
trDiv.appendChild(newTdTwo)
trDiv.appendChild(newTdThree)
trDiv.appendChild(removeBtn)
table.appendChild(trDiv)
trDiv.addEventListener("click", () => {
  trDiv.remove()
})
  nameInput.value = '';
  dateInput.value = '';
  numberInput.value = '';
})
