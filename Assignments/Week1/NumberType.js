/*Assignment Requirements:
1. Create a function named that takes a number as a parameter.
2. Declare and initialize the variable.
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0,
and to handle the case when the number is zero.
4. Return the corresponding string value for each case.
5. Call the function and print the result.
*/
function checkNumberType(number){
    if(number>0){   
        return number+" is Positive"
    }else if(number<0){
        return number+" is Negative"
    }else{
        return "The number is Zero"
    }   
}
console.log(checkNumberType(25))
console.log(checkNumberType(-13))
console.log(checkNumberType(0))
console.log(checkNumberType(7.5))
console.log(checkNumberType(-0.8))

//Withou function
let num=0
if(num>0){   
    console.log(num+" is Positive") 
}else if(num<0){
    console.log(num+" is Negative")
}else{
    console.log("The number is Zero")
}       

