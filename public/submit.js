'use strict'
//initialize a list to store items
let itemList = [];
let uploadJson = {
    items: itemList,
    name: "",
    phone: "",
    email: ""
};

$(document).ready(function () {
    add();
    finish();
});


/**
 * when "add description" button is clicked
 * add an item to the list  
 * 
 * then clear all the information in all text box
 */
let addButton;
function add() {
    addButton = document.getElementById("addDescription");
    if (addButton) {
        addButton.addEventListener("click", function () {
            let itemInfo = document.getElementsByClassName("itemInfo");
            let file = itemInfo[3];
            //check if there is a file uploaded
            if (file.isDefaultNamespace.length == 0) {
                file = "";
            }
            //create a json to store information of each item
            let item = {
                name: itemInfo[0].value,
                description: itemInfo[1].value,
                url: itemInfo[2].value,
                picture: itemInfo[3].value,
                oriPrice: itemInfo[4].value,
                salePrice: itemInfo[5].value
            }
            itemList.push(item);
            alert("Item add to the list");
        });
    }
}



/**
 * when "finish" button is clicked
 * upload all items in the itemList to the server
 */
let finishButton;
function finish() {
    finishButton = document.getElementById("finish");
    if (finishButton) {
        finishButton.addEventListener("click", function () {
            const request = new XMLHttpRequest();
            const url = "http://localhost:8080/generatePDF";
            request.open("POST", url, true);
            request.setRequestHeader("Content-type", "application/json");
            let data = JSON.stringify(uploadJson);
            request.send(data);

            //
        });
    }


}
