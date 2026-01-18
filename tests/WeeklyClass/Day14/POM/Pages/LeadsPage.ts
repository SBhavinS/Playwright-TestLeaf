import { LTHomePage } from "./MyHomePage";

export class LTLeadsPage extends LTHomePage{

    async clickonCreateLeads(selector:string){
        await this.page.click(selector)
    }

    async clickonFindLeads(selector:string){
        await this.page.click(selector)
    }

}