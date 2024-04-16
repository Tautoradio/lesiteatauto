const originalTitle = document.getElementById('originalTitle').textContent;

const alternateTitles = [
    "Eh eh eh reviens par là !",

];

function getRandomTitle() {
    return alternateTitles[Math.floor(Math.random() * alternateTitles.length)];
}

window.addEventListener('blur', function() {
    document.title = getRandomTitle();
});

window.addEventListener('focus', function() {
    document.title = originalTitle;
});
