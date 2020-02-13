// acquire document elements
var mealTotalInput = document.getElementById("mealTotal");
var tipTotalInput = document.getElementById("tipTotalPercent");
var tipTotalDisplay = document.getElementById("tipTotalDisplay");
var taxTotalDisplay = document.getElementById("taxAmount");
var grandTotalDisplay = document.getElementById("grandTotal");
var calculateTotalButton = document.getElementById("calculateTotal").addEventListener("click", () =>{
    
    console.log(mealTotalInput.innerHTML == "");
});

// defines literal constants for string prefixes
var tipTotalDisplayPrefix = "Tip Total: ";
var taxTotalDisplayPrefix = "Tax: ";
var grandTotalDisplayPrefix = "Grand Total: ";

