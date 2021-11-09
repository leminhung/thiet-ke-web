const ulElement = document.querySelector(".result");
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
let ans = 1;
var check = new Array(size).fill(false);
for (let i = 0; i < size; i++) {
  for (let j = i + 1; j < size; j++) {
    if (check[j] == false && a[j] == a[i]) {
      ans++;
      check[j] = true;
    }
  }
  if (!check[i] && ans > 1) {
    const child = document.createElement("li");
    child.innerHTML = `${a[i]} (${ans} times)`;
    ulElement.appendChild(child);
  }
  ans = 1;
}
