let activitySelect = document.getElementById("activitySelect");
let txtInput = document.getElementById("note");
let container = document.getElementById("todo");
let submit = document.getElementById("valider");
let reset = document.getElementById("reset");
let resetAll = document.getElementById("resetAll");

function main() {
    //create div 
    let div = document.createElement("DIV");
    div.className = "container-todo"
    container.appendChild(div);
    // create h3
    let title = document.createElement("H3");
    div.appendChild(title)
        // write into h3
    let titleValue = document.createTextNode(activitySelect.value);
    title.appendChild(titleValue);
    // create p
    let para = document.createElement("P");
    div.appendChild(para)
        //write into p
    let paraValue = document.createTextNode(txtInput.value);
    para.appendChild(paraValue);
    //create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "chek";
    div.appendChild(checkbox);
}

submit.addEventListener("click", main);


////////////////////////////SUPRILMER LA SELECTION ////////
function removeItem() {
    let array = document.querySelectorAll(".chek");
    let arrayDiv = document.querySelectorAll(".container-todo");

    for (let i = 0; i < array.length; i++) {
        if (array[i].checked) {
            arrayDiv[i].remove();
        }
    }
}

reset.addEventListener("click", removeItem);

/////////////// TOUS SUPRILMER //////////
function removeAll() {
    let arrayDiv = document.querySelectorAll(".container-todo");

    for (let i = 0; i < arrayDiv.length; i++) {
        arrayDiv[i].remove();
    }
}
resetAll.addEventListener("click", removeAll);

/*
 let taskTable = [];
let ajoutList = document.getElementById("todo");
let ecrireList = document.getElementById("note");

function insertList() {
    ajoutList.innerHTML = "";
    taskTable.push(ecrireList.value);


    for (let i = 0; i < taskTable.length; i++) {

        let saisie = document.createElement("div");
        let activitee = document.createElement("li");
        let input = document.createElement("input");
        let selectionRetour = document.createElement("h3");
        let selection = document.getElementById("activitySelect");
       

        //selectionRetour.innerHTML = $("#activitySelect :selected").val();
        saisie.appendChild(selectionRetour);
        saisie.appendChild(activitee);
        saisie.appendChild(input);
        ajoutList.appendChild(saisie);
        //input.onclick = resetSelection;
        input.type = "checkbox";
        input.className = "chek";
        saisie.className = "memo";
        activitee.append(" " + taskTable[i]); 

    }
    //ajoutList.innerHTML = "";
}

function resetSelection() {
    var chekk = document.getElementsByTagName("chek").checked;
    var c = document.div.childNodes;
    if (chekk = true) {
        $("div").remove(c);

    }

}

function resetAll() {
    $("div").remove(".memo").value;
    //  $("#todo").empty();

} */