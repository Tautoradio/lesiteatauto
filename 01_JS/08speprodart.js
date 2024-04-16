const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");

const adjectifsqualificatifsDiv = document.querySelector(".adjectifsqualificatifs");
const violencesfrancaisesDiv = document.querySelector(".violencesfrancaises");
const loveisnotdefinedDiv = document.querySelector(".loveisnotdefined");
const szemetDiv = document.querySelector(".szemet");

const leftpart = document.querySelector(".leftpart");
const pourprevious = document.querySelector(".pourprevious");

window.addEventListener('load', () => {
    updateButtonState();
});

previousButton.addEventListener("click", navigateProjects);
nextButton.addEventListener("click", navigateProjects);

function navigateProjects(event) {
    let currentDiv, nextDiv;

    // Identifier la div actuellement affichée
    const displayedDiv = document.querySelector('.maincontentenveloppe > div[style*="display: flex"]');

    if (nextButton === event.currentTarget) {
        if (displayedDiv === adjectifsqualificatifsDiv) {
            currentDiv = adjectifsqualificatifsDiv;
            nextDiv = violencesfrancaisesDiv;
        } else if (displayedDiv === violencesfrancaisesDiv) {
            currentDiv = violencesfrancaisesDiv;
            nextDiv = loveisnotdefinedDiv;
        } else if (displayedDiv === loveisnotdefinedDiv) {
            currentDiv = loveisnotdefinedDiv;
            nextDiv = szemetDiv;
        } else if (displayedDiv === szemetDiv) {
            currentDiv = szemetDiv;
            nextDiv = adjectifsqualificatifsDiv;
        }
    } else if (previousButton === event.currentTarget) {
        if (displayedDiv === szemetDiv) {
            currentDiv = szemetDiv;
            nextDiv = loveisnotdefinedDiv;
        } else if (displayedDiv === loveisnotdefinedDiv) {
            currentDiv = loveisnotdefinedDiv;
            nextDiv = violencesfrancaisesDiv;
        } else if (displayedDiv === violencesfrancaisesDiv) {
            currentDiv = violencesfrancaisesDiv;
            nextDiv = adjectifsqualificatifsDiv;
        } else if (displayedDiv === adjectifsqualificatifsDiv) {
            currentDiv = adjectifsqualificatifsDiv;
            nextDiv = szemetDiv;
        }
    }

    fadeOut(currentDiv).then(() => {
        nextDiv.style.display = "flex";
        fadeIn(nextDiv);
        updateButtonState();
    });
}

function fadeOut(element) {
    return new Promise(resolve => {
        element.style.animation = "fadeOutAnim 0.5s forwards ease";
        setTimeout(() => {
            element.style.display = "none";
            element.style.animation = ""; 
            resolve(); 
        }, 300);
    });
}

function fadeIn(element) {
    element.style.display = "flex"; 
    element.style.animation = "fadeInAnim 0.5s forwards ease";
}

function updateButtonState() {
    if (szemetDiv.style.display === "flex") {
        leftpart.style.pointerEvents = "none";
        leftpart.style.opacity = "0";
        leftpart.style.animation = "boutonanim 0.5s forwards ease"
    } else {
        leftpart.style.pointerEvents = "all";
        leftpart.style.opacity = "1";
        leftpart.style.animation = 'boutonanimreverse 0.5s forwards ease'    
    }
    
    if (adjectifsqualificatifsDiv.style.display === "flex") {
        pourprevious.style.pointerEvents = "none";
        pourprevious.style.opacity = "0";
        pourprevious.style.animation = "boutonanim 0.5s forwards ease"
    } else {
        pourprevious.style.pointerEvents = "all";
        pourprevious.style.opacity = "1";
        pourprevious.style.animation = 'boutonanimreverse 0.5s forwards ease' 
    }
}
