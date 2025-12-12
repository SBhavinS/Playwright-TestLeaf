/*Assignment Requirements:
1. Create a function that takes a student's score as a parameter.
2. Declare and initialize the variable.
3. Use `switch` statement inside the function.
4. Return the corresponding grade.
5. Call the function and print the result.*/
function calculateGrade(score){
    let grade=""
    switch(true){   
        case (score>=90 && score<=100):
            grade="A"
            break       
        case (score>=80 && score<90):
            grade="B"
            break

        case (score>=70 && score<80):
            grade="C"
            break
        case (score>=60 && score<70):
            grade="D"
            break
        case (score>=0 && score<60):
            grade="F"
            break   
        default:
            grade="Invalid Score"
    }   
    return "Score: "+score+", Grade: "+grade
}

console.log(calculateGrade(95))
console.log(calculateGrade(85))
console.log(calculateGrade(75))
console.log(calculateGrade(65))
console.log(calculateGrade(50))

//create without function
let score=72
let grade=""        
switch(true){
    case (score>=90 && score<=100):
        grade="A"
        break
    case (score>=80 && score<90):
        grade="B"
        break   
    case (score>=70 && score<80):
        grade="C"
        break   
    case (score>=60 && score<70):
        grade="D"
        break   
    case (score>=0 && score<60):
        grade="F"
        break   
    default:
        grade="Invalid Score"
}   
console.log("Score: "+score+", Grade: "+grade)

// end without function