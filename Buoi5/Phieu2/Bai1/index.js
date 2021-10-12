const element = document.querySelector(".result");
console.log("[element]", element);

const a = 6,
  b = 4,
  c = 2;
const delta = b * b - 4 * a * c;
console.log("[delta]", delta);
const solution = () => {
  if (delta < 0) {
    element.innerHTML = `Phuong trinh vo nghiem voi a=${a} b=${b} c=${c}`;
  } else if (delta == 0) {
    const x = -b / (2 * a);
    element.innerHTML = `Phuong trinh co nghiem kep ${x}`;
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    element.innerHTML = `Phuong trinh co 2 nghiem la x1 = ${x1} x2=${x2}`;
  }
};

solution();
