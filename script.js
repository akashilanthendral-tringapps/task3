var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["dept"] = document.getElementById("dept").value;
    formData["college"] = document.getElementById("college").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("studentData").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.firstName;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.lastName;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.dept;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.college;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('firstName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('lastName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('dept').value = selectedRow.cells[2].innerHTML;
    document.getElementById('college').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('studentData').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('dept').value = '';
    document.getElementById('college').value = '';
}