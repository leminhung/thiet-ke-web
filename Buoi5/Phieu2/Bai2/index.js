const element = document.querySelector(".result");

const display = (val) => {
  element.value += val;
};

const solution = () => {
  const text = element.value;
  const result = eval(text);
  element.value = result;
};
