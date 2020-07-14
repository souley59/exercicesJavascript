let C = document.getElementById("myCanvas");
let R = C.getContext("2d");
R.fillStyle = "rgba(0,128,128,0.9)"; //Définit le style utilisé lors du remplissage de formes.
R.strokeStyle = "rgb(255,255,255)"; //Définit le style pour les contours des formes.
R.lineWidth = 10; //largeur de ligne
R.fillRect(10, 10, 350, 350); // dessine un rectangle
R.strokeRect(10, 10, 350, 350); //contour du rectangle