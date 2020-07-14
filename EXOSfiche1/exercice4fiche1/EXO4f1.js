let C = document.getElementById("Trump");
let R = C.getContext("2d");
R.fillStyle = "rgba(0,0,0,0.9)"; //Définit le style utilisé lors du remplissage de formes.
R.strokeStyle = "rgb(0,0,0.6)"; //Définit le style pour les contours des formes.
R.lineWidth = 0; //largeur de ligne
R.fillRect(10, 10, 350, 350); // dessine un rectangle
R.strokeRect(10, 10, 350, 350); //contour du rectangle


////////////////////////////////////////////////////
let M = document.getElementById('May');
let T = M.getContext('2d');
let centerX = M.width / 2;
let centerY = M.height / 2;
let radius = 60;

T.beginPath();
T.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
T.fillStyle = "rgb(0,0,0.5)";
T.fill();
T.lineWidth = 1;
T.strokeStyle = "rgb(0,0,0.6)";
T.stroke();