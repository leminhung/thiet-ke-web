const resultElement = document.querySelector(".result > input");
const calElement = document.querySelector(".number2 > input");
let val1 = "",
  symbol = "",
  val2 = "";

const turn = (value) => {
  symbol = value;
};

const turn1 = (value) => {
  val1 += value;
};

const turn2 = (value) => {
  val2 += value;
};

calElement.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    if (symbol === "/" && val2 == 0) alert("Mau so phai khac 0");
    else if (val1 === "" || val2 === "") alert("Khong duoc de trong");
    else {
      const val = val1 + symbol + val2;
      let value = "";
      if (symbol === "^") {
        value = Math.pow(parseInt(val1), parseInt(val2));
      } else value = eval(val);
      resultElement.value = value;
    }
  }
});
