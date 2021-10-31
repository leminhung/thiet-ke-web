const divElement = document.querySelector(".result");
const a = [3, 4, 5, 6, 7, 8];
const b = [3, 4, 5, 6, 7, 8, 9];
const c = [];
const size = a.length > b.length ? a.length : b.length;
const size1 = a.length < b.length ? a.length : b.length;
for (let i = 0; i < size1; i++) {
  c[i] = a[i] + b[i];
}

for (let i = size1; i < size; i++) {
  if (a.length > b.length) c[i] = a[i];
  else c[i] = b[i];
}

divElement.innerHTML = c;
