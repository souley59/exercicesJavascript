let S, I, A, P, S2;


function impots() {


    S = Number(document.getElementById("salaire").value);
    I = Number(S * 0.18);
    document.getElementById("impot").value = I;

    A = Number(S * 0.07);
    document.getElementById("assurance").value = A;

    P = Number(S * 0.05);
    document.getElementById("pens").value = P;

    S2 = S - (A + I + P);

    document.getElementById("dedu").value = S2;

}


function impotsuite() {
    let S = Number(document.getElementById("salaire").value);
    let S2 = Number(document.getElementById("dedu").value);
    let select = document.getElementById("genre");
    let V = (select.options[select.selectedIndex].value);


    if (V === "F") {
        V = Number(S * 0.01);

    } else {
        V = Number(S * 0);

    }

    let select2 = document.getElementById("famille");
    let V2 = (select2.options[select2.selectedIndex].value);


    if (V2 === "E3") {
        V2 = Number(S * 0.01);
        document.getElementById("total").value = V2;
    } else {
        V2 = Number(S * 0.02);
        document.getElementById("total").value = V2;
    }
    let select3 = document.getElementById("prime");
    let V3 = (select3.options[select3.selectedIndex].value);


    if (V3 === "cent") {
        V3 = Number(100);

    } else {
        V3 = Number(150);

    }

    document.getElementById("total").value = S2 + V + V2 + V3;


}



//document.getElementById("total").value = select.options[select.selectedIndex].value;