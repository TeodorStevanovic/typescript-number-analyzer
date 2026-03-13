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
let analysis = {
    "Numbers Sum": sum,
    "Numbers Max Number": max,
    "Numbers Min Number": min,
    "Numbers Average": average,
    "Double Numbers": doubleNum,
    "Big Numbers Sum": bigNumbersSum,
};
console.log("Analysis ", analysis);
//# sourceMappingURL=index.js.map