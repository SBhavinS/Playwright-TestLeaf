import loginInfo from "../../../Data/leafTaps_Login.json"

import test from '@playwright/test'

for(let data of loginInfo){

test(`Read the Value from JSON ${data.Tc_No}`,async({page})=>{

        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill(data.username)
        await page.locator("#password").fill(data.password)
        await page.locator("//input[@class='decorativeSubmit']").click()

});
}