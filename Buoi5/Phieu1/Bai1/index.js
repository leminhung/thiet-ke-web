const dayElement = document.querySelector(".day");
const monthElement = document.querySelector(".month");
const yearElement = document.querySelector(".year");

const addItem = (start, end, parent) => {
  for (var i = start; i <= end; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    parent.appendChild(option);
  }
};

addItem(1, 31, dayElement);
addItem(1, 21, monthElement);
addItem(1990, 2021, yearElement);
