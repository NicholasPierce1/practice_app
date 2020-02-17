// defines literal constants for string prefixes
var tipTotalDisplayPrefix = "Tip Total: $";
var taxTotalDisplayPrefix = "Tax: $";
var grandTotalDisplayPrefix = "Grand Total: $";

// defines constant, coefficient for tax total
var taxTotalCoeffiecient = .055; // 5.5%

// acquire document elements
var mealTotalInput = document.getElementById("mealTotal");
var tipTotalInput = document.getElementById("tipTotalPercent");
var tipTotalDisplay = document.getElementById("tipTotalDisplay");
var taxTotalDisplay = document.getElementById("taxAmount");
var grandTotalDisplay = document.getElementById("grandTotal");
document.getElementById("calculateTotal").addEventListener("click", async () =>{
    
    // converts inputs to numerical versions
    const mealInput = parseFloat(mealTotalInput.value);
    const tipInput = parseFloat(tipTotalInput.value);
    
    // local memeber to hold grand total and tax total
    
    // tip total (20% -- .2 * subtotal)
    const tipTotal = (tipInput / 100) * mealInput;
    const taxTotal = mealInput * taxTotalCoeffiecient;
    const grandMealTotal = taxTotal + tipTotal + mealInput;
    
    console.log(`mealTotalInput: ${mealTotalInput.value}`);
    console.log(`tip total input: ${tipTotalInput.value}`);
    
    // updates tip total with meal total * tip input / 100
    tipTotalDisplay.innerHTML = `${tipTotalDisplayPrefix} ${Math.round(tipTotal * 100)/100}`;
    
    
    // updates tax total with mealTotal * tax rate
    taxTotalDisplay.innerHTML = `${taxTotalDisplayPrefix} ${Math.round(taxTotal * 100)/100}`;
    
    // updates grand total with meal total
   grandTotalDisplay.innerHTML = `${grandTotalDisplayPrefix} ${Math.round(grandMealTotal * 100)/100}`;
    
});


