let numbers: string[] = ["10", "5", "20", "8", "3"];

let sum: number = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
};

console.log(numbers);
console.log(sum);