export class LocatorParent{
    static cssMethod() {
        throw new Error('Method not implemented.')
    }
    
    public cssMethod(){
        console.log("locatorMethod:css in Locator parent class")
    }
}

let locatorParentObject=new LocatorParent()
locatorParentObject.cssMethod()