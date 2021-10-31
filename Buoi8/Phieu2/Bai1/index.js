const divElement = document.querySelector(".result");
const color = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow ",
];
const name = ["th", "st", "nd", "rd"];
const item = document.createElement("div");
for (let i = 0; i < color.length; i++) {
  let index = i + 1;
  if (index >= name.length)
    console.log(`${index}${name[0]} choice is ${color[i]}`);
  else console.log(`${index}${name[index]} choice is ${color[i]}`);
}
