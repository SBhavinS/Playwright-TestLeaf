/*1. Launch the browser and open https://www.pvrcinemas.com/
2. Select the city as “Chennai”
3. Choose cinema from the available list
4. Select movie date
5. Choose any available movie
6. Select available show time
7. Click on Book button
8. Click on Accept for Terms & Conditions
9. Select the available seat
10. Verify seat information and total ticket amount using assertions
11. Verify the Title of the page
12. Proceed to booking*/
import test from '@playwright/test';

test('PVR Cinema Booking Test', async ({ page }) => {   
    await page.goto('https://www.pvrcinemas.com/');
    await page.locator("#city").click();
 
    // const city = page.getByPlaceholder('Search for city');
    // await city.fill('Ahmedabad');
    // await city.press('ArrowDown');
    // await city.press('Enter');

   await page.click("//h6[text()='Ahmedabad']");
    await page.locator("(//span[text()='Cinema'])").click();
    await page.locator("//span[text()='Select Cinema']").click();
    await page.locator("(//span[text()='PVR Acropolis Ahemdabad'])").click();
    await page.waitForTimeout(2000);
    await page.locator("(//li[@role='option'])").nth(1).click();
    await page.waitForTimeout(2000);
    //await page.locator("(//div[@class='date-day'])[3]").click();
    await page.locator("(//li[@role='option'])").nth(1).click();
    await page.waitForTimeout(2000);
    await page.locator("(//li[@role='option'])").nth(1).click();
    await page.waitForTimeout(2000);
    await page.locator("(//span[text()='Book'])[4]").click();
    await page.waitForTimeout(2000);
    await page.locator("(//button[text()='Accept'])").click();
    await page.waitForTimeout(2000);
    await page.locator("(//span[@class='seat-current-pvr' and text()='6'])").nth(0).click();
    const seatInfo=await page.locator("(//span[@class='seat-selected-pvr' and text()='6'])").nth(0).textContent();
    console.log("Selected Seat Info: "+seatInfo);
    const ticketAmount=await page.locator(".grand-prices").textContent();
    console.log("Total Ticket Amount: "+ticketAmount);
    await test.expect(page).toHaveTitle(/PVR Cinemas/);
    await page.locator("(//button[text()='Proceed'])").click();
})

