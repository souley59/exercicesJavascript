let sp = document.getElementsByTagName("span"); // renvoi une liste des span
let btn_start = document.getElementById("start");
let btn_stop = document.getElementById("stop");
let t;
var ms = 0,
    s = 0,
    mn = 0,
    h = 0;


function start() {
    t = setInterval(update_chrono, 100); // repetion  de la fonction chrono par une cadence de 100 grace à setInterval
    btn_start.disabled = true; // désactive start

}

function update_chrono() { //incrémente le nombre de millisecondes par 1 / 1*cadence = 100 (setInterval)
    ms += 1;

    if (ms == 10) { //si ms=10 / ms*cadence = 1000ms / 1s alors on incrémente le nombre de secondes
        ms = 1;
        s += 1;
    }

    if (s == 60) { //on teste si s=60 pour incrémenter le nombre de minute
        s = 0;
        mn += 1;
    }
    if (mn == 60) {
        mn = 0;
        h += 1;
    }

    sp[0].innerHTML = h + " h";
    sp[1].innerHTML = mn + " min";
    sp[2].innerHTML = s + " s";
    sp[3].innerHTML = ms + " ms";

}


function stop() {
    clearInterval(t); // arret du timer
    btn_start.disabled = false; // activation de start

}

function reset() {
    clearInterval(t); // arret du timer
    btn_start.disabled = false; // activation de start
    ms = 0, s = 0, mn = 0, h = 0; // initialisation zero
    //  accès aux span par leurs indice
    sp[0].innerHTML = h + " h";
    sp[1].innerHTML = mn + " min";
    sp[2].innerHTML = s + " s";
    sp[3].innerHTML = ms + " ms";
}