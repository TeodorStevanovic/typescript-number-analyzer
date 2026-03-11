let numbers: string[] = ["10", "5", "20", "8", "3"];
let numbersConverted: number[] = [];

let sum: number = 0;


for (let i = 0; i < numbers.length; i++) {
    let number = Number(numbers[i])
    numbersConverted.push(number);
    sum += number;
};

let average: number = sum / numbersConverted.length;

console.log(numbers);
console.log("Numbers: ", numbersConverted);
console.log("Sum: ", sum);
console.log("Average: ", average);