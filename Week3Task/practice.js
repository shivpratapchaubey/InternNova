//program1:logical operator using
let a = 25;
let b = 50;
let c = 35;

if (a >= b && a >= c) {
    console.log("Largest number:", a);
} else if (b >= a && b >= c) {
    console.log("Largest number:", b);
} else {
    console.log("Largest number:", c);
}


// Program 2: Check whether a number is divisible by 5

let number = 25;

if (number % 5 === 0) {
    console.log(number, "is divisible by 5");
} else {
    console.log(number, "is not divisible by 5");
}


// Program 3: Find the sum of even numbers from 1 to 50

let sum = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
}

console.log("Sum of even numbers from 1 to 50:", sum);


// Program 4: Print the multiplication table

let tableNumber = 7;

console.log("Multiplication table of", tableNumber);

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}


// Program 5: Find the factorial of a number

let factorialNumber = 5;
let factorial = 1;

for (let i = 1; i <= factorialNumber; i++) {
    factorial = factorial * i;
}

console.log("Factorial of", factorialNumber, "is:", factorial);