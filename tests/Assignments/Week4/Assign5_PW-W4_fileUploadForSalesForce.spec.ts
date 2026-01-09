/*Assignment Details: 
Your task is to automate the file upload process in web application using Playwright 
Precondition: 
- Launch Chromium in non-headless mode 
- Use required fixtures 
- Navigate to https://login.salesforce.com/ 
Requirements: 
- Enter username - Enter password - Click Login 
- Click App Launcher icon - Click View All 
- Enter Accounts in App Launcher search box - Click Accounts - Click New 
- Enter Account Name - Select Warm from the Rating dropdown - Select Prospect from the Type dropdown 
- Select Banking from the Industry dropdown - Select Public from the Ownership dropdown - Click Save 
- Assert the Account created - Upload files - Click Done and assert the uploaded file*/
import test from '@playwright/test';

test('File Upload for SalesForce', async ({ page }) => {
    // Navigate to Salesforce login page
    await page.goto('https://login.salesforce.com/');
    // Enter username
    await page.fill('input#username', 'dilipkumar.rajendran@testleaf.com');
    // Enter password
    await page.fill('input#password', 'TestLeaf@2025');
    // Click Login
    await page.click('input#Login');
    // Click App Launcher icon
    await page.click('//div[@role="navigation" and @aria-label="App"]');
    // Click View All
    await page.click('//button[@aria-label="View All Applications"]');
    // Enter Accounts in App Launcher search box
    await page.fill('//input[@placeholder="Search apps or items..."]', 'Accounts');
    page.waitForTimeout(2000);
    // Click Accounts
    await page.locator('//mark[text()="Accounts"]').click();
    //use this xPath if required in above element ==> 'link', { name: 'Accounts' }

    page.waitForTimeout(2000);
    // Click New
    await page.click('div[title="New"]');
    // Enter Account Name
    await page.fill('input[name="Name"]', 'Test Account');
    // Select Warm from the Rating dropdown
    //await page.selectOption('select[name="Rating"]', { label: 'Warm' });
    // Select Prospect from the Type dropdown
    await page.selectOption('//div[@aria-label="Type"]', { label: 'Prospect' });
    // Select Banking from the Industry dropdown
    await page.selectOption('//div[@aria-label="Industry"]', { label: 'Banking' });
    // Select Public from the Ownership dropdown
    //await page.selectOption('select[name="Ownership"]', { label: 'Public' });
    // Click Save
    await page.waitForTimeout(3000);
    //await page.click('//button[@name="SaveEdit"]');
    // Assert the Account created
    // const accountName = await page.textContent('lightning-formatted-text[data-aura-class="forceRecordLayoutHeaderName"]');
    // console.log('Account Created:', accountName);
    // await test.expect(accountName).toBe('Test Account');
    // // Upload files
    // const [fileChooser] = await Promise.all([
    //     page.waitForEvent('filechooser'),
    //     page.click('button:has-text("Upload Files")'),
    // ]);
    // await fileChooser.setFiles('Data/Img1.png');
    // // Click Done and assert the uploaded file
    // await page.click('button:has-text("Done")');
    // const uploadedFileName = await page.textContent('a[title="Img1.png"]');
    // console.log('Uploaded File:', uploadedFileName);
//    await test.expect(uploadedFileName).toBe('Img1.png');
});

