const data=document.getElementsByClassName("data")
const username=document.getElementById("username")
let user
const signup=document.getElementById("signup")



function next(){
    if (data!=""){
        user=username.value
        localStorage.setItem("user",user)
        location.href="main.html"
    }else{
        alert("Give the proper inputs..")
    }
}

function main(){
    location.href="signup.html"
}