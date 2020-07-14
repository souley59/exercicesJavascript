let regions = document.getElementById("region").value;
let HdF = "Haut de France";
let revenus = document.getElementById("revenu").value;
let imp = document.getElementById("impot").value;


function calcul() {
    let R = Number(document.getElementById("revenu").value);
    let C = String(document.getElementById("region").value)

    if (C.substr(0, 2) == 59 || C.substr(0, 2) == 62) {
        document.getElementById("impot").value = R * 0;

    } else {
        document.getElementById("impot").value = R / 2;
    }

}