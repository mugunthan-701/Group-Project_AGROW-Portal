const data=document.getElementsByClassName("data")
const username=document.getElementById("username")
let user



function next(){
    if (data!=""){
        user=username.value
        localStorage.setItem("user",user)
        location.href="main.html"
    }else{
        alert("Give the proper inputs..")
    }
}
