let evalString = "";
const userInput = document.getElementsByClassName("userInput")[0];
const calculateBtn = document.getElementsByClassName("calculate-btn")[0];

/* regex is set up to look for any character that is not 0-9 or [÷+-×.] */
const mathRegex = /[^\d÷+\-×\.]|[÷+\-×\.][÷+\-×\.]+/;

const handleChange = (e) => {
  console.log(`typeof e.target.value: ${typeof e.target.value}`);
  if (mathRegex.test(e.target.value)) {
    console.log("if running");
    console.log(`userInput.value: ${userInput.value}`);
    console.log(`e.target.value: ${e.target.value}`);
    userInput.value = evalString;
  } else {
    console.log("else running");
    console.log(`userInput.value: ${userInput.value}`);
    console.log(`e.target.value: ${e.target.value}`);
    userInput.value = e.target.value;
    evalString = e.target.value;
  }
  console.log("handleChange is running");
};

const handleCalculate = (e) => {
  if (evalString) {
    userInput.value = calculate();
  }
};

const calculate = () => {
  const result = eval(evalString);
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
