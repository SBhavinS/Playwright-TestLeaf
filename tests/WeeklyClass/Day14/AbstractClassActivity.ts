abstract class ClassActivityAbstract{
    public typeAndClick():void{
        console.log("Typing and Clicking action performed");
    }
    abstract enterText():void;
    abstract click():void;
}
class extendedClass extends ClassActivityAbstract{
    public enterText():void{
        console.log("Entering text in the field");
    }
    public click():void{
        console.log("Clicking the button");
    }
}
let obj=new extendedClass()
obj.typeAndClick()
obj.enterText()
obj.click()


