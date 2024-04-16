const polygon6 = document.getElementById('polygon6');
const backblueList = document.querySelectorAll('.backblue');
const backblackList = document.querySelectorAll('.backblack');

backblueList.forEach(backblue => {
    backblue.addEventListener('mouseover', function() {
        polygon6.style.fill = 'white';
    });

    backblue.addEventListener('mouseout', function() {
        polygon6.style.fill = 'black';
    });
});

backblackList.forEach(backblack => {
    backblack.addEventListener('mouseover', function() {
        polygon6.style.fill = 'white';
    });

    backblack.addEventListener('mouseout', function() {
        polygon6.style.fill = 'black';
    });
});

// DELAI HTML
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('[data-delay]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var href = link.getAttribute('href');
            var delay = parseInt(link.getAttribute('data-delay'));
            setTimeout(function() {
                window.location.href = href;
            }, delay);
        });
    }); 
});

// TRANSITION HTML 
const transitionhtml = document.querySelector('.transitionhtml');
const jauneyellow = document.querySelector('.backjaune');
const backred = document.querySelectorAll('.backred');
const backblue = document.querySelectorAll('.backblue');
const backblack = document.querySelectorAll('.backblack');

jauneyellow.addEventListener('click', function(event){
    transitionhtml.style.backgroundColor = 'yellow';
    transitionhtml.style.animation = 'transitionhtml 0.7s forwards ease';
    transitionhtml.style.top = '10%';
});

backred.forEach(function(element) {
    element.addEventListener('click', function(event){
        transitionhtml.style.backgroundColor = 'red';
        transitionhtml.style.animation = 'transitionhtml 0.7s forwards ease';
        transitionhtml.style.top = '10%';
    });
});

backblue.forEach(function(element) {
    element.addEventListener('click', function(event){
        transitionhtml.style.backgroundColor = 'blue';
        transitionhtml.style.animation = 'transitionhtml 0.7s forwards ease';
        transitionhtml.style.top = '10%';
    });
});

backblack.forEach(function(element) {
    element.addEventListener('click', function(event){
        transitionhtml.style.backgroundColor = 'black';
        transitionhtml.style.animation = 'transitionhtml 0.7s forwards ease';
        transitionhtml.style.top = '10%';
    });
});