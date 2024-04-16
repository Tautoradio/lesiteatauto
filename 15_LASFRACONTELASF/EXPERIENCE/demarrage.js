    document.addEventListener("DOMContentLoaded", function () {
        const titleElement = document.getElementById('title');
        const text = titleElement.innerText;
        const shuffleInterval = 50;
        const shuffleDelay = 100;
        const shuffleDuration = 4900;
        const customChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz&#'{}()-|_@[]=£$¤*µù%!§:/;.,?";
        const startButton = document.getElementById('startButton');
        const startDiv = document.querySelector('.start');
        const jaugeCharge = document.querySelector('.jaugecharge');
        const droitedeheader = document.querySelector('.droitedeheader');

        startButton.addEventListener('click', function() {
            function shuffleText() {
                let shuffledText = '';
                for (let i = 0; i < text.length; i++) {
                    shuffledText += customChars[Math.floor(Math.random() * customChars.length)];
                }
                titleElement.innerText = shuffledText;
            }
            titleElement.innerText = '';
            setTimeout(function () {
                const shuffleIntervalId = setInterval(shuffleText, shuffleInterval);
                setTimeout(function () {
                    clearInterval(shuffleIntervalId);
                    titleElement.innerText = text;
                }, shuffleDuration);
            }, shuffleDelay);

            startDiv.style.pointerEvents = 'none';
            startDiv.style.visibility = 'hidden';
            titleElement.style.opacity = 1;

            jaugeCharge.classList.add('animate-jauge');

            setTimeout(() => {
                droitedeheader.style.pointerEvents = 'all';
                droitedeheader.style.opacity = 1;
            }, 5500);
        
            function startAnimation() {
                const elements = document.querySelectorAll('.intro *');
                setTimeout(() => {
                    typeWriter(elements, 0);
                }, 6000);
            }
                function typeWriter(elements, index) {
                    if (index < elements.length) {
                        const el = elements[index];
                        const originalContent = el.dataset.originalContent;
                        const textArray = originalContent.split('');
                        el.innerHTML = '';
                        el.style.visibility = 'visible';
                        textArray.forEach((letter, i) => {
                            setTimeout(() => (el.innerHTML += letter), 5 * i);
                        });
                        setTimeout(() => typeWriter(elements, index + 1), 5 * textArray.length);
                }
            }
            startAnimation();
       });
   });