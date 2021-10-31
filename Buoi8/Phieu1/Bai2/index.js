const divElement = document.querySelector(".result");
const a = [
  3,
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  2,
  3,
  "a",
  "a",
  3,
  "a",
  "a",
  2,
  4,
  9,
  3,
];

const size = a.length;
let ans = 1,
  max = 0,
  mark = "";
var check = new Array(size).fill(false);
for (let i = 0; i < size; i++) {
  for (let j = i + 1; j < size; j++) {
    if (check[j] == false && a[j] == a[i]) {
      ans++;
      check[j] = true;
    }
  }
  if (!check[i] && ans >= max) {
    max = ans;
    mark = a[i];
  }
  ans = 1;
}

divElement.innerHTML = `${mark} : ${max} lan`;
