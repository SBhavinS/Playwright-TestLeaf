/*Create two functions : launchBrowser, runTests where,
 a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value
 b) runTests need to take input as testType (string) and do not return any
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the values
Call that function from the javascript*/
function launchBrowser(browserName){
    if(browserName.toLowerCase() === "chrome"){
        console.log("Launching Chrome Browser")
    }else{
        console.log("Launching "+browserName+" Browser")
    }   
}

function runTests(testType){    
    switch(testType.toLowerCase()){
        case "smoke":
            console.log("Running Smoke Tests")
            break   
        case "sanity":
            console.log("Running Sanity Tests")

            break
        case "regression":
            console.log("Running Regression Tests")     
            break
        default:
            console.log("Running Smoke Tests")
    }
}

launchBrowser("chrome")
launchBrowser("firefox")
launchBrowser("edge")
runTests("smoke")
runTests("sanity")
runTests("regression")
runTests("functional")
runTests("performance")

// craete without function
let browserName="firefox"   
if(browserName.toLowerCase() === "chrome"){
    console.log("Launching Chrome Browser")
}else{
    console.log("Launching "+browserName+" Browser")
}   
let testType="regression"
switch(testType.toLowerCase()){
    case "smoke":           
        console.log("Running Smoke Tests")
        break   
    case "sanity":
        console.log("Running Sanity Tests")
        break   
    case "regression":
        console.log("Running Regression Tests")     
        break
    default:
        console.log("Running Smoke Tests")
}   

// end without function