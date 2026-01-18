import {xPathChild1,} from './xPathChild1';
class playwrightLoc extends xPathChild1{
    public getbyRole(){
        console.log("Get by Role method in playwrightLoc class")
    }
    public getByText(){
        console.log("Get by Text method in playwrightLoc class")
    }
}

let playwrightLocObject=new playwrightLoc()
playwrightLocObject.cssMethod()
playwrightLocObject.getbyRole()
playwrightLocObject.getByText()
playwrightLocObject.basicXPathMethod()
playwrightLocObject.advancedXPathMethod()
