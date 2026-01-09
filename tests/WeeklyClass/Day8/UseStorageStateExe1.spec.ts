//http://leaftaps.com/crmsfa/control/main?_dc=1766903110015

import test from '@playwright/test'
test.use({ storageState: 'utils/CrmSfa_login.json' });

test("Storage State Example - Login Reuse",async({page})=>{
    await page.goto("http://leaftaps.com/crmsfa/control/main?_dc=1766903110015")
    //Verify that we are logged in by checking for a known element on the landing page
    await page.waitForTimeout(2000)
    await page.locator("//a[text()='Cases']").click()
    await page.waitForTimeout(2000)
    const title = await page.title()
    console.log("Page Title after using storage state: " + title) 
    // Add further actions as needed

});
