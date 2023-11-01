const data = document.getElementsByClassName("data")
const username = document.getElementById("username")
let user
const signup = document.getElementById("signup")
const password=document.getElementById("data2")
let pass
const farmer = "(Farmer)"   


function next() {
    user = username.value
    pass=password.value
    if (((user!= "") &&(pass!=""))&&(pass.length>=8)){
        localStorage.setItem("name", user)
        localStorage.setItem("profession", farmer)
        location.href = "farmer-main.html"
    } else {
        alert("Please fill in all inputs!")
    }
}

function main() {
    location.href = "signup.html"
}



