/*
https://www.leafground.com/window.xhtml
-> click on Open button
-> switch to child page
-> Child Page -> Enter Message
-> close childpage
-> click on open multiple*/
import { test, expect } from '@playwright/test';

test.describe('Window Handling LeafGround', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.leafground.com/window.xhtml');
  });
    test('Handle Child Window', async ({ page, context }) => {  
    // Click on Open button to open child window
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
        page.click('//span[text()=("Open")]'),
    ]);

    // Wait for the new page to load
    await newPage.waitForLoadState();
    // Enter message in the child window
    await newPage.fill("//textarea[@id='message']", 'Hello from Playwright');
    // Close the child window
    await newPage.close();
    await page.click("//span[text()='Open Multiple']");
  });
});