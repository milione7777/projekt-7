//завдання 1
let a = [35, 48, 29];
a[1] = 10;
console.log(a);

// завдання 2
let s = ["css", "html", "JavaScript"];
s[3] = "Payton";
console.log(s);

//завдання 3
let numbers = [12, 39, 19, 50, 19, 47];
let sum = 0;

for (const number of numbers) {
    sum += number;
}
console.log(sum);

//завдання 4
let array = [23, 49, 50, 48, 38];

for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
}

// завдання 5
let str = ["number", "string", "boolean", "undefined", "null"];
for (let string of str) {
    if (string.length > 5) {
     console.log(string);
    }
}

// завдання 5

const num = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
let maxNumber = num[0];

for (const number of num) {
    if (number> maxNumber) {
        maxNumber = number;
    }
}

console.log(maxNumber);

// завдання 6 

let arrayNumber = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

for (let i = 0; i < arrayNumber.length; i += 1) {
    if (arrayNumber[i] % 2 === 0) {
       console.log(arrayNumber[i]);
    }
    
}