const btnElement = document.querySelector("button");
const check = (n) => {
  var i = 0;
  while (i * i <= n) {
    if (i * i == n) {
      return 1;
    }
    ++i;
  }
  return 0;
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
