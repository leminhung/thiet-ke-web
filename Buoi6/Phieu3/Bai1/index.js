const element = document.querySelector(".result");
const aElement = document.querySelector(".a");
const bElement = document.querySelector(".b");
const cElement = document.querySelector(".c");
const aaElement = document.querySelector(".aa");
const bbElement = document.querySelector(".bb");
const ccElement = document.querySelector(".cc");
const btnElement = document.querySelector(".btn");

btnElement.addEventListener("click", (e) => {
  e.preventDefault();
  const a = aElement.value;
  const b = bElement.value;
  const c = cElement.value;
  const aa = aaElement.value;
  const bb = bbElement.value;
  const cc = ccElement.value;
  const D = a * bb - b * aa,
    Dx = c * bb - b * cc,
    Dy = a * cc - aa * c;
  solution(D, Dx, Dy);
});

const solution = (D, Dx, Dy) => {
  console.log({ D, Dx, Dy });
  if (D == 0) {
    if (Dx + Dy == 0) alert("Hệ phương trình có vô số nghiệm");
    else alert("Hệ phương trình vô nghiệm");
  } else if (D != 0) {
    const x = Dx / D;
    const y = Dy / D;
    element.innerHTML = `HPT co nghiem duy nhat x = ${x} y=${y}`;
  }
};
