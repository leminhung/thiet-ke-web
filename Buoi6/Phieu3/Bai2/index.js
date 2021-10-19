const resultElement = document.querySelector(".result");
const btnElement = document.querySelector("button");
const inputElement = document.querySelector("input");

btnElement.addEventListener("click", (e) => {
  e.preventDefault();
  const value = inputElement.value.trim();
  const test = isNumeric(value);
  if (value) {
    if (test && value < 11 && value > 0) {
      resultElement.textContent = "Dữ liệu hợp lệ";
    } else resultElement.textContent = "Dữ liệu không hợp lệ";
  } else {
    alert("Input something to check");
  }
});

function isNumeric(n) {
  return isFinite(n);
}
