document.write("<center>");
let n;


function go() {
    do {
        n = prompt("sasissez votre nombre entier: ")
    } while (isNaN(n)); // Verif si les données sont numériques

    document.write("<h4>La table de multiplication du nombre: " + n + "</h4>")
    document.write("<table border >");

    for (var i = 1; i <= 10; i++) {
        document.write("<tr>");
        document.write("<td>" + n + " x " + i + " =</td>");
        document.write("<td>" + n * i + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");




}