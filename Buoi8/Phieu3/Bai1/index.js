const divElement = document.querySelector(".result");
let a = "abcxyz";
let b = "axbycz";

const p = a.split("").sort();
const q = b.split("").sort();

let check = 1;
for (let i = 0; i < p.length; i++) {
  if (p[i] !== q[i]) {
    check = 0;
    break;
  }
}

if (check) {
  divElement.innerHTML = `Chuỗi a: ${b} có thể sắp xếp được thành b: ${a}`;
} else
  divElement.innerHTML = `Chuỗi a: ${b} không thể sắp xếp được thành b: ${a}`;
