const inputElement = document.querySelector(".age");
const resultElement = document.querySelector(".result");
const btnElement = document.querySelector(".btn");
const can = [
  "Canh",
  "Tân",
  "Nhâm",
  "Quí",
  "Giáp",
  "Ất",
  "Bính",
  "Đinh",
  "Mậu",
  "Kỷ",
];
const chi = [
  "Thân",
  "Dậu",
  "Tuất",
  "Hợi",
  "Tý",
  "Sửu",
  "Dần",
  "Mão",
  "Thìn",
  "Tỵ",
  "Ngọ",
  "Mùi",
];

btnElement.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("le minh hung");
  const year = 2021 - inputElement.value;
  let d = year % 10;
  let a = year % 12;
  let result = can[d] + " " + chi[a];
  resultElement.value = result;
});
