/*Page.once 
  url :https://www.leafground.com/alert.xhtml

  get the type and message
   click on Show button in prompt alert
  accept("Dilip")
  accept()
  click on Show button in confirm alert
  accept*/
import test from '@playwright/test';

test('Alert Handling Test', async ({ page }) => {
    
    
    // Set up a handler for any dialog
    page.once('dialog', async dialog => {
        console.log("Alert Type: " + dialog.type());
        console.log("Alert Message: " + dialog.message());
        if (dialog.type() === 'prompt') {
            await dialog.accept("Bhavin");
        } else if (dialog.type() === 'confirm') {
            await dialog.accept();
        }
        else (dialog.accept());
    });
    await page.goto('https://www.leafground.com/alert.xhtml');
    
    await page.locator("//span[text()='Show']").nth(4).click();
    await page.waitForTimeout(500);
    
    // Click the second Show button (Confirm Alert - nth(1))
    await page.locator("//span[text()='Delete']").click();
    await page.waitForTimeout(500);
});


