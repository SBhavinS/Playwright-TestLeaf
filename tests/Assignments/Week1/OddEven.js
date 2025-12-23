let num=20
even=0
odd=0

for(let i=1;i<=num;i++){
    if(i%2==0){
        console.log(i+" is Even")
        even++
    }else{
        console.log(i+" is Odd")
        odd++
    }       
}
console.log("Total Even Numbers: "+even)
console.log("Total Odd Numbers: "+odd)

/*Assignment Requirements:
1. Create a function named `isOddOrEven` that takes a number as a parameter
2. Declare and initialize the variable
3. Use a conditional statement to check if the number is divisible by 2
4. Call the function and print the result*/
function isOddOrEven(number){
    if(number%2==0){
        return number+" is Even"
    }else{
        return number+" is Odd"
    }   
}
console.log(isOddOrEven(15))
console.log(isOddOrEven(28))
console.log(isOddOrEven(0)) 
console.log(isOddOrEven(-7))
console.log(isOddOrEven(-12))
