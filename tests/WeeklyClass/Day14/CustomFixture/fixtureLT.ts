import {test as LTbasePage, Page} from '@playwright/test'

export const customFixtureLT=LTbasePage.extend<{LeafTaps:any}>({

//step3
LeafTaps:async({page}:{ page: Page },use: (arg0: Page) => any)=>{

//step 4
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("Demosalesmanager")
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.waitForTimeout(5000)
await page.locator("//a[contains(text(),'CRM')]").click()
await page.waitForTimeout(5000)

//step 5
await use(page)
}

})