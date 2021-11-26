
var addInp = document.getElementById("AddBook");
var UrlInp = document.getElementById("URLbook");
var BookContainer = [];

if(localStorage.getItem("BookMarks") != null){
    BookContainer= JSON.parse( localStorage.getItem("BookMarks") );
    DisplayBooks()
}

function AddBook() {

    var content = {
        name: addInp.value,
        url: UrlInp.value,
    }

    BookContainer.push(content);
    localStorage.setItem("BookMarks", JSON.stringify(BookContainer));
    DisplayBooks();
    ClearData();
}

function DisplayBooks() {
    var data = ``;

    for (var i = 0; i < BookContainer.length; i++) {

        data += `<div class="d-flex justify-content-between">

            <p class="text-danger fs-3">${BookContainer[i].name}</p>
            <div>
            
            <a href="${BookContainer[i].url}"> <button class="btn btn-info" id="VisitButtom">Visit</button></a>
            <button class="btn btn-info" id="DelButtom" onclick="DeleteItem(${i})">Delete</button>

            </div>

        </div>
            `
    }

    document.getElementById("retreiveData").innerHTML = data;
}

function ClearData() {
    addInp.value = ``;
    UrlInp.value = ``;
}

function DeleteItem(index){

    BookContainer.splice(index , 1);
    localStorage.setItem("BookMarks", JSON.stringify(BookContainer));
    DisplayBooks();

}
