import test,{expect} from '@playwright/test'
import { LTViewLeads } from '../Pages/ViewLeads'

test("POM -Leads",async({page})=>{

    let VLeads=new LTViewLeads(page)
   await  VLeads.launchApp("http://leaftaps.com/opentaps/control/main")
    await VLeads.enterUsername("//input[@name='USERNAME']","DemoCsr2")
   await  VLeads.enterPassword("#password","crmsfa")
    await VLeads.clickLogin(".decorativeSubmit")
    await VLeads.clickOnCrmsfa("//a[contains(text(),'CRM')]")
    await VLeads.clickonLeads("//a[text()='Leads']")
    await VLeads.clickonCreateLeads("//a[text()='Create Lead']")
    await VLeads.addCompanyName("(//input[@name='companyName'])[2]","TestLeaf_POM")
    await VLeads.addFirstName("(//input[@name='firstName'])[3]","Bhavin")
    await VLeads.addLastName("(//input[@name='lastName'])[3]","Solanki")
    await VLeads.clickOnCreateLeadButton("//input[@name='submitButton']")
    await VLeads.ClickFindleads("//a[text()='Find Leads']")
    await VLeads.EnterLeadsFirstName("(//input[@name='firstName'])[3]","Bhavin")
    await VLeads.EnterLeadsLastName("(//input[@name='lastName'])[3]","Solanki")
    await VLeads.ClickSearchLeads("//button[text()='Find Leads']")
    await VLeads.verifyLeadsComapnyName("(//div[@class='x-grid3-cell-inner x-grid3-col-companyName']/a)[1]","Testleaf")

})