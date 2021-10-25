const addElement = document.querySelector(".input > button");
addElement.addEventListener("click", function (e) {
  e.preventDefault();
  const element = document.createElement("li");
  element.innerHTML = ` Enter your email address:
                        <input type="text">
                        <button>Remove</button>`;
  // Add element
  const ulElement = document.querySelector("ul");
  ulElement.appendChild(element);

  // Delete element
  const list = document.querySelectorAll("li > button");
  for (var i = 0; i < list.length; i++) {
    list[i].onclick = function () {
      this.parentNode.remove();
    };
  }
});
