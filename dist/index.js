"use strict";
let numbers = ["10", "5", "20", "8", "3"];
let numbersConverted = [];
let sum = 0;
let max = Number(numbers[0]);
let min = Number(numbers[0]);
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
}
;
let average = sum / numbersConverted.length;
console.log(numbers);
console.log("Numbers: ", numbersConverted);
console.log("Sum: ", sum);
console.log("Average: ", average);
console.log("Max Number: ", max);
console.log("Min Number:", min);
//# sourceMappingURL=index.js.map