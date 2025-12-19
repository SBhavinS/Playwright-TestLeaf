import test from '@playwright/test';

test('SalesForce Login Test', async ({ page }) => {
  await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('input[name=pw]').fill('TestLeaf@2025');
    await page.locator('#Login').click();
    await page.waitForTimeout(12000);      

    let title = await page.title();
    console.log('The title of the page is: ' + title);
    await page.locator('.slds-icon-waffle').click();

    await page.waitForTimeout(5000)
})
