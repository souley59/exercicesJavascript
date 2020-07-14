let sp = document.getElementsByTagName("span");
var clicks = 0;

function generateur(min, max) { ////// generateur de nombre aleatoire
    let nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
}
let ecranAffichage = generateur(0, 99);

function reset() {
    window.location.reload()

}
document.getElementById("ecran").disabled = "disabled";

document.getElementById("ecran").value = ecranAffichage.style.display = "none";

function clickME() { ///////compteur de coups
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;

    let selection = document.getElementById("niveau").value;
    let level = document.getElementsByTagName("option");
    let reponse = document.getElementById("reponse").value;
    let tentez = document.getElementById("clicks").innerHTML;

    document.getElementById("saisies").innerHTML = document.getElementById("reponse").value

    if (reponse == ecranAffichage) {
        return document.getElementById("ecran").value = "win";
    } else if (tentez == (selection)) {
        document.getElementById("reponse").disabled = "disabled";
        document.getElementById("boutonValider").disabled = "disabled";
        return document.getElementById("ecran").value = "lose" + "(" + ecranAffichage + ")";

    }

    if (reponse != ecranAffichage) {
        return document.getElementById("ecran").value = "try again";

    }
}