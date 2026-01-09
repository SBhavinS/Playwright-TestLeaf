/*1. Launch browser and navigate to Decathlon website https://www.decathlon.in/
2. Verify URL using Playwright assertions
3. Verify the Decathlon homepage is displayed
4. Verify if search box is enabled
5. Click on the search Box
6. Enter the product name “Shoes”
7. Press Enter or select a suggestion from the dropdown
8. Verify the product listing page is displayed or Verify search results page title
9. Click on the Sport filter dropdown
10. Select Running from the Sport dropdown
11. Click on the Gender filter dropdown
12. Select Men
13. Click on the Size filter dropdown
14. Select size UK 10
15. Click on the Price filter dropdown
16. Select a price range (e.g., ₹1000 – ₹3000)
17. From the filtered results, click on the first available product
18. On the product details page, select Size – UK 10
19. Click on Add to cart button
20. Verify that the product is successfully added to the cart*/

import test from '@playwright/test';

test('Decalthon add to cart Test', async ({ page }) => {

    await page.goto('https://www.decathlon.in/')
    await test.expect(page).toHaveURL('https://www.decathlon.in/');
   // await test.expect(page.locator("img[alt='Decathlon Logo']")).toBeVisible();
   page.getByRole('textbox', { name: 'Search For 60+ Sports and 6000+ Products' })
  //  await test.expect(page.getByRole('textbox', { name: /Search For/i })).toBeEnabled()
    await page.getByRole('textbox', { name: /Search For/i }).click();
    await page.getByRole('textbox', { name: /Search For/i }).fill("Shoes");
    await page.keyboard.press('Enter');
    await test.expect(page).toHaveTitle(/Shoes/);
    await page.locator("label:has-text('Sport')").click();
    await page.locator("label:has-text('Running')").click();
    await page.locator("label:has-text('Gender')").click();
    await page.locator("label:has-text  'Men'").click();
    await page.locator("label:has-text('Size')").click();
    await page.locator("label:has-text  'UK 10'").click();
    await page.locator("label:has-text('Price')").click();
    await page.locator("label:has-text  '₹1000 - ₹3000'").click();
    await page.locator("(//div[@class='product-card-details'])[1]").click();
    await page.locator("text=UK 10").click();
    await page.locator("button:has-text('Add to cart')").click();
    await test.expect(page.locator("div:has-text('Product added to your cart')")).toBeVisible();    
})

