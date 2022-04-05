/*
    Algebra solver for ax^2 + bx + c equations.

    Syntax: +ax^2 + bx + c

    Don't forget to type the positive or negative sign
                (even at the beginning).
*/


const { Equation } = require('./equation');

let eq = new Equation('+24 + x^2 + 11x');
console.log(eq.complete());