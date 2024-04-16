const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");

const fallinloveDiv = document.querySelector(".fallinlove");
const angryDiv = document.querySelector(".angry");
const scenesdeviesDiv = document.querySelector(".scenesdevies");
const loveyourselfDiv = document.querySelector(".loveyourself");
const laroutedushirmeckDiv = document.querySelector(".laroutedushirmeck");

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
        if (displayedDiv === fallinloveDiv) {
            currentDiv = fallinloveDiv;
            nextDiv = angryDiv;
        } else if (displayedDiv === angryDiv) {
            currentDiv = angryDiv;
            nextDiv = scenesdeviesDiv;
        } else if (displayedDiv === scenesdeviesDiv) {
            currentDiv = scenesdeviesDiv;
            nextDiv = loveyourselfDiv;
        } else if (displayedDiv === loveyourselfDiv) {
            currentDiv = loveyourselfDiv;
            nextDiv = fallinloveDiv;
        }
    } else if (previousButton === event.currentTarget) {
        if (displayedDiv === loveyourselfDiv) {
            currentDiv = loveyourselfDiv;
            nextDiv = scenesdeviesDiv;
        } else if (displayedDiv === scenesdeviesDiv) {
            currentDiv = scenesdeviesDiv;
            nextDiv = angryDiv;
        } else if (displayedDiv === angryDiv) {
            currentDiv = angryDiv;
            nextDiv = fallinloveDiv;
        } else if (displayedDiv === fallinloveDiv) {
            currentDiv = fallinloveDiv;
            nextDiv = loveyourselfDiv;
        }
    }

    fadeOut(currentDiv).then(() => {
        // Afficher la div suivante
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
    if (loveyourselfDiv.style.display === "flex") {
        leftpart.style.pointerEvents = "none";
        leftpart.style.opacity = "0";
        leftpart.style.animation = "boutonanim 0.5s forwards ease"
        } else {
        leftpart.style.pointerEvents = "all";
        leftpart.style.opacity = "1";
        leftpart.style.animation = 'boutonanimreverse 0.5s forwards ease'    
    }
    
    if (fallinloveDiv.style.display === "flex") {
        pourprevious.style.pointerEvents = "none";
        pourprevious.style.opacity = "0";
        pourprevious.style.animation = "boutonanim 0.5s forwards ease"
    } else {
        pourprevious.style.pointerEvents = "all";
        pourprevious.style.opacity = "1";
        pourprevious.style.animation = 'boutonanimreverse 0.5s forwards ease' 
    }
    }
