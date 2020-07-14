function E() {
    let e = document.getElementById("euro").value;
    e = parseFloat(e);

    document.getElementById("dollars").value = e * 1.24 + " $";


}

function D() {
    let d = document.getElementById("dollars").value;

    d = parseFloat(d);

    document.getElementById("euro").value = d / 1.24 + " €";
}