var forms = document.querySelectorAll(".form");
function next() {
    var isFormEmpty = true;

    forms.forEach(function(form) {
        if (form.querySelector('input').value.trim() === "") {
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
