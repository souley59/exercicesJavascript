let phrase = document.getElementById("lire").innerHTML;
let txt = document.getElementById("cond");


function verif() {

    if (txt.value !== phrase) {
        //alert("recommencez la saisie, vous avez fait une erreur!");
        document.getElementById("reponse").innerHTML = "recommencez la saisie, vous avez fait une erreur!";
    } else {
        // alert("Merci, le contrat est validé.");
        document.getElementById("reponse").innerHTML = "Merci, le contrat est validé."
    }
}