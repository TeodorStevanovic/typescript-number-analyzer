"use strict";
let numbers = ["10", "5", "20", "8", "3"];
let bigNumbers = [9007199254740991n, 9007199254740992n, 9007199254740993n];
let numbersConverted = [];
let bigNumbersSum = 0n;
let sum = 0;
let max = Number(numbers[0]);
let min = Number(numbers[0]);
let doubleNum = [];
const doubleValueSafe = (value) => {
    if (typeof value === "number") {
        return value * 2;
    }
    return undefined;
};
for (let b = 0; b < bigNumbers.length; b++) {
    bigNumbersSum = bigNumbersSum + bigNumbers[b];
}
;
for (let i = 0; i < numbers.length; i++) {
    let number = Number(numbers[i]);
    numbersConverted.push(number);
    sum += number;
    if (number > max) {
        max = number;
    }
    if (number < min) {
        min = number;
    }
    let result = doubleValueSafe(number);
    if (result !== undefined) {
        doubleNum.push(result);
    }
}
;
let average = sum / numbersConverted.length;
console.log(numbers);
console.log("Numbers: ", numbersConverted);
console.log("Sum: ", sum);
console.log("Average: ", average);
console.log("Max Number: ", max);
console.log("Min Number:", min);
console.log("Double Numbers", doubleNum);
console.log("Big Numbers Sum: ", bigNumbersSum);
//# sourceMappingURL=index.js.map