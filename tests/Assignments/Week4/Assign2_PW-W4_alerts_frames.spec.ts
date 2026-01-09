/*Assignment Details:
Automate interactions with frames, trigger alerts, and verify the displayed text based on actions using Playwright on the given application.
Preconditions:
- Use page fixture
- Load the URL (https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm)
Assignment Requirements:
- Click Try it.
- Get the message, type and accept the alert.
- Retrieve the text “You pressed OK!” and verify it.
Hints to Solve:
- Use event listener page.on and page.frameLocator to perform the required actions.
- Use the appropriate method of Alert to accept the alert.
- Assert the text after handling the Alert*/
import test from '@playwright/test';
test('Handle Alert in Frame Test', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');
    // Locate the frame and click the "Try it" button
    const frame = page.frameLocator('#iframeResult');
    await frame.locator("//button[text()='Try it']").click();
    await page.waitForTimeout(2000);
    // Handle the alert dialog
    page.on('dialog', async dialog => {
        console.log('Alert message:', dialog.message());
        await dialog.accept();
    });
    await page.waitForTimeout(2000);
    // Verify the resulting text after accepting the alert
    const resultText = await frame.locator("//p[@id='demo']").textContent();
    console.log('Resulting text:', resultText);
    await test.expect(resultText).toBe('You pressed OK!');
});


