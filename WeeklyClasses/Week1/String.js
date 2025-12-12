let companyName="TechCorp@2025"
let comName= new String("TechCorp")
console.log(companyName)
// console.log("this is test leaf")
// console.log(comName)

//find the lrngth of the string
console.log("Total no. of character:", companyName.length)
//console.log("Length of comName:", comName.length)

console.log("Character at index 5:", companyName.charAt(5))
//console.log("Character at index 3 of comName:", comName.charAt(3))

console.log("Index of character 'C':", companyName.indexOf('C'))
//console.log("Index of character 'o' in comName:", comName.indexOf('o'))

console.log("Substring from index 4 to 10:", companyName.substring(4, 10))
// console.log("Substring from index 2 to 7 of comName:", comName.substring(2, 7))

// console.log("this is test leaf")

console.log("Original companyName:", companyName)
console.log("companyName in uppercase:", companyName.toUpperCase())
console.log("companyName in lowercase:", companyName.toLowerCase())  

// console.log("Original comName:", comName)
// console.log("comName in uppercase:", comName.toUpperCase())
// console.log("comName in lowercase:", comName.toLowerCase())

let val="Happy New Year 2026"
console.log(val.split(" "))
let sp=val.split(" ")
for(let i=0;i<sp.length;i++){
    console.log(sp[i])
}