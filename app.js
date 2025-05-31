
let display = document.getElementById('display');

function appendNumber(num) {
  display.value += num;
}

function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if ("+-*/".includes(lastChar)) {
    display.value = display.value.slice(0, -1);
  }
  display.value += operator;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value).toString();
  } catch (error) {
    display.value = 'Error';
  }
}

function calculatePercent() {
  try {
    display.value = (parseFloat(display.value) / 100).toString();
  } catch {
    display.value = 'Error';
  }
}

function square() {
  try {
    display.value = Math.pow(parseFloat(display.value), 2).toString();
  } catch {
    display.value = 'Error';
  }
}

function squareRoot() {
  try {
    display.value = Math.sqrt(parseFloat(display.value)).toString();
  } catch {
    display.value = 'Error';
  }
}

function reciprocal() {
  try {
    display.value = (1 / parseFloat(display.value)).toString();
  } catch {
    display.value = 'Error';
  }
}

function plusMinus() {
  try {
    display.value = (-parseFloat(display.value)).toString();
  } catch {
    display.value = 'Error';
  }
}