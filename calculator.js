const display = document.querySelector("#display");
const zero = parseInt("0");
const one = parseInt("1");
const plus = "+";

const displayZero = () => {
  display.textContent = zero;
};

const displayOne = () => {
  display.textContent += one;
};

const displayPlus = () => {
  display.textContent += plus;
};
