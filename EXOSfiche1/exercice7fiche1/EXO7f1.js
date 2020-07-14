function generateur(min, max) {
    var nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
}

function essai() {
    let show = generateur(0, 999);
    //alert("le nombre généré est: " + show);
    document.getElementById("saisie").value = show;

    var cpt = 0; //  compteur du nombre de coups
    var saisie;
    var msg = 'Le nombre à deviner est compris entre 0 et 999.';

    do {
        saisie = prompt(msg);
        cpt++;
        // message a afficher au prochain tour :
        if (saisie > show)
            msg = "C'est moins";
        else
            msg = "C'est plus";
    }
    while (saisie != show);

    alert("Bravo, tu as gagne en " + cpt + " coups !");

}







/*
prompt('proposer les quatres nombres du tableau! ');


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Entrez votre premier chiffre: ', (answer1) => {
  rl.question('Entrez votre deuxieme chiffre: ', (answer2) => {
    rl.question('Entrez votre troisieme chiffre: ', (answer3) => {
      rl.question('Entrez votre quatrieme chiffre: ', (answer4) => {
        let un = answer1;
        let deux = answer2;
        let trois = answer3;
        let quatre = answer4;
        let proposition = [un, deux, trois, quatre]

        prompt(" votre proposition est : ");
        prompt(proposition);
        function valeursExist(proposition) {
          
        }*/