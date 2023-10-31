const username = document.getElementById("name")
let names

names = localStorage.getItem("user")

username.textContent = names
