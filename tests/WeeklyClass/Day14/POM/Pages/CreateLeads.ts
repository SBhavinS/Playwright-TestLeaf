import { LTLeadsPage } from "./LeadsPage";

export class LTCreateLeadsPage extends LTLeadsPage{

    async addCompanyName(selector:string,data:string){
        await this.page.fill(selector,data)
    }

     async addFirstName(selector:string,data:string){
        await this.page.fill(selector,data)
    }

     async addLastName(selector:string,data:string){
        await this.page.fill(selector,data)
    }

    async clickOnCreateLeadButton(selector:string){
        await this.page.click(selector)
    }
}