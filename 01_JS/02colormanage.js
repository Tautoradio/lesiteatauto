// COLOR MANAGEMENT MOUSE
document.addEventListener("DOMContentLoaded", function () {

    const polygon6 = document.getElementById('polygon6');
    const infographiquedesigns = document.querySelectorAll('.infographiquedesign');
    const infogenerals = document.querySelectorAll('.infogeneral');
    
    infographiquedesigns.forEach(function(infographiquedesign) {
        infographiquedesign.addEventListener('mouseover', function() {
            var backgroundColor = window.getComputedStyle(infographiquedesign).backgroundColor;
            if (backgroundColor === 'rgb(0, 0, 255)') {
                polygon6.style.fill = 'white';
            }
        });
        
        infographiquedesign.addEventListener('mouseout', function() {
            polygon6.style.fill = 'black';
        });
    });

    infogenerals.forEach(function(infogeneral) {
        infogeneral.addEventListener('mouseover', function() {
            var backgroundColor = window.getComputedStyle(infogeneral).backgroundColor;
            if (backgroundColor === 'rgb(0, 0, 0)') {
                polygon6.style.fill = 'white';
            }
        });

        infogeneral.addEventListener('mouseout', function() {
            polygon6.style.fill = 'black';
        });
    });
});