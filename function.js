const prompt = require('readline-sync')

function adding(num1, num2) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    sum = num1 + num2;
    return sum;
}

let num1 =  prompt.question('Num1 = ')
let num2 =  prompt.question('Num2 = ')

sum = adding(num1, num2)
console.log("Normal sum = " + sum)

// arrow function

let arrow = (num1,num2) => num1 = parseFloat(num1) + parseFloat(num2)
console.log("Arrow function sum = " + arrow(num1,num2))


