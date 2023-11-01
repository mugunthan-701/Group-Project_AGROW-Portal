const selected = document.getElementById("selected")
var details = localStorage.getItem("clickedDivContent")
const user = document.getElementById("username")
const professions = document.getElementById("profession")



selected.innerHTML = details

user.innerHTML = localStorage.getItem("name")

professions.textContent = localStorage.getItem("profession")