/*2. data ["chrome",true,132.8]
add index 5 -> webkit
pop->
use push -> firefox
use shift ->
use for..of to print values*/
let data = ["chrome", true, 132.8];
data[5] = "webkit";
data.pop();
data.push("firefox");
data.shift();   
for (let value of data) {
    console.log(value);
}
console.log("------------");
console.log("First element:", data[0]);
console.log("Length of array:", data.length);
console.log("Final array:", data);

