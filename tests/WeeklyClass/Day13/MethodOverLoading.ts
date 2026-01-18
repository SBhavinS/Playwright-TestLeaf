/*MethodOverLoading:
create Class Method
methods -> fill(locator:string):void
fill(locator:string,text:string):void*/
export class Method{
    public fill(locator:string):void;
    public fill(locator:string,text:string):void;
    public fill(locator:string,text?:string):void{
        if(text===undefined){
            console.log(`Filling the locator: ${locator}`);
        }else{
            console.log(`Filling the locator: ${locator} with text: ${text}`);
        }
    }
}
let methodObject=new Method()
methodObject.fill("usernameLocator")
methodObject.fill("passwordLocator","mySecretPassword")
