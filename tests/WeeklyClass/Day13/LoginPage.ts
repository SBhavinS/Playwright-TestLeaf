import { WrapperMethods } from "./WrapperMethods";

export class LoginPage extends WrapperMethods{

    public enterUserName(){
        console.log("UserName entered successfully");
    }
    public enterPassword(){
        console.log("Password entered successfully");
    }
    public clickLogin(){
        console.log("Login button clicked successfully");
    }
}


// let lp=new LoginPage()
// lp.launchApplication()
// lp.locatorMethod()
// lp.enterUserName()
// lp.enterPassword()
// lp.clickLogin()