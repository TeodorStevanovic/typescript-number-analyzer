let numbers: string[] = ["10", "5", "20", "8", "3"];
let bigNumbers: bigint[] = [9007199254740991n, 9007199254740992n, 9007199254740993n];
let numbersConverted: number[] = [];

let bigNumbersSum: bigint = 0n;

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

for (let b = 0; b < bigNumbers.length; b++) {
    bigNumbersSum = bigNumbersSum + bigNumbers[b];
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

let analysis: { sum: number, max: number, min: number, average: number, doubleNum: number[], bigNumbersSum: bigint, } =
{
    sum,
    max,
    min,
    average,
    doubleNum,
    bigNumbersSum,
};


console.log("Analysis ", analysis);