
function deleteRow(r) {
    var result = confirm("Are you sure to delete this book?");
    if (result) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("mytable").deleteRow(i);
    }
}

var color = $(".status").css("background-color");

$(document).ready(function() {
    $(".status").click(function() {

        if(color === "#FFD700") {
            $(this).css("background-color","#008000");
        }
        else if (color === "#008000") {
            $(this).css("background-color","#FFD700");
            console.log(color);
        }       
    })
    
}) 

var table = getElementById("mytable");
var i = 1 ;

function addNewRow() {
    i++;
    var newRow = table.insertRow(i);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);

    cell1.innerHTML = "#" + i;
    cell2.innerHTML = getElementById("genre").value;
    cell3.innerHTML = getElementById("title").value;
    cell4.innerHTML = getElementById("author").value;
    cell5.innerHTML = getElementById("pages").value;
    cell6.innerHTML = "Button";
    cell7.innerHTML = "Delete";

}

