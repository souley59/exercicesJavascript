function jourDeLaSemaine() {

    //utilistion de la function switch !!!

    let aujourdhui = new Date;
    jour = aujourdhui.getDay(); // (definition w3school) The getDay() method returns the day of the week (from 0 to 6) for the specified date. Note: Sunday is 0, Monday is 1, and so on.

    let jourSemaine;
    switch (jour) { // (definiton w3school) The switch statement executes a block of code depending on different cases. /instruction conditionnelle
        case 0:
            jourSemaine = "dimanche";
            break;
        case 1:
            jourSemaine = "lundi";
            break;
        case 2:
            jourSemaine = "mardi";
            break;
        case 3:
            jourSemaine = "mercredi";
            break;
        case 4:
            jourSemaine = "jeudi";
            break;
        case 5:
            jourSemaine = "vendredi";
            break;
        case 6:
            jourSemaine = "samedi";
            break;
        default: // au cas ou il n'y pas de case. Bien que ce soit facultatif, il est recommandé de l'utiliser, car il prend en charge les cas inattendus. (doc w3school)
            jourSemaine = "jour inexistant";
            break;
    }

    document.getElementById("date").value = jourSemaine;
    //alert("Nous sommes " + jourSemaine + ".");
}