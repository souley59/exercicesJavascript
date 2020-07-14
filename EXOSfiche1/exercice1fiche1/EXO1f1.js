///////////////////////changer sa couleur
function changeColor() {
    let color = document.getElementById('colorInputColor').value;

    document.getElementById("image").style.backgroundColor = color;
}

////////////////////////////changer sa taille

function changeDimentionL() {
    let dimention = document.getElementById("largeW").value; //// large = input type range

    document.getElementById("numerique").value = "width = " + dimention + " pixel"; //// numerique = ecran affichage de la valeur range
    let donnee = document.getElementById("numerique");

    document.getElementById("image").style.width = dimention + "px";


}

function changeDimentionH() {
    let dimention = document.getElementById("largeH").value; //// large = input type range

    document.getElementById("numeriqueH").value = "height = " + dimention + " pixel"; //// numerique = ecran affichage de la valeur range
    let donnee = document.getElementById("numeriqueH");

    document.getElementById("image").style.height = dimention + "px";


}
/////////////////////////// deplacer


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("image", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("image");
    ev.target.appendChild(document.getElementById(data));
}

//////////////////////////////////

function changePosition() {
    let H = document.getElementById("horizontal").value;
    document.getElementById("image").style.marginRight = H + "%";
}

function changeVerticalite() {
    let V = document.getElementById("vertical").value;
    document.getElementById("image").style.marginTop = V + "%";
}