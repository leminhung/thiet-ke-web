const inputElement = document.querySelector("#input");

inputElement.addEventListener("change", () => {
  alert("change");
});

inputElement.addEventListener("focus", () => {
  alert("focus");
});
