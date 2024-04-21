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
