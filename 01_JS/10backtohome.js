document.addEventListener('DOMContentLoaded', function() {
    const logoLink = document.querySelector('.logo');
    const backtohome = document.querySelector('.backtohome');


    logoLink.addEventListener('click', function(event) {
        event.preventDefault();

        backtohome.style.animation = 'transitionhtml 0.7s forwards ease';
        backtohome.style.top = '10%';

        const href = logoLink.getAttribute('href');
        const delay = 700;
        setTimeout(function() {
            window.location.href = href;
        }, delay);
    });
});