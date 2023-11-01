const selected = document.getElementById("selected")
var details = localStorage.getItem("clickedDivContent")
const user = document.getElementById("username")
const professions = document.getElementById("profession")
const buttons = document.querySelector(".contactButton")



selected.innerHTML = details

user.innerHTML = localStorage.getItem("name")


professions.textContent = localStorage.getItem("profession")





// Function to extract text content from <p> tags
function extractTextFromPTags(html) {
    const tmpElement = document.createElement("div");
    tmpElement.innerHTML = html;
    const paragraphs = tmpElement.getElementsByTagName("p");
    let extractedText = "";
    for (const p of paragraphs) {
        extractedText += p.textContent + "; " + "\n" ;
    }
    return extractedText;
}

// WhatsApp API
buttons.addEventListener('click', () => {
    const cleanedDetails = extractTextFromPTags(details);
    var WhatsappLink = "https://api.whatsapp.com/send?phone=911234567890&text=" + encodeURIComponent("Contact Details:\n" + cleanedDetails);
    window.open(WhatsappLink);
});