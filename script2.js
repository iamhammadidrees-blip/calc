// Prompt the user until they enter a valid number
function getNumber(message) {
  let value, num;
  do {
    value = prompt(message);
    num = parseFloat(value);
  } while (isNaN(num));
  return num;
}

// Prompt until the user enters a supported operator
function getOperator() {
  const valid = ['+', '-', '*', '/'];
  let op;
  do {
    op = prompt(
      "Choose an operation:\n" +
      "+ for addition\n" +
      "- for subtraction\n" +
      "* for multiplication\n" +
      "/ for division"
    );
  } while (!valid.includes(op));
  return op;
}

// Perform the arithmetic based on operator
function calculate(a, b, op) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
  }
}

// Display the result (you can swap console.log for alert or DOM output)
function displayResult(a, b, op, result) {
  alert(`${a} ${op} ${b} = ${result}`);
}

// Orchestrator: ties all steps together
function main() {
  const num1     = getNumber("Enter the first number:");
  const num2     = getNumber("Enter the second number:");
  const operator = getOperator();
  const result   = calculate(num1, num2, operator);
  displayResult(num1, num2, operator, result);
}

// Kick things off
main();