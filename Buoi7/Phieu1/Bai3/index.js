function turn() {
  const imgElement = document.querySelector("img");
  if (imgElement.src.match("pic_bulboff")) {
    imgElement.src = "pic_bulbon.gif";
  } else {
    imgElement.src = "pic_bulboff.gif";
  }
}
