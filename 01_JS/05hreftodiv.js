const urlParams = new URLSearchParams(window.location.search);
const divToShow = urlParams.get('div');

// Afficher la div correspondante en fonction du paramètre d'URL
if (divToShow) {
    const divToDisplay = document.querySelector(`.${divToShow}`);
    if (divToDisplay) {
        divToDisplay.style.display = "flex";
    }
}
