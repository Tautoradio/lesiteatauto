        // CURSEUR
        const monSVG = document.getElementById('lecurseur');

        document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;


        monSVG.style.left = mouseX + "px";
        monSVG.style.top = mouseY + "px";
        });

        // HORLOGE
        function updateClock() {
        const parisTime = new Date().toLocaleTimeString("fr-FR", { timeZone: "Europe/Paris" });
        document.getElementById("time").innerText = `Tauto's time ${parisTime}`;
        }
        setInterval(updateClock, 1000);
        updateClock();


        // CHANGEMENT CURSEUR
        const divB = document.getElementById('lecurseur');
        const divAList = document.querySelectorAll('.hoverimage');
        const curseurdeux = document.querySelector('.curseurdeux');
        
        divAList.forEach(divA => {
            divA.addEventListener('mouseenter', () => {
                curseurdeux.style.visibility = 'visible';
                divB.style.display = 'none';
        
                document.addEventListener('mousemove', onMouseMove);
            });
        
            divA.addEventListener('mouseleave', () => {
                curseurdeux.style.visibility = 'hidden';
                divB.style.display = 'block';
        
                document.removeEventListener('mousemove', onMouseMove);
            });
        });
        
        function onMouseMove(e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            curseurdeux.style.left = mouseX + "px";
            curseurdeux.style.top = mouseY + "px";
        }
        

        const hoverimages = document.querySelectorAll('.hoverimage');
        let heading = document.querySelector('.curseurdeux');
    
        hoverimages.forEach(hoverimage => {
            hoverimage.addEventListener('mouseover', function() {
            heading.textContent = 'scroll';
            });
        });
               