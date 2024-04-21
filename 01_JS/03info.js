// DECLENCHEMENT INFO
const infoopen = document.getElementById('infoopen')
const closefermer = document.getElementById('closefermer')
const generalinfo = document.querySelector('.generalinfo')

infoopen.addEventListener('click', function() {
    generalinfo.style.animation = 'btnanim 0.6s forwards ease'
    generalinfo.style.opacity = '1';
    generalinfo.style.transform = 'translate(0px, 0px)';
    generalinfo.style.visibility = 'visible';
});

closefermer.addEventListener('click', function() {
    generalinfo.style.animation = 'btnanimreverse 0.6s forwards ease'
    generalinfo.style.opacity = '0';
    generalinfo.style.transform = 'translate(4px, 20px)';
    generalinfo.style.visibility = 'hidden';

    setTimeout(function() {
        const texttoshowAll = document.querySelectorAll('.texttoshow');
        const pourhidetexteAll = document.querySelectorAll('.pourhidetexte');
        texttoshowAll.forEach(function(texttoshow) {
            texttoshow.style.visibility = 'hidden';
        });
        pourhidetexteAll.forEach(function(pourhidetexte) {
            pourhidetexte.style.visibility = 'hidden';
        });
        const visibletextAll = document.querySelectorAll('.visibletext');
        visibletextAll.forEach(function(visibletext) {
            visibletext.style.visibility = 'visible';
        });
    }, 700);
});

// APPARITION TEXTE
    const visibletexts = document.querySelectorAll(".visibletext");
    visibletexts.forEach(function(visibletext) {
        visibletext.addEventListener('click', function() {
            const texttoshow = this.closest('.communeparcase').querySelector('.texttoshow');
            const pourhidetexte = this.closest('.communeparcase').querySelector('.pourhidetexte');

            texttoshow.style.visibility = 'visible';
            pourhidetexte.style.visibility = 'visible';
        });
    });
    const pourhidetextes = document.querySelectorAll(".pourhidetexte");
    pourhidetextes.forEach(function(pourhidetexte) {
        pourhidetexte.addEventListener('click', function() {
            const texttoshow = this.closest('.communeparcase').querySelector('.texttoshow');
            const visibletext = this.closest('.communeparcase').querySelector('.visibletext');

            texttoshow.style.visibility = 'hidden';
            this.style.visibility = 'hidden';
            visibletext.style.visibility = 'visible';
        });
    });
