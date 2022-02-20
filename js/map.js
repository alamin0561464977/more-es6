const numbers = [4, 6, 8, 10];
const output2 = [];
for (const number of numbers) {
    const result = number * 2;
    output2.push(result);
}
// console.log(output2);

const y = (x => x * 2);

const output = numbers.map(y);
console.log(output);
