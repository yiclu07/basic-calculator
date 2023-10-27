let evalString = "";
const userInput = document.getElementsByClassName("userInput")[0];
const calculateBtn = document.getElementsByClassName("calculate-btn")[0];

/* regex is set up to look for any character that is not 0-9 or [÷+-×./*] */
const mathRegex = /[^\d÷+\-×\.\*\/]|[÷+\-×\.\*\/][÷+\-×\.\*\/]+/;

/* handles */
const handleChange = (e) => {
  console.log(`typeof e.target.value: ${typeof e.target.value}`);
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

userInput.addEventListener("input", handleChange);
userInput.addEventListener("keypress", handleEnterPress);
calculateBtn.addEventListener("click", handleCalculate);
