       // ne pas oublier de mettre l'element à deplacer en position absolute. /utiliser jquery offset

       function moveleft() {
           let carre = document.getElementById('square');
           carre.style.left = `${carre.offsetLeft - 50}px`;
       }

       function moveright() {
           let carre = document.getElementById('square');
           carre.style.left = `${carre.offsetLeft + 50}px`;
       }

       function moveup() {
           let carre = document.getElementById('square');
           carre.style.top = `${carre.offsetTop - 50}px`;
       }

       function movedown() {
           let carre = document.getElementById('square');
           carre.style.top = `${carre.offsetTop + 50}px`;
       }