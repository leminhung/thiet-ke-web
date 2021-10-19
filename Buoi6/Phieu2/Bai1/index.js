const element = document.querySelector(".result");
const aElement = document.querySelector(".a");
const bElement = document.querySelector(".b");
const cElement = document.querySelector(".c");
const btnElement = document.querySelector(".btn");

btnElement.addEventListener("click", (e) => {
  e.preventDefault();
  const a = aElement.value;
  const b = bElement.value;
  const c = cElement.value;

  const delta = b * b - 4 * a * c;
  solution(delta, a, b, c);
});

const solution = (delta, a, b, c) => {
  if (delta < 0) {
    element.innerHTML = `PT vo nghiem voi a=${a} b=${b} c=${c}`;
  } else if (delta == 0) {
    const x = -b / (2 * a);
    element.innerHTML = `PT co nghiem kep ${x}`;
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    element.innerHTML = `PT co 2 nghiem la x1 = ${x1} x2=${x2}`;
  }
};
