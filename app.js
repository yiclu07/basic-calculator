let evalString = "";
const userInput = document.getElementsByClassName("userInput")[0];
const calculateBtn = document.getElementsByClassName("calculate-btn")[0];
const buttonPadItems = document.getElementsByClassName("button-pad");
const clearBtn = document.getElementsByClassName("clear-btn")[0];

/* regex is set up to look for any character that is not 0-9 or [÷+-×./*] */
const mathRegex = /[^\d÷+\-×\.\*\/]|[÷+\-×\.\*\/][÷+\-×\.\*\/]+/;

/* handles */
const handleChange = (e) => {
  if (mathRegex.test(e.target.value)) {
    userInput.value = evalString;
  } else {
    // let tempString = e.target.value.replaceAll("*", "×").replaceAll("/", "÷");
    userInput.value = e.target.value.replaceAll("*", "×").replaceAll("/", "÷");
    evalString = userInput.value;
  }
};

const handleCalculate = (e) => {
  if (evalString) {
    userInput.value = calculate();
    evalString = userInput.value;
  }
};

const calculate = () => {
  const result = eval(evalString.replaceAll("×", "*").replaceAll("÷", "/"));
  return result;
};

const handleEnterPress = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    calculateBtn.click();
  }
};

const handleButtonPadClick = (e) => {
  if (mathRegex.test(userInput.value + e.target.value)) {
    return;
  } else {
    userInput.value = userInput.value + e.target.value;
    evalString = userInput.value;
  }
};

const handleAllClearClick = (e) => {
  userInput.value = "";
  evalString = userInput.value;
};

userInput.addEventListener("input", handleChange);
userInput.addEventListener("keypress", handleEnterPress);
calculateBtn.addEventListener("click", handleCalculate);
clearBtn.addEventListener("click", handleAllClearClick);

for (let item of buttonPadItems) {
  item.addEventListener("click", handleButtonPadClick);
}
