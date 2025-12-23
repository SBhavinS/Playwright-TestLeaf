/*Assignment: 1 Create a Lead
1. Navigate to the url http://leaftaps.com/opentaps/control/main
2. Enter the username as ‘Demosalesmanager’
3. Enter the password as ‘crmsfa’
4. Click the Login button
5. Click CRM/SFA
6. Click Leads
7. Click Create Lead
8. Fill the Company Name
9. Fill the First Name
10. Fill the Last Name
11. Fill the Salutation
12. Fill the Title
13. Fill the Annual Revenue
14. Fill the Department
15. Fill the Phone number
16. Click Create Lead button
17. Verify the company name, first name, last name and the status using auto retrying and nonretrying assertions*/
import { test, expect } from '@playwright/test'

test("Create a Lead and its assertions",async({page})=>{   
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
    // Click Create Lead link (not the panel header or button)
    await page.getByRole('link', { name: 'Create Lead' }).click()
    // Wait for form to load
    await page.waitForTimeout(2000)
   await page.locator("#createLeadForm_companyName").fill("ABC Corp")
    await page.locator("#createLeadForm_firstName").fill("John")    
    await page.locator("#createLeadForm_lastName").fill("Doe")
    await page.locator("#createLeadForm_generalProfTitle").fill("Mr.")  
    await page.locator("#createLeadForm_personalTitle").fill("Manager")
    await page.locator("#createLeadForm_annualRevenue").fill("500000")
    await page.locator("#createLeadForm_departmentName").fill("Sales")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("1234567890")
    await page.locator(".smallSubmit").click()
    // Wait for lead to be created and details page to load
    await page.waitForTimeout(2000)
    // Verify using auto-retrying assertions
    await expect(page.locator("#viewLead_companyName_sp")).toHaveText(/ABC Corp/)
    await expect(page.locator("#viewLead_firstName_sp")).toHaveText("John")
    await expect(page.locator("#viewLead_lastName_sp")).toHaveText("Doe")
    await expect(page.locator("#viewLead_statusId_sp")).toHaveText("New")

    // Verify using non-retrying assertions
    const companyName = await page.locator("#viewLead_companyName_sp").textContent()
    const firstName = await page.locator("#viewLead_firstName_sp").textContent()
    const lastName = await page.locator("#viewLead_lastName_sp").textContent()
    const status = await page.locator("#viewLead_statusId_sp").textContent()
    if(!companyName?.includes("ABC Corp")){
        throw new Error(`Company name mismatch: expected to include 'ABC Corp' but got '${companyName}'`)
    }   
    if(firstName !== "John"){
        throw new Error(`First name mismatch: expected 'John' but got '${firstName}'`)
    }   
    if(lastName !== "Doe"){
        throw new Error(`Last name mismatch: expected 'Doe' but got '${lastName}'`)
    }
    if(status !== "New"){
        throw new Error(`Status mismatch: expected 'New' but got '${status}'`)
    }
    console.log("All non-retrying assertions passed.")

    // const companyName = await page.locator("#viewLead_companyName_sp").textContent()
    // const firstName = await page.locator("#viewLead_firstName_sp").textContent()
    // const lastName = await page.locator("#viewLead_lastName_sp").textContent()
    // const status = await page.locator("#viewLead_statusId_sp").textContent()
    // console.log(`Company Name: ${companyName}`)
    // console.log(`First Name: ${firstName}`)
    // console.log(`Last Name: ${lastName}`)
    // console.log(`Status: ${status}`)
    // const pageTitle = await page.title()
    // console.log(`Page Title: ${pageTitle}`)
})
