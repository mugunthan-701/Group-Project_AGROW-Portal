
const names = document.getElementById("name")
const farmer = "(Farmer)"
const landlord = "(Landlord)"


var forms = document.querySelectorAll(".form");
function next() {
    localStorage.setItem("profession", farmer )
    localStorage.setItem('name', names.value)
    var isFormEmpty = true;

    forms.forEach(function(form) {
        if (form.querySelector('input').value.trim() === "" ) {
            isFormEmpty = false;
            return;
        }
    });

    if (isFormEmpty) {
        location.href = "main.html";
    } else {
        alert("Please Enter All the Details!");
    }
}


