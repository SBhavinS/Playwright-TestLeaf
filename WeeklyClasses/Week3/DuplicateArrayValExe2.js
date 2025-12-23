//1. PrintDuplicate [56,78,90,23,90,76,43,56]
let arr = [56, 78, 90, 23, 90, 76, 43, 56,56];
let duplicates = [];    
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }   
}
console.log("Duplicate values are:", duplicates);
