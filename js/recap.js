// 1. let and const 
const hubby = 'Omor Sani';
let phone = 'iphone 15';
phone = 'Sansung Galaxy S17';

// 2. defanlt parameter
function maxNumber(array = [777]) {
    const max = Math.max(...array);
    return max;
};
const biggest = maxNumber();

// 3. template atring
const myNotes = `I am mojnu of ${hubby}.laili`;

// 4. arrow function
const square = x => x + x;
console.log(square(2));
