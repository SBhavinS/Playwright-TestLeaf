import {LocatorParent} from './LocatorParent';
export class xPathChild1 extends LocatorParent{
    public basicXPathMethod(){
        console.log("Basic XPath method in xPathChild1 class")
    }
    public advancedXPathMethod(){
        console.log("Advanced XPath method in xPathChild1 class")
    }
    public cssMethod(){
        console.log("locatorMethod:css in Locator xPathchild1 class")
    }
}
let xPathChildObject=new xPathChild1()
xPathChildObject.cssMethod()
xPathChildObject.basicXPathMethod()
xPathChildObject.advancedXPathMethod()

