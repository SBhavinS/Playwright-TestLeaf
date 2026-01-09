import test from '@playwright/test'

test("storagestate example",async({page})=>{
    await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.locator(("(//input[@name='USERNAME'])[1]")).fill("demosalesmanager")
        await page.locator("(//input[@name='PASSWORD'])[1]").fill("crmsfa")
        await page.click("(//input[@class='loginButton'])[1]")
        await page.waitForTimeout(500) 


        await page.context().storageState({path:'utils/CrmSfa_login.json'})
    })

