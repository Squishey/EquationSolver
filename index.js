/*
    Algebra solver for ax^2 + bx + c equations.

    Syntax: +ax^2 + bx + c
    or not ordered equations, WITHOUT = 0 AT THE END.

    Don't forget to type the positive or negative sign
                (even at the beginning).
*/


const { Equation } = require('./equation');

let eq = new Equation('+3 -20x = +10x^2', { fractionate: true });
console.log(eq.complete());
// console.log(eq);