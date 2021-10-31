const ulElement = document.querySelector(".result");
const s = "hello world";

const reverse = (s) => s.split("").reverse().join("");
const result = reverse(s);

let li = document.createElement("li");
li.textContent = result;
ulElement.appendChild(li);
