function obtenirParametre(sVar) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}


let body = document.getElementsByTagName("body")[0];

let tableau = document.createElement("table");
let rowTitre = document.createElement("tr");
let cellA = document.createElement("td");
let cellB = document.createElement("td");
let cellC = document.createElement("td");
let cellD = document.createElement("td");

cellA.innerHTML = "N° Client";
cellB.innerHTML = "Nom";
cellC.innerHTML = "Prenom";
cellD.innerHTML = "Mail";
rowTitre.appendChild(cellA);
rowTitre.appendChild(cellB);
rowTitre.appendChild(cellC);
rowTitre.appendChild(cellD);

let i = 0;
i++;

let row = document.createElement("tr");
let cell0 = document.createElement("td");
let cell1 = document.createElement("td");
let cell2 = document.createElement("td");
let cell3 = document.createElement("td");
let cellText = document.createTextNode("Client N° " + i);

cell1.innerHTML = obtenirParametre("Nom");
cell2.innerHTML = obtenirParametre("Prenom");
cell3.innerHTML = obtenirParametre("Mail");
cell0.appendChild(cellText);
row.appendChild(cell0);
row.appendChild(cell1);
row.appendChild(cell2);
row.appendChild(cell3);

tableau.appendChild(rowTitre);
tableau.appendChild(row);

body.appendChild(tableau);

//tableau.setAttribute("border", "2");
$("td").css("background-color", "yellow");
$("td").css("width", "120px");