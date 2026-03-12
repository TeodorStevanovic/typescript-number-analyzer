let numbers: string[] = ["10", "5", "20", "8", "3"];
let numbersConverted: number[] = [];

let sum: number = 0;
let max: number = Number(numbers[0]);
let min: number = Number(numbers[0]);
let doubleNum: number[] = [];

const doubleValueSafe = (value: unknown) => {
    if (typeof value === "number") {
        return value * 2;
    }
    
    return undefined;
};


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
};

let average: number = sum / numbersConverted.length;

console.log(numbers);
console.log("Numbers: ", numbersConverted);
console.log("Sum: ", sum);
console.log("Average: ", average);
console.log("Max Number: ", max);
console.log("Min Number:", min);
console.log("Double Numbers", doubleNum);