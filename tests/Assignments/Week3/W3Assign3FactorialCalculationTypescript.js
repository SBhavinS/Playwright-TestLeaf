/*Assignment Details:
Create a TypeScript program that defines a function to compute the factorial of a given nonnegative integer using a loop (iterative approach).
Assignment Requirements:
1. Write a function named `factorial` that accepts an argument `n`, which is a non-negative integer,
and returns its factorial.
2. Include a check to ensure that the factorial is not computed for negative numbers. If a negative
number is passed, the function should throw an error.
3. Use a loop to compute the factorial. Initialize a result variable and multiply it by each integer
from 2 up to `n`.
4. Include example calls to the `factorial` function with different integers to demonstrate the
function’s functionality. Include at least one example where an error is thrown due to a negative
input.
*/
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
// Example calls to the factorial function
try {
    console.log("Factorial of 5: ".concat(factorial(5))); // Output: 120
    console.log("Factorial of 0: ".concat(factorial(0))); // Output: 1
    console.log("Factorial of 7: ".concat(factorial(7))); // Output: 5040
    console.log("Factorial of -3: ".concat(factorial(-3))); // This will throw an error
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
// You can run this TypeScript code using a TypeScript compiler or in a TypeScript-enabled environment.
