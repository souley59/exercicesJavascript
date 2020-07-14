/* function test() {
    document.getElementsByTagName("SPAN")[0].innerHTML = "Paris";
}

function test2() {
    document.getElementsByTagName("SPAN")[1].innerHTML = "Rome";
}

function test3() {
    document.getElementsByTagName("SPAN")[2].innerHTML = "New-York";
}

function test4() {
    document.getElementsByTagName("SPAN")[3].innerHTML = "Berlin";
}

function test5() {
    document.getElementsByTagName("SPAN")[4].innerHTML = "Séoul";
}*/


function test() {
    let strP = document.getElementById("p").innerHTML;
    let resP = strP.replace("********", "Paris");
    document.getElementById("p").innerHTML = resP;
}

function test2() {
    let strR = document.getElementById("r").innerHTML;
    let resR = strR.replace("********", "Rome");
    document.getElementById("r").innerHTML = resR;
}

function test3() {
    let strN = document.getElementById("n").innerHTML;
    let resN = strN.replace("********", "New-york");
    document.getElementById("n").innerHTML = resN;
}

function test4() {
    let strB = document.getElementById("b").innerHTML;
    let resB = strB.replace("********", "Rome");
    document.getElementById("b").innerHTML = resB;
}

function test5() {
    let strS = document.getElementById("s").innerHTML;
    let resS = strS.replace("********", "Séoul");
    document.getElementById("s").innerHTML = resS;
}