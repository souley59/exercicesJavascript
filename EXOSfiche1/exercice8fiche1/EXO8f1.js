let tab = [-2, 1, 4];

function additionne(x) {
    return (x + 2);
}

function affiche() {
    document.getElementById("element1").value = additionne(tab[0]);
    document.getElementById("element2").value = additionne(tab[1]);
    document.getElementById("element3").value = additionne(tab[2]);

}