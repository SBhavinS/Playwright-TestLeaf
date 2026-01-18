import { expect } from "@playwright/test";
import { LTCreateLeadsPage } from "./CreateLeads";

export class LTViewLeads extends LTCreateLeadsPage{

     async ClickFindleads(selector:string){
        await this.page.click(selector)
     
    }
   
    async EnterLeadsFirstName(selector:string,data:string){
        const leadsFirstName=await this.page.fill(selector,data)
    }
    async EnterLeadsLastName(selector:string,data:string){
        const leadsLastName=await this.page.fill(selector,data)
    }

    async ClickSearchLeads(selector:string){
        const leadsLastName=await this.page.click(selector)
    }
    async verifyLeadsComapnyName(selector:string,data:string){
        const leadsComapnayLastName=await this.page.innerText(selector)
        expect(leadsComapnayLastName).toContain(data)
    }
   
}