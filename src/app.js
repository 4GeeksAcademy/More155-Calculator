import "bootstrap";
import "./style.css";

window.onload = function () {
  const screen = document.getElementById('display');
  let firstNumber = 0;
  let currentOperation = '';

  function add(value) {
    if (screen.value === '0' || screen.value === 'Error') {
      screen.value = value;
    } else {
      screen.value += value;
    }
  }

  function divide() {
    firstNumber = parseFloat(screen.value) || 0;
    currentOperation = 'divide';
    screen.value = '0';
  }

  function multiply() {
    firstNumber = parseFloat(screen.value) || 0;
    currentOperation = 'multiply';
    screen.value = '0';
  }

  function substract() {
    firstNumber = parseFloat(screen.value) || 0;
    currentOperation = 'subtract';
    screen.value = '0';
  }

  function summarize() {
    firstNumber = parseFloat(screen.value) || 0;
    currentOperation = 'add';
    screen.value = '0';
  }

  function equals() {
    if (!currentOperation) return;

    const secondNumber = parseFloat(screen.value) || 0;
    let result = 0;

    if (currentOperation === 'add') result = firstNumber + secondNumber;
    if (currentOperation === 'subtract') result = firstNumber - secondNumber;
    if (currentOperation === 'multiply') result = firstNumber * secondNumber;
    if (currentOperation === 'divide') {
      if (secondNumber === 0) {
        screen.value = 'Error';
        currentOperation = '';
        return;
      }
      result = firstNumber / secondNumber;
    }

    screen.value = result;
    currentOperation = '';
  }

  function clearAll() {
    screen.value = '0';
    firstNumber = 0;
    currentOperation = '';
  }

  function deleteLast() {
    if (screen.value.length > 1) {
      screen.value = screen.value.slice(0, -1);
    } else {
      screen.value = '0';
    }
  }

  window.add = add;
  window.divide = divide;
  window.multiply = multiply;
  window.substract = substract;
  window.summarize = summarize;
  window.equals = equals;
  window.clearAll = clearAll;
  window.deleteLast = deleteLast;
};