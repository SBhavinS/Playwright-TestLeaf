/*Preconditions:
• Service Now application is accessible
• Valid admin credentials are available
Test Steps & Expected Results
1. Launch browser and navigate to Service Now application URL
2. Login using valid admin credentials
3. Verify Service Now home page is displayed
4. Navigate to All → Service Catalog
5. Switch to Service Catalog iframe
6. Select Mobiles category
7. Choose Apple iPhone 13 Pro
8. Configure all required options
9. Click Order Now
10. Verify order confirmation message
11. Capture full-page screenshot*/

import { test, expect } from '@playwright/test'
test.use({ storageState: 'utils/serviceNow_Login.json' });
test.describe("ServiceNow Assignment",()=>{
test("ServiceNow Order iPhone 13 Pro",async({page})=>{
    await page.goto("https://dev181504.service-now.com/now/nav/ui/classic/params/target/ui_page.do%3Fsys_id%3D26370819c3d532105954bd33e4013102")

    await page.waitForTimeout(5000)
    // Verify Service Now home page is displayed
    const userImage=page.getByAltText("System Administrator is Available")
    await test.expect(userImage).toBeVisible()
    const title=page.locator("title")
    // Navigate to All → Service Catalog
    await page.getByRole("menuitem",{name:"All"}).click()
    await page.locator('input[placeholder="Filter"]').fill("Service Catalog")
    await page.getByRole("link",{name:"Service Catalog"}).first().click()
    await page.waitForTimeout(2000)
    // Switch to Service Catalog iframe
    const frame=page.frameLocator("#gsft_main")
    // Select Mobiles category
    await frame.getByRole("link",{name:"Mobiles"}).first().click()
    // Choose Apple iPhone 13 Pro
    await frame.getByRole('link',{name:'Apple iPhone 13 pro'}).click()
    // Configure all required options
    await page.waitForTimeout(2000)
    await frame.locator("//span[@class='input-group-radio']").first().click()
    await frame.locator("input.cat_item_option.form-control").fill('1234567890')
    await frame.locator(".form-control.cat_item_option ").nth(1).selectOption({value:'unlimited'})
    await frame.getByText("Sierra Blue").click()
    await frame.locator('//label[text()="512 GB [add $300.00]"]').click()
    await page.waitForTimeout(2000)
    // Click Order Now
    await frame.getByRole('button',{name:'Order Now'}).click()
    // Verify order confirmation message
    await expect(frame.getByText("Thank you, your request has been submitted")).toBeVisible()
    // Capture full-page screenshot
    await page.screenshot({path:'screenshots/ServiceNow_OrderConfirmation.png',fullPage:true})
});
});

