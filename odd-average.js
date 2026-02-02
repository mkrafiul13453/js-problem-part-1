function oddAverage(numbers) {
    let sum = 0;
    let count = 0;

    for (let number of numbers) {
        if (number % 2 === 1) {
            sum += number;   
            count++;        
        }
    }

    let average = sum / count;

    return { summation: sum,
             averageIt: average
             };
}

const numbers = [12, 13, 14, 15, 16];
const result = oddAverage(numbers);

console.log("Odd numbers sum:", result.summation);
console.log("Odd numbers average:", result.averageIt);