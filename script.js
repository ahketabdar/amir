
//listener for button of Create 
let creatButton = document.getElementsByClassName("create");
for(let button of creatButton){
    button.addEventListener("click", creat)
}

function creat(){
    
    let id = document.querySelector(".id").value;
    let name = document.querySelector(".name").value;
    
    //condition of input
    if (isNaN(id)){
        window.alert("Wrong Format!");
    }

    if(!/^[A-Za-z]+$/.test(name)){
        window.alert("Wrong Format!");
    }

    creatRow(id,name);

}

function creatRow(id,name){
        let tbody = document.querySelector("tbody");
        let newRow = tbody.insertRow();
        
        // Insert cells for ID and Name in the new row        
        let checkboxCell = newRow.insertCell();
        let idCell = newRow.insertCell();
        let nameCell = newRow.insertCell();
        

        //create checkbox for Edit
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxCell.appendChild(checkbox);

        // Set the text content of the cells to the input values

        idCell.className = 'id-cell';
        nameCell.className = 'name-cell';
        checkboxCell.className ='checkbox-cell';

        idCell.textContent = id;
        nameCell.textContent = name;

}


function openModal1(){
    var editing = document.getElementById("edit");
    editing.style.display = "block";

    var yesbutton =document.getElementById("yes");
    yesbutton.style.display = "block";
}

function yes() {
    //var checkboxes = document.querySelectorAll(".checkbox");
    var checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    //var checked = false;
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            //checked = true;    
            let row = checkbox.parentNode.parentNode;

            // new variale
            let newIdValue = document.querySelector(".id").value;
            let newNameValue = document.querySelector(".name").value;

            // updating
            let idCell = row.querySelector(".id-cell");
            let nameCell = row.querySelector(".name-cell");

            //assigne
            idCell.textContent = newIdValue;
            nameCell.textContent = newNameValue;

        }
    });
        
}

function openModal(){
    var letRemove = document.getElementById("letRemove");
    letRemove.style.display = "block";

    var removeConfirm = document.getElementById("removeData");
    removeConfirm.style.display ="block";
}

let removeDataButton = document.getElementById("removeData");
removeDataButton.addEventListener("click", function() {
    let idForDelete = document.getElementById("letRemove").value;
    removeItem(idForDelete);
});

function removeItem(idForDelete){

    let rows = document.querySelectorAll("tbody tr");
    let found = false;

    for (let i=0; i<rows.length ;i++){
        if(rows[i].cells[0].textContent === idForDelete) {
            found =true;
            rows[i].remove();
            break;
        }
    }
    if (!found) {
        window.alert("not found");
    }
}

