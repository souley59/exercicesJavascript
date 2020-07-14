let text = document.getElementById("texte");
let compteur = document.getElementById("compteur");
let compteurMots = document.getElementById("mots");
let body = document.getElementsByTagName("body")[0];

let depassementMots = document.createElement("li");
let depassementCaracteres = document.createElement("li");

body.appendChild(depassementCaracteres);
body.appendChild(depassementMots);


compteurMots.innerHTML = text.value.split(' ').filter(i => i != "").length; //  ->   /\s+/ expression régulière équivalent à un espace / nombre de mots
$("li").css("color", "red"); /////// alert rouge
compteur.innerHTML = text.value.length; /// nomnbre de caracteres
if (compteur.innerHTML > 100) {

    depassementCaracteres.innerHTML = "Dépassement de caractères autorisés";

} else {
    depassementCaracteres.innerHTML = ""
    depassementMots.innerHTML = "";
}
if (compteurMots.innerHTML > 10) {

    depassementMots.innerHTML = "Dépassement de mots autorisés";

} else {
    depassementCaracteres.innerHTML = "",
        depassementMots.innerHTML = "";
}
/////////////////////////// key up ////////////////////////////////////

$('#texte').keyup(function() {

    compteur.innerHTML = text.value.length; /// nomnbre de caracteres
    compteurMots.innerHTML = text.value.split(' ').filter(i => i != "").length; //  ->   /\s+/ expression régulière équivalent à un espace / nombre de mots

    if (compteur.innerHTML > 100) {

        depassementCaracteres.innerHTML = "Dépassement de caractères autorisés";

    } else if (compteurMots.innerHTML > 11) {

        depassementMots.innerHTML = "Dépassement de mots autorisés";

    } else {
        depassementCaracteres.innerHTML = ""
        depassementMots.innerHTML = "";
    }

});