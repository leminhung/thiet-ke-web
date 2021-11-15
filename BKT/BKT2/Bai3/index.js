const btnElement = document.querySelector("button");
const check = (n) => {
  let sum = 0; //khai bao biem sum
  for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0) sum += i;
  }
  if (sum == n) return true; // tra ve true
  return false;
};
btnElement.addEventListener("click", (e) => {
  e.preventDefault();
  const numberValue = document.querySelector("input");
  const resultValue = document.querySelector(".address");
  let value = 0;
  const k = parseInt(numberValue.value);
  if (numberValue.value === "") alert("Khong duoc bo trong");
  else {
    for (let i = 1; i <= k; i++) {
      if (check(i)) {
        value += i;
      }
    }
    resultValue.value = value;
  }
});
