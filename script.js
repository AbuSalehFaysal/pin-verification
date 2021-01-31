let generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", function () {
    document.getElementById("generate-field").value = getPin();
});

function getPin() {
    let randomNumber = Math.floor((Math.random() * 9999) + 999);
    randomNumber = String(randomNumber);
    randomNumber = randomNumber.substring(0, 4);
    return randomNumber;
}

let buttonValue = document.getElementById("button-value");
buttonValue.addEventListener("click", function(event){
    let digit = event.target.innerText;
    if (isNaN(digit)) {
        
    } else {
        // console.log(digit);
        let inputPin = document.getElementById("input-pin");
        inputPin.value = inputPin.value+digit;
    }
});

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
    document.getElementById("input-pin").value = '';
});

function verifyPin(){
    let pin = document.getElementById("generate-field").value;
    let inputPin = document.getElementById("input-pin").value;
    if (pin === inputPin) {
        document.getElementById("pinSuccess").style.display = 'block';
        document.getElementById("pinFailed").style.display = 'none';
    } else {
        document.getElementById("pinFailed").style.display = 'block';
        document.getElementById("pinSuccess").style.display = 'none';
    }
}