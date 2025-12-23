/*ClassRoom:
load the url : https://www.amazon.in/
1. Locate the search box using attribute based xpath -> Iphone
2. Click on storage -> 512 GB and above
3. Click on add to cart button*/
import { test, expect } from '@playwright/test'

test("Create a new Account",async({page})=>{    
    await page.goto("https://www.amazon.in/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("Iphone")
    await page.locator("//input[@id='nav-search-submit-button']").click()
    await page.waitForTimeout(2000)
    await page.locator("//span[text()='512 GB & Above']").click()
    await page.waitForTimeout(2000)
    await page.locator("(//span[text()='Add to Cart'])[1]").click()

})