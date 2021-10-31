const divElement = document.querySelector(".result");
const name = "Le Minh Hung h h a a aa";
const regexH = /h/g;
const regexA = /a/g;

const numberOfA = name.match(regexA).length,
  numberOfH = name.match(regexH).length;
if (numberOfA == numberOfH) {
  divElement.innerHTML = `Chuỗi "${name}" có a xuất hiện ${numberOfA} lần và h xuất hiện ${numberOfH} lần vậy số lượng bằng nhau`;
} else {
  divElement.innerHTML = `Chuỗi "${name}" có a xuất hiện ${numberOfA} lần và h xuất hiện ${numberOfH} lần vậy số lượng không bằng nhau`;
}
