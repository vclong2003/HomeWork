let firstNumber = document.getElementById("firstNumber");
let lastNumber = document.getElementById("lastNumber");

function checkPrimeNumber(number) {
    for(let i = 2; i < number; i++){
        if(number%i == 0){
            return false;
        }
    }
}

document.getElementById("button").addEventListener("click", function(){
    document.getElementById("kq").innerHTML = "Prime number: ";
    for (let i = firstNumber.value; i <= lastNumber.value; i ++){
        if (checkPrimeNumber(i) != false && i != 2){
            document.getElementById("kq").innerHTML += i + " ";
        }
    }
});