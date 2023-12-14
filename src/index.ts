const button: HTMLElement = document.querySelector(".button");
const number1 = document.getElementById("first-input") as HTMLInputElement;
const number2 = document.getElementById("second-input") as HTMLInputElement;

button.addEventListener("click", () => {
  const sum = calculateNumbers(number1.value, number2.value);
  document.querySelector(".screens").innerHTML = sum.toString();
});

function calculateNumbers(num1, num2) {
  return Number(num1) + Number(num2);
}
