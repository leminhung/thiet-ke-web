const inputElement = document.querySelector(".input > input");
const btnElement = document.querySelector("button");
const resElement = document.querySelector(".res > input");

btnElement.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputElement.value < 1) {
    alert("Nhap so nguyen n > 0");
  } else calculate(inputElement.value);
});

const calculate = (value) => {
  let ans = 0,
    j = 2,
    cnt = 0;
  while (true) {
    for (var i = 2; i < j; i++) {
      if (j % i == 0) break;
    }
    if (i === j) {
      ans += i;
      cnt++;
    }
    if (cnt == value) {
      resElement.value = ans;
      break;
    }
    j++;
  }
};
