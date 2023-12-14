const button = document.querySelector(".button");
const number1 = document.getElementById("first-input");
const number2 = document.getElementById("second-input");
button.addEventListener("click", () => {
    const sum = calculateNumbers(number1.value, number2.value);
    document.querySelector(".screens").innerHTML = sum.toString();
});
function calculateNumbers(num1, num2) {
    return Number(num1) + Number(num2);
}
