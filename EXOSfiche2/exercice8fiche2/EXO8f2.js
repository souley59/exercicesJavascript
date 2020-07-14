$(function() { //methode jquery
    function horloge() {
        let laDate = new Date();

        h = laDate.getHours(); //La méthode getHours () renvoie l'heure (de 0 à 23) de la date et de l'heure spécifiées.
        if (h < 10) {
            h = '0' + h;
        }
        m = laDate.getMinutes(); //La méthode getMinutes () renvoie les minutes (de 0 à 59) de la date et de l'heure spécifiées.
        if (m < 10) {
            m = '0' + m;
        }
        s = laDate.getSeconds(); //La méthode getSeconds () renvoie les secondes (de 0 à 59) de la date et de l'heure spécifiées.
        if (s < 10) {
            s = '0' + s;
        }
        let time = h + ":" + m + ":" + s;
        $('#heure').text(time);
    };
    setInterval(horloge, 1000); // milliseconde


});

$(function date() {
    let date = new Date();

    let annee = date.getFullYear();
    let jour = date.getDate();
    let mois = date.getMonth() + 1; // get.Month affiche les mois de 0 à 11 d'ou le +1.

    let dateDuJour = "Aujourd'hui nous sommes le " + jour + "/" + mois + "/" + annee + ", il est:";
    $('#date').text(dateDuJour);

});