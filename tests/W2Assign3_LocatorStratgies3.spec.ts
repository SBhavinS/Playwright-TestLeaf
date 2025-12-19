/*Assignment: 3 Create a new Account
1. Navigate to the url https://login.salesforce.com/
2. Enter username using getByLabel
3. Enter password using getByLabel
4. Click Login
5. Verify the title and url of the page using appropriate assertions
6. Click App Launcher using the class locator
7. Click View All using getByText
8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
9. Click Service using index based XPath
10. Click Accounts using attribute based CSS selector
11. Click New using getByRole
12. Enter Account name using attribute based CSS selector
13. Click Save button using XPath
14. Verify the toast message displayed*/
import { test, expect } from '@playwright/test'

test("Create a new Account",async({page})=>{    
    await page.goto("https://login.salesforce.com/")
    await page.getByLabel('Username').fill("dilipkumar.rajendran@testleaf.com") 
    await page.getByLabel('Password').fill("TestLeaf@2025") 
    await page.getByRole('button', { name: 'Log In' }).click()  
    await expect(page).toHaveTitle(/Salesforce/)
    await expect(page).toHaveURL(/testleaf.lightning.force.com/) 
    await page.locator('.slds-icon-waffle').click() 
    await page.getByText(/View All/).and(page.locator('button')).click()
    await page.waitForTimeout(2000)
    await page.getByPlaceholder('Search apps or items...').fill('Service')
    await page.waitForTimeout(2000)
    // await page.locator("(//p[@class='slds-truncate'])[2]").click() 
    // await page.locator("a[title='Accounts']").click() 
    // await page.getByRole('button', { name: 'New' }).click() 
    // await page.locator("input[class='slds-input']").fill("Test Account")
    // await page.locator("//button[@name='SaveEdit']").click() 
    // const toastMessage = await page.locator("//div[@class='toastMessage slds-text-heading--small forceActionsText']").textContent()
    // console.log("Toast Message: " + toastMessage) 
    // await expect(page.locator("//div[@class='toastMessage slds-text-heading--small forceActionsText']")).toHaveText(/Account "Test Account" was created./)
}
)

