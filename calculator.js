// Array to store calculation history
const calculationHistory = [];

// Save calculations
function saveHistory(operation, firstNumber, secondNumber, result) {
    calculationHistory.push({
        operation,
        operands: [firstNumber, secondNumber],
        result
    });
}

function add(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber;
    saveHistory("Addition", firstNumber, secondNumber, result);
    return result;
}

function subtract(firstNumber, secondNumber) {
    const result = firstNumber - secondNumber;
    saveHistory("Subtraction", firstNumber, secondNumber, result);
    return result;
}

function multiply(firstNumber, secondNumber) {
    const result = firstNumber * secondNumber;
    saveHistory("Multiplication", firstNumber, secondNumber, result);
    return result;
}

function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return "Error: Cannot divide by zero";
    }

    const result = firstNumber / secondNumber;
    saveHistory("Division", firstNumber, secondNumber, result);
    return result;
}

function displayHistory() {
    console.log("=== Calculation History ===");

    calculationHistory.forEach((calculation, index) => {
        console.log(
            `${index + 1}. ${calculation.operation}: ${calculation.operands[0]} and ${calculation.operands[1]} = ${calculation.result}`
        );
    });
}

console.log("Addition Result:", add(10, 5));
console.log("Subtraction Result:", subtract(20, 8));
console.log("Multiplication Result:", multiply(4, 6));
console.log("Division Result:", divide(30, 5));

displayHistory();