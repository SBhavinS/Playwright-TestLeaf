/*Assignment: 2 Edit a Lead
1. Navigate to the url http://leaftaps.com/opentaps/control/main
2. Enter the username as ‘Demosalesmanager’
3. Enter the password as ‘crmsfa’
4. Click the Login button
5. Click CRM/SFA
6. Click Leads
7. Click Find Leads
8. Enter the first name
9. Click Find Leads button
10. Click the first resulting Lead ID
11. Click Edit
12. Edit Company name
13. Edit Annual Revenue
14. Edit Department
15. Enter Description
16. Click Update
17. Verify the edited fields using appropriate assertions*/
import { test, expect } from '@playwright/test'
test("Edit a Lead and its assertions",async({page})=>{   
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    // Wait for page to load after login
    await page.waitForTimeout(2000)
    // Click CRM/SFA using role-based selector (more reliable)
    await page.getByRole('link', { name: 'CRM/SFA' }).click()
    // Wait for navigation and menu to appear
    await page.waitForTimeout(2000)
    // Click Leads using the link specifically (not the "Find Leads" text)
    await page.getByRole('link', { name: 'Leads' }).click()
    // Wait for Leads page to load
    await page.waitForTimeout(2000)
    // Click Find Leads link (not the panel header or button)
    await page.getByRole('link', { name: 'Find Leads' }).click()
    // Wait for Find Leads page to load
    await page.waitForTimeout(2000)
    await page.locator("//input[@name='firstName']").fill("John")
    await page.locator("//button[text()='Find Leads']").click()
    // Wait for search results to load
    await page.waitForTimeout(2000)
    // Click the first resulting Lead ID
    await page.locator("//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a").first().click()  
    // Wait for Lead details page to load
    await page.waitForTimeout(2000)
    await page.getByRole('link', { name: 'Edit' }).click()
    // Wait for Edit Lead page to load
    await page.waitForTimeout(2000)
    await page.locator("#updateLeadForm_companyName").fill("XYZ Corp")
    await page.locator("#updateLeadForm_annualRevenue").fill("750000")
    await page.locator("#updateLeadForm_departmentName").fill("Marketing")
    await page.locator("#updateLeadForm_description").fill("Updated lead information")
    await page.locator(".smallSubmit").click()
    // Wait for lead to be updated and details page to load
    await page.waitForTimeout(2000)
    // Verify using auto-retrying assertions
    await expect(page.locator("#viewLead_companyName_sp")).toHaveText(/XYZ Corp/)
    await expect(page.locator("#viewLead_annualRevenue_sp")).toHaveText("750000")
    await expect(page.locator("#viewLead_departmentName_sp")).toHaveText("Marketing")
    await expect(page.locator("#viewLead_description_sp")).toHaveText("Updated lead information")
    // Verify using non-retrying assertions
    const companyName = await page.locator("#viewLead_companyName_sp").textContent()
    const annualRevenue = await page.locator("#viewLead_annualRevenue_sp").textContent()    
    const departmentName = await page.locator("#viewLead_departmentName_sp").textContent()
    const description = await page.locator("#viewLead_description_sp").textContent()
    if(companyName?.includes("XYZ Corp")){
        console.log("Company name updated successfully:", companyName)
    } else {
        console.log("Company name update failed. Found:", companyName)
    }
    if(annualRevenue === "750000"){
        console.log("Annual Revenue updated successfully:", annualRevenue)
    }
    else {
        console.log("Annual Revenue update failed. Found:", annualRevenue)
    }   
    if(departmentName === "Marketing"){
        console.log("Department Name updated successfully:", departmentName)
    }
    else {
        console.log("Department Name update failed. Found:", departmentName)
    }
    if(description === "Updated lead information"){
        console.log("Description updated successfully:", description)
    }
    else {
        console.log("Description update failed. Found:", description)
    }
})
