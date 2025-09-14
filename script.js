 // 1. Prompt for the first number
    const input1 = prompt("Enter the first number:");
    const num1 = parseFloat(input1);

    // 2. Prompt for the second number
    const input2 = prompt("Enter the second number:");
    const num2 = parseFloat(input2);

    // 3. Prompt for the operator
    const operator = prompt(
      "Choose an operation:\n" +
      "+ for addition\n" +
      "- for subtraction\n" +
      "* for multiplication\n" +
      "/ for division"
    );

    // 4. Perform the calculation
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
        result = num1 / num2;
        break;
      default:
        console.error("Invalid operator:", operator);
        throw new Error("Operation not supported.");
    }

    // 5. Log the outcome

// … your prompt() + switch() logic here …

// show the result in a dialog
alert(`${num1} ${operator} ${num2} = ${result}`);