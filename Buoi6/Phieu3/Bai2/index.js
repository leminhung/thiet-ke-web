const resultElement = document.querySelector(".result");
const btnElement = document.querySelector("button");
const inputElement = document.querySelector("input");

btnElement.addEventListener("click", (e) => {
  e.preventDefault();
  const value = inputElement.value;
  const test = isNumeric(value);
  if (test) {
    resultElement.textContent = "Dữ liệu hợp lệ";
  } else resultElement.textContent = "Dữ liệu không hợp lệ";
});

function isNumeric(n) {
  return isFinite(n);
}
