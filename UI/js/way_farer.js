function addRow() {
          
  var orig = document.getElementById("orig");
  var dest = document.getElementById("dest");
  var datee = document.getElementById("datee");
  var table = document.getElementById("customers");

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  
  row.insertCell(0).innerHTML= orig.value;
  row.insertCell(1).innerHTML= dest.value;
  row.insertCell(2).innerHTML= datee.value;
  
  row.insertCell(3).innerHTML= '<input type="button" value = "Cancel" onClick="Javacsript:deleteRow(this)">';
  row.insertCell(4).innerHTML= '<a href="details.html"><input type="button" value = "Details" ></a>';

}

function deleteRow(obj) {
    
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("customers");
  table.deleteRow(index);
  
}
function details(obj) {
    
   var deatail = document.getElementById("detail");
  
  table.deleteRow(index);
  
}



var login_success = false;  /* set this to true if the login was a success */

if(login_success == false)
{
    document.getElementById("login").innerHTML = "Login Failed.";
}
else
{
     window.location = "booking.html";
}




