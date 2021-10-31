const divElement = document.querySelector(".result");
const name = "Le Minh Hung  hh h a a aa";
const regex = /([a-z]+)|([A-Z]+)/g;

const convert = (name) => {
  return name.replace(regex, (match, substring) => {
    return substring ? match.toUpperCase() : match.toLowerCase();
  });
};

const result = convert(name);
const div = document.createElement("div");
div.innerHTML = `Convert ${name} <br> to </br> ${result}`;
divElement.appendChild(div);
