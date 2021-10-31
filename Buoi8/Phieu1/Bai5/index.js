const divElement = document.querySelector(".result");
const s = "hello world";

const helper = (s) => s.split(" ");
const result = helper(s);
for (var i = 0; i < result.length; i++) {
  let word = result[i].charAt(0).toUpperCase() + result[i].substring(1);
  divElement.innerHTML += word;
}
