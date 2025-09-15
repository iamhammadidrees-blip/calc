class Calculator {
  constructor(num1El, num2El, operatorEl, resultEl, okBtn, clearBtn) {
    // DOM Elements
    this.num1El = num1El;
    this.num2El = num2El;
    this.operatorEl = operatorEl;
    this.resultEl = resultEl;
    this.okBtn = okBtn;
    this.clearBtn = clearBtn;

    // Bind events
    this.okBtn.addEventListener("click", () => this.calculate());
    this.clearBtn.addEventListener("click", () => this.clear());
  }

  // Clear inputs and reset calculator
  clear() {
    this.num1El.value = "";
    this.num2El.value = "";
    this.operatorEl.value = "+";
    this.resultEl.textContent = "Result :";
  }

  // Perform calculation
  calculate() {
    const num1 = parseFloat(this.num1El.value);
    const num2 = parseFloat(this.num2El.value);
    const operator = this.operatorEl.value;

    // Validation
    if (isNaN(num1) || isNaN(num2)) {
      console.error("Both inputs must be valid numbers.");
      return;
    }

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
        if (num2 === 0) {
          console.error("Cannot divide by zero.");
          return;
        }
        result = num1 / num2;
        break;
      default:
        console.error("Unsupported operator:", operator);
        return;
    }

    this.resultEl.textContent = `${num1} ${operator} ${num2} = ${result}`;
  }
}

// ✅ Initialize after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const num1El = document.getElementById("num1");
  const num2El = document.getElementById("num2");
  const operatorEl = document.getElementById("operator");
  const resultEl = document.getElementById("result");
  const okBtn = document.getElementById("okButton");
  const clearBtn = document.getElementById("clearButton");

  new Calculator(num1El, num2El, operatorEl, resultEl, okBtn, clearBtn);
});

