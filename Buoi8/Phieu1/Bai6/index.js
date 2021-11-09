const divElement = document.querySelector(".result");
const str = "a Javagg that vi dieu";
const reg = /\bJava/;

const test = reg.test(str);
if (test && str.indexOf("Java") == 0) {
  divElement.innerHTML = "Chuỗi bắt đầu bằng Java";
} else divElement.innerHTML = "Chuỗi không bắt đầu bằng Java";
