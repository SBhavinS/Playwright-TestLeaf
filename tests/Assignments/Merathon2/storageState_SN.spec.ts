import test from '@playwright/test'

test("StorageState for service now",async({page})=>{

await page.goto("https://dev181504.service-now.com")
await page.locator("#user_name").fill("admin")
await page.locator("#user_password").fill("F/*jyM6Q6pHh")
await page.click("#sysverb_login")

//await page.waitForTimeout(7000)
//storage state -> json -> key:value 
await page.context().storageState({path:"utils/serviceNow_Login.json"})
//await page.waitForTimeout(7000)


})