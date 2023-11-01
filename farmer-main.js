const username = document.getElementById("name")
let names
names = localStorage.getItem("name")

username.textContent = names





document.addEventListener("DOMContentLoaded", function () {

    const gridItems = document.querySelectorAll(".data");


    // Calculate the number of divs to display (random number between 1 and 9)
    const numDivsToDisplay = Math.floor(Math.random() * 9) + 2;
    
    // Randomly select and display the divs
    for (let i = 0; i <= numDivsToDisplay; i++) {
        const randomIndex = Math.floor(Math.random() * gridItems.length);
        gridItems[randomIndex].style.display = "block";
    }


    gridItems.forEach((div) => {
        div.addEventListener("click", function () {


            // Get the text content of the p tags inside the clicked div
            const divContent = div.innerHTML;
            
            // Store the div content in a variable and save it in local storage
            console.log(divContent)
            localStorage.setItem("clickedDivContent", divContent);
            window.location.href = "result.html"
        });
    });
});
