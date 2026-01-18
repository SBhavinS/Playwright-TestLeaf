import { LoginPage } from "./LoginPage";

class HomePage extends LoginPage{
    
    public clickOnCrmsfa(){
        console.log("Clicked on Crmsfa link successfully");
    }

    public clickOnLogOut(){
        console.log("Clicked on LogOut link successfully");
    }
}
let hp=new HomePage()
hp.launchApplication()
hp.locatorMethod()
hp.enterUserName()
hp.enterPassword()
hp.clickLogin()
hp.clickOnCrmsfa()