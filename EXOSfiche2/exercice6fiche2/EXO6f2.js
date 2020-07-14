let tableau = document.createElement("table");
let rowTitre = document.createElement("tr");
let cellA = document.createElement("td");
let cellB = document.createElement("td");
let cellC = document.createElement("td");
let cellD = document.createElement("td");

cellA.innerHTML = "N° Client";
cellB.innerHTML = " Nom";
cellC.innerHTML = " Prenom";
cellD.innerHTML = "Mail";

rowTitre.appendChild(cellA);
rowTitre.appendChild(cellB);
rowTitre.appendChild(cellC);
rowTitre.appendChild(cellD);

tableau.appendChild(rowTitre);
let i = 0;

function newClient() {
    const NOM = document.getElementById("Nom").value;
    const PRENOM = document.getElementById("Prenom").value;
    const MAIL = document.getElementById("Mail").value;

    const body = document.getElementsByTagName("body")[0];

    i++;
    let row = document.createElement("tr");

    let cell0 = document.createElement("td");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cellText = document.createTextNode("Client N° " + i);



    cell0.appendChild(cellText);

    cell1.innerHTML = NOM;
    cell2.innerHTML = PRENOM;
    cell3.innerHTML = MAIL;

    row.appendChild(cell0);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    tableau.appendChild(row);

    body.appendChild(tableau);
    //tableau.setAttribute("border", "2");


    $("td").css("background-color", "yellow");
    $("td").css("width", "120px");


    // let formu = document.forms[0].innerHTML;

}