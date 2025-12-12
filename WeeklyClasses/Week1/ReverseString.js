let browser="Mozilla Firefox"
let reversedBrowser=""
for(let i=browser.length-1;i>=0;i--){
    reversedBrowser+=browser.charAt(i)
}   
console.log(reversedBrowser)

let m="playwright"
let reversedM=m.split("").reverse().join("")
console.log(reversedM)
