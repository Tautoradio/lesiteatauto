const pourcurseur = document.querySelector('.pourcurseur');

function runCommand() {
    var input = document.getElementById("commandInput").value.toLowerCase();

    var voyageAuCentre = document.getElementById("voyageaucentre");
    var frankenstein = document.getElementById("frankenstein");
    var guerremonde = document.getElementById("guerremonde");
    var hommelune = document.getElementById("hommelune");
    var millequatre = document.getElementById("millequatre");
    var fahren = document.getElementById("fahren");
    var dune = document.getElementById("dune");
    var bladerunner = document.getElementById("bladerunner");
    var guidevoyage = document.getElementById("guidevoyage");
    var hungergames = document.getElementById("hungergames");
    const intro = document.querySelector('.intro');

    if (input === "voyage au centre de la terre" && voyageAuCentre.style.display === "block") {return;}
    if (input === "frankenstein ou le prométhée moderne" && frankenstein.style.display === "block") {return;}
    if (input === "la guerre des mondes" && guerremonde.style.display === "block") {return;}
    if (input === "les premiers hommes de la lune" && hommelune.style.display === "block") {return;}
    if (input === "1984" && millequatre.style.display === "block") {return;}
    if (input === "fahrenheit 451" && fahren.style.display === "block") {return;}
    if (input === "dune" && dune.style.display === "block") {return;}
    if (input === "blade runner" && bladerunner.style.display === "block") {return;}
    if (input === "le guide du voyageur galactique" && guidevoyage.style.display === "block") {return;}
    if (input === "hunger games" && hungergames.style.display === "block") {return;}
    if (input === "introduction" && intro.style.display === "block") {return;}


    // Sinon, exécuter le code normal
    if (input === "voyage au centre de la terre") {
        frankenstein.style.display = "none";
        intro.style.display = "none";
        guerremonde.style.display = "none";
        hommelune.style.display = "none";
        hungergames.style.display = "none";
        fahren.style.display = "none";
        guidevoyage.style.display = "none";
        bladerunner.style.display = "none";
        millequatre.style.display = "none";
        dune.style.display = "none";
        pourcurseur.style.display = "block";
        setTimeout(function() {
            pourcurseur.style.display = "none";
        }, 500);
        setTimeout(function() {
            voyageAuCentre.style.display = "block";
        }, 700);
    }
    if (input === "frankenstein ou le prométhée moderne") {
        voyageAuCentre.style.display = "none";
        guerremonde.style.display = "none";
        intro.style.display = "none";
        hommelune.style.display = "none";
        millequatre.style.display = "none";
        fahren.style.display = "none";
        guidevoyage.style.display = "none";
        dune.style.display = "none";
        hungergames.style.display = "none";
        bladerunner.style.display = "none";
        pourcurseur.style.display = "block";
        setTimeout(function() {
            pourcurseur.style.display = "none";
        }, 500);
        setTimeout(function() {
            frankenstein.style.display = "block";
        }, 700);
    }
    if (input === "la guerre des mondes") {
        voyageAuCentre.style.display = "none";
        frankenstein.style.display = "none";
        intro.style.display = "none";
        hommelune.style.display = "none";
        millequatre.style.display = "none";
        fahren.style.display = "none";
        hungergames.style.display = "none";
        guidevoyage.style.display = "none";
        dune.style.display = "none";
        bladerunner.style.display = "none";
        pourcurseur.style.display = "block";
        setTimeout(function() {
            pourcurseur.style.display = "none";
        }, 500);
        setTimeout(function() {
            guerremonde.style.display = "block";
        }, 700);
    }
    if (input === "les premiers hommes de la lune") {
        voyageAuCentre.style.display = "none";
        frankenstein.style.display = "none";
        guerremonde.style.display = "none";
        intro.style.display = "none";
        millequatre.style.display = "none";
        guidevoyage.style.display = "none";
        fahren.style.display = "none";
        hungergames.style.display = "none";
        bladerunner.style.display = "none";
        dune.style.display = "none";
        pourcurseur.style.display = "block";
        setTimeout(function() {
            pourcurseur.style.display = "none";
        }, 500);
        setTimeout(function() {
            hommelune.style.display = "block";
        }, 700);
    }

    if (input === "1984") {
        voyageAuCentre.style.display = "none";
        frankenstein.style.display = "none";
        guerremonde.style.display = "none";
        intro.style.display = "none";
        hommelune.style.display = "none";
        fahren.style.display = "none";
        guidevoyage.style.display = "none";
        dune.style.display = "none";
        hungergames.style.display = "none";
        bladerunner.style.display = "none";
        pourcurseur.style.display = "block";
        setTimeout(function() {
            pourcurseur.style.display = "none";
        }, 500);
        setTimeout(function() {
            millequatre.style.display = "block";
        }, 700);
    }

    if (input === "fahrenheit 451") {
        voyageAuCentre.style.display = "none";
        frankenstein.style.display = "none";
        guerremonde.style.display = "none";
        intro.style.display = "none";
        hommelune.style.display = "none";
        bladerunner.style.display = "none";
        guidevoyage.style.display = "none";
        dune.style.display = "none";
        hungergames.style.display = "none";
        millequatre.style.display = "none";
        pourcurseur.style.display = "block";
        setTimeout(function() {
            pourcurseur.style.display = "none";
        }, 500);
        setTimeout(function() {
            fahren.style.display = "block";
        }, 700);
    }

    if (input === "dune") {
        voyageAuCentre.style.display = "none";
        frankenstein.style.display = "none";
        guerremonde.style.display = "none";
        intro.style.display = "none";
        hommelune.style.display = "none";
        millequatre.style.display = "none";
        guidevoyage.style.display = "none";
        bladerunner.style.display = "none";
        hungergames.style.display = "none";
        fahren.style.display = "none";
        pourcurseur.style.display = "block";
        setTimeout(function() {
            pourcurseur.style.display = "none";
        }, 500);
        setTimeout(function() {
            dune.style.display = "block";
        }, 700);
    }

    if (input === "blade runner") {
        voyageAuCentre.style.display = "none";
        frankenstein.style.display = "none";
        guerremonde.style.display = "none";
        intro.style.display = "none";
        hommelune.style.display = "none";
        millequatre.style.display = "none";
        guidevoyage.style.display = "none";
        dune.style.display = "none";
        hungergames.style.display = "none";
        fahren.style.display = "none";
        pourcurseur.style.display = "block";
        setTimeout(function() {
            pourcurseur.style.display = "none";
        }, 500);
        setTimeout(function() {
            bladerunner.style.display = "block";
        }, 700);
    }

    if (input === "le guide du voyageur galactique") {
        voyageAuCentre.style.display = "none";
        frankenstein.style.display = "none";
        guerremonde.style.display = "none";
        intro.style.display = "none";
        hommelune.style.display = "none";
        millequatre.style.display = "none";
        bladerunner.style.display = "none";
        dune.style.display = "none";
        hungergames.style.display = "none";
        fahren.style.display = "none";
        pourcurseur.style.display = "block";
        setTimeout(function() {
            pourcurseur.style.display = "none";
        }, 500);
        setTimeout(function() {
            guidevoyage.style.display = "block";
        }, 700);
    }

    if (input === "hunger games") {
        voyageAuCentre.style.display = "none";
        frankenstein.style.display = "none";
        guerremonde.style.display = "none";
        hommelune.style.display = "none";
        intro.style.display = "none";
        millequatre.style.display = "none";
        bladerunner.style.display = "none";
        dune.style.display = "none";
        guidevoyage.style.display = "none";
        fahren.style.display = "none";
        pourcurseur.style.display = "block";
        setTimeout(function() {
            pourcurseur.style.display = "none";
        }, 500);
        setTimeout(function() {
            hungergames.style.display = "block";
        }, 700);
    }

    if (input === "introduction") {
        voyageAuCentre.style.display = "none";
        frankenstein.style.display = "none";
        guerremonde.style.display = "none";
        hommelune.style.display = "none";
        hungergames.style.display = "none";
        millequatre.style.display = "none";
        bladerunner.style.display = "none";
        dune.style.display = "none";
        guidevoyage.style.display = "none";
        fahren.style.display = "none";
        pourcurseur.style.display = "block";
        setTimeout(function() {
            pourcurseur.style.display = "none";
        }, 500);
        setTimeout(function() {
            intro.style.display = "block";
        }, 700);
    }

    document.getElementById("commandInput").value = "";
}