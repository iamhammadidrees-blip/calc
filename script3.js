// Wait for the DOM to be ready

document.addEventListener("DOMContentLoaded", () => {

  // Grab the OK button and wire up the click handler

  const okBtn = document.getElementById("okButton");
  okBtn.addEventListener("click", calculate);

// Grab the Clear button
  const clearButton = document.getElementById("clearButton");
  clearButton.addEventListener("click", () => {
    // Get DOM elements here
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const resultEl = document.getElementById("result");

    // Reset values
    num1.value = '';
    num2.value = '';
    document.getElementById("operator").value = '+';
    resultEl.textContent = 'Result :';
 
 });
});



function calculate() {
  // 1. Read and parse the two inputs
  const input1 = document.getElementById("num1").value;
  const input2 = document.getElementById("num2").value;
  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);

  // 2. Validate numeric inputs
  if (isNaN(num1) || isNaN(num2)) {
    console.error("Both inputs must be valid numbers.");
    return;
  }

  // 3. Read the selected operator
  const operator = document.getElementById("operator").value;

  // 4. Perform calculation
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      // guard division by zero
      if (num2 === 0) {
        console.error("Cannot divide by zero.");
        return;
      }
      result = num1 / num2;
      break;
    default:
      console.log.error("Unsupported operator:", operator);
      return;
  }

  // 5. Log the full operation and result
   const resultEl = document.getElementById('result');
resultEl.textContent = `${num1} ${operator} ${num2} = ${result}`;

}