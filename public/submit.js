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
        addButton.addEventListener("click", function (e) {
            e.preventDefault();
            let itemInfo = document.getElementsByClassName("itemInfo");
            let file = itemInfo[3];
            //check if there is a file uploaded
            if (file.isDefaultNamespace.length == 0) {
                file = "";
            }
            //create a json to store information of each item
            let item = {
                item: itemInfo[0].value,
                description: itemInfo[1].value,
                url: itemInfo[2].value,
                image: itemInfo[3].value,
                amount: Number(itemInfo[4].value),
                quantity: 1
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
            jQuery.ajax({
                url: "http://localhost:8080/generatePDF",
                type: "POST",
                data: uploadJson,
                dataType: "json",
                beforeSend: function (x) {
                    if (x && x.overrideMimeType) {
                        x.overrideMimeType("application/j-son;charset=UTF-8");
                    }
                },
                success: function (result) {
                    console.log(result)
                }
            });
            alert("PDF created");
        });
    }


}