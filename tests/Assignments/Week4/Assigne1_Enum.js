/*Assignment Details:
Create a TypeScript program that defines an enum for different application environments and
 a function to simulate running tests on these environments.
Assignment Requirements:
1. Create an enum named `Environment` with four values representing different stages of
a software development process: `LOCAL`, `DEVELOPMENT`, `STAGING`, `PRODUCTION`.
2. Write a function named `runTests` that accepts an argument of type `Environment`.
 The function should print a message indicating the environment against which the tests are running.
3. The function `runTests` should be specified to return `void`,
 highlighting that it does not return any data.
4. Include example calls to `runTests` using different enum values to demonstrate
 the function's functionality.*/
var Environment;
(function (Environment) {
    Environment["LOCAL"] = "Local Environment";
    Environment["DEVELOPMENT"] = "Development Environment";
    Environment["STAGING"] = "Staging Environment";
    Environment["PRODUCTION"] = "Production Environment";
})(Environment || (Environment = {}));
function runTests(env) {
    console.log("Running tests on: ".concat(env));
}
// Example calls to runTests function
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);
