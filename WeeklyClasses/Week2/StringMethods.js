let value="  Hello, World!  ";

// Trim whitespace from both ends
let trimmedValue = value.trim();
console.log("Trimmed Value:", `"${trimmedValue}"`);


// replace method
let newValue = trimmedValue.replace("World", "JavaScript");
console.log("Replaced Value:", `"${newValue}"`);

//to replace all occurrences from sentence
let sentence = "The cat sat on the mat. The cat is very cute.";
let updatedSentence = sentence.replaceAll("cat", "dog");
console.log("Updated Sentence:", `"${updatedSentence}"`);

// regular expression replace for [a-z] [0-9] from one sentence etc
let regexReplacedSentence = sentence.replace(/cat/g, "lion");
console.log("Regex Replaced Sentence:", `"${regexReplacedSentence}"`);
let sentenceWithNumbers = "There are 3 cats and 4 dogs.";
let regexReplacedNumbers = sentenceWithNumbers.replace(/[0-9]/g, "X");
console.log("Regex Replaced Numbers:", `"${regexReplacedNumbers}"`);
let mixedSentence = "a1b2c3d4";
let regexReplacedMixed = mixedSentence.replace(/[a-z0-9]/g, "*");
console.log("Regex Replaced Mixed:", `"${regexReplacedMixed}"`);

//substring method
let stringValue = "JavaScript is awesome!";
let substringValue = stringValue.substring(0, 5);
console.log("Substring Value:", `"${substringValue}"`);
// slice method
let sliceValue = stringValue.slice(0, 10)
console.log("Slice Value:", `"${sliceValue}"`)
let sliceValue2 = stringValue.slice(-5)
console.log("Slice Value from end:", `"${sliceValue2}"`)
console.log("sliced String Value from end:", stringValue.slice(-4,-1))

//parsInt and parseFloat
let intString = "42";
let floatString = "3.14";   
let parsedInt = parseInt(intString);
let parsedFloat = parseFloat(floatString);
console.log("Parsed Integer:", parsedInt);
console.log("Parsed Float:", parsedFloat);
console.log("Type of Parsed Integer:", typeof parsedInt);
console.log("Type of Parsed Float:", typeof parsedFloat);