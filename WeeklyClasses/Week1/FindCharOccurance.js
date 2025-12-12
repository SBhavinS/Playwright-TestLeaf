let c="character"

let charToFind1='a'
let charCount=0
for(let i=0;i<c.length;i++){
    if(c[i]===charToFind1){
        charCount++
    } 
}  
console.log(charCount)
//or    
let count=0
for(let i=0;i<c.length;i++){
    if(c.charAt(i)==='a'){
        count++
    }   
}
console.log(count)
//or

let charToFind="r"
let count2=0        
for(let i=0;i<c.length;i++){
    if(c[i]===charToFind){
        count2++
    }   
}
console.log(count2)
