function calculate() {
    var totalAmount = document.getElementById("amount").value;
    var rateService = document.getElementById("exampleFormControlSelect1").value;
    var numPeople = document.getElementById("people").value;

    if (totalAmount == "") {
        alert("Please, enter an amount");
    } else if (numPeople == "") {
        alert("Please enter a number of people");
    } else if (isNaN(rateService) == true) {
        alert("Please choose a tips percentage!");
    } else {
        var tips = totalAmount*rateService/numPeople;
        document.getElementById("answer").innerHTML = `${tips.toFixed(1)}$`;
    }    
}



