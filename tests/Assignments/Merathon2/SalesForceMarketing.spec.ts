/*Steps & Expected Results:
1. Step: Launch the browser (Chrome / Edge / Firefox / Safari). Expected Result: User should see the respective browser getting launched.
2. Step: Load the specified URL (https://login.salesforce.com/). Expected Result: The Salesforce application’s login window should appear.
3. Step: Enter the Username, Password and click on the Login button. Expected Result: The user should be logged into Salesforce CRM
4. Step: Click on the App Launcher toggle button. Expected Result: A list of apps should appear.
5. Step: Click on the View All link. Expected Result: The link should direct the user to the App Launcher pop up window.
6. Step: Type ‘Marketing’ in the search box and click on the Marketing link. Expected Result: The link should direct the user to Marketing dashboard page.
7. Step: Navigate to the Leads tab from the Marketing dashboard. Expected Result: User should see a list of existing leads (if any) and options to create a new lead.
8. Step: Click on the New button to create a lead. Expected Result: A form to input details for the new lead should appear.
9. Step: Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid data. Expected Result: All details should be filled in without any errors.
10. Step: Click on the Save button. Expected Result: A new lead should be created and user should be redirected to the detailed view of the newly created lead. A confirmation message should also be displayed and verified.
11. Step: In the newly created Lead page, locate the dropdown near Submit for Approval button and click on the Convert link. Expected Result: The Convert link should be visible and clickable and a new dialog should appear asking for details about converting the lead to an opportunity, contact, and an account.
2
12. Step: Click on the Opportunity Name input field, clear and enter a new opportunity name. Expected Result: The entered value should appear.
13. Step: Click on the Convert button. Expected Result: The lead should be successfully converted. A confirmation message ‘Your lead has been converted’ should be displayed and verified.
14. Step: Click on the Go to Leads button. Expected Result: It should redirect the user to Leads page.
15. Step: Search the verified lead name in the Search box and verify the text ‘No items to display’. Expected Result: The lead should not be displayed as it has been converted to Opportunity and should display the confirmation message.
16. Step: Navigate to the Opportunities tab and search for the opportunity linked with the converted lead. Expected Result: The newly converted opportunity should appear in the list with all the relevant details correctly populated from the lead.
17. Step: Search the opportunity name created and click on the created opportunity name. Expected Result: The created Opportunity Name should appear and verify the same.*/

import { test, expect } from '@playwright/test'
test.use({storageState:"utils/SalesForce_Login.json"});
test.describe("SalesForce Marketing Assignment",()=>{
test("SalesForce Marketing Lead Creation and Conversion",async({page})=>{
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home") 

    // Click on the App Launcher toggle button.
    // Click App Launcher icon
    await page.click('//div[@role="navigation" and @aria-label="App"]');
    // Click View All
    await page.click('//button[@aria-label="View All Applications"]');
    // Enter Accounts in App Launcher search box
    await page.fill('//input[@placeholder="Search apps or items..."]', 'Marketing');
    // Click Marketing
    await page.locator('//mark[text()="Marketing"]').click();
   
    // Navigate to the Leads tab from the Marketing dashboard.
    await page.locator("(//div[@class='slds-context-bar__label-action slds-p-left_none'])[4]").click()
    // Click on the New button to create a lead.
    await page.getByRole("menuitem",{name : 'New Lead'}).click()
    // Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid data.
    await page.locator("//button[@aria-label='Salutation']").selectOption("Mr.")
    await page.locator("input[placeholder='First Name']").fill("Bhavin")    
    await page.locator("input[placeholder='Last Name']").fill("Solanki")
    await page.locator("input[name='Company']").fill("TestLeaf")
    // Click on the Save button.
    await page.locator("button[name='SaveEdit']").click()
    // A new lead should be created and user should be redirected to the detailed view of the newly created lead. A confirmation message should also be displayed and verified.
    const leadName=page.locator("//lightning-formatted-name[@slot='primaryField']")
    await expect(leadName).toHaveText("Bhavin Solanki")
    // In the newly created Lead page, locate the dropdown near Submit for Approval button and click on the Convert link.
    //await page.locator("button[title='Show more actions']").click()
    await page.locator("//button[@name='Convert']").click()
    // Click on the Opportunity Name input field, clear and enter a new opportunity name.
    const opportunityName=page.locator("(//div[@class='createPanelCollapsed'])[2]")
    await opportunityName.fill("")
    await opportunityName.fill("Bhavin_TestLeaf")
    // Click on the Convert button.
    await page.locator("//button[text()='Convert' and @class='slds-button slds-button_brand']").click()
    // The lead should be successfully converted. A confirmation message ‘Your lead has been converted’ should be displayed and verified.
    const confirmationMessage=page.locator("//div[@class='panel runtime_sales_leadConvertedConfirmationDesktop']//h2")
    await expect(confirmationMessage).toHaveText("Your lead has been converted")   
    // Click on the Go to Leads button.
    await page.locator("//button[text()='Go to Leads']").click()
    // Search the verified lead name in the Search box and verify the text ‘No items to display’.
    const searchLeads=await page.locator("input[placeholder='Search this list...']")
    await searchLeads.fill("Bhavin Solanki")
    await searchLeads.press('Enter')
    const noItemsMessage=page.locator("//h3[text()='Nothing to see here']")
    await expect(noItemsMessage).toHaveText("Nothing to see here")
    // Navigate to the Opportunities tab and search for the opportunity linked with the converted lead.
    await page.locator("//span[text()='Opportunities']").click()
    const searchOpportunity=await page.locator("input[placeholder='Search this list...']")
    await searchOpportunity.fill("Bhavin_TestLeaf")
    await searchOpportunity.press('Enter')
    // The newly converted opportunity should appear in the list with all the relevant details correctly populated from the lead.
    const opportunityInList=page.locator("//span[text()='Bhavin_TestLeaf']")
    await expect(opportunityInList).toBeVisible()
    // Search the opportunity name created and click on the created opportunity name.
    await opportunityInList.click()
    // The created Opportunity Name should appear and verify the same.
    const opportunityNameDetail=page.locator("//lightning-formatted-text[@slot='primaryField']")
    await expect(opportunityNameDetail).toHaveText("Bhavin_TestLeaf")
});
});
