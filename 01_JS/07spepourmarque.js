const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");

const museunterlindenDiv = document.querySelector(".museunterlinden");
const veillescharruesDiv = document.querySelector(".veillescharrues");
const elitefDiv = document.querySelector(".elitef");

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
        if (displayedDiv === museunterlindenDiv) {
            currentDiv = museunterlindenDiv;
            nextDiv = veillescharruesDiv;
        } else if (displayedDiv === veillescharruesDiv) {
            currentDiv = veillescharruesDiv;
            nextDiv = elitefDiv;
        } else if (displayedDiv === elitefDiv) {
            currentDiv = elitefDiv;
            nextDiv = museunterlindenDiv;
        }

    } else if (previousButton === event.currentTarget) {
        if (displayedDiv === elitefDiv) {
            currentDiv = elitefDiv;
            nextDiv = veillescharruesDiv;
        } else if (displayedDiv === veillescharruesDiv) {
            currentDiv = veillescharruesDiv;
            nextDiv = museunterlindenDiv;
        } else if (displayedDiv === museunterlindenDiv) {
            currentDiv = museunterlindenDiv;
            nextDiv = elitefDiv;
        }
    }

    fadeOut(displayedDiv).then(() => {
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
    if (elitefDiv.style.display === "flex") {
        leftpart.style.pointerEvents = "none";
        leftpart.style.opacity = "0";
        leftpart.style.animation = "boutonanim 0.5s forwards ease"
    } else {
        leftpart.style.pointerEvents = "all";
        leftpart.style.opacity = "1";
        leftpart.style.animation = 'boutonanimreverse 0.5s forwards ease'    
    }
    
    if (museunterlindenDiv.style.display === "flex") {
        pourprevious.style.pointerEvents = "none";
        pourprevious.style.opacity = "0";
        pourprevious.style.animation = "boutonanim 0.5s forwards ease"
    } else {
        pourprevious.style.pointerEvents = "all";
        pourprevious.style.opacity = "1";
        pourprevious.style.animation = 'boutonanimreverse 0.5s forwards ease' 
    }
}
