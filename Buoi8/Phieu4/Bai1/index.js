const ulElement = document.querySelector(".result");
const a = [4, 1, 2, 3, 1, 4, 2, 2, 1, 9, 9, 9, 9],
  c = [];
const size = a.length;
let ans = 1,
  max = 0;
var check = new Array(size).fill(false);
for (let i = 0; i < size; i++) {
  for (let j = i + 1; j < size; j++) {
    if (check[j] == false && a[j] == a[i]) {
      ans++;
      check[j] = true;
    }
  }
  if (!check[i]) {
    c[a[i]] = ans;
    if (ans > max) max = ans;
  }
  ans = 1;
}

for (let i = 0; i < c.length; i++) {
  if (c[i] === max) {
    const child = document.createElement("li");
    child.innerHTML = `${i} (${max} times)`;
    ulElement.appendChild(child);
  }
}
