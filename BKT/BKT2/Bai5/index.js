const btnElement = document.querySelector("button");

const splitString = (s) => {
  return s.split(/\s+/).filter((w) => w.trim().length > 0);
};

btnElement.addEventListener("click", (e) => {
  e.preventDefault();
  const stringValue = document.querySelector("input");
  const resultValue = document.querySelector(".address");
  if (stringValue.value === "") alert("Khong duoc bo trong");
  else {
    const resutl = splitString(stringValue.value);
    resultValue.value = resutl.length;
  }
});
