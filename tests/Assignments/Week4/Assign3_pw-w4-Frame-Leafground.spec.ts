/*Assignment Details:
Your task is to interact with the web elements present inside iframes
Precondition:
- Launch Chromium in non-headless mode
- Use required fixtures
- Navigate to https://leafground.com/frame.xhtml
Requirements:
- Interact with the Click Me button inside frame
- Assert the text changed after clicking the button
- Get the total count of frames present in the page
- Interact with the Click Me button present inside the nested frames
- Assert the text changed after clicking the button*/
import test from '@playwright/test';

test('Frame Interaction Test', async ({ page }) => {
    // Navigate to the specified URL
    await page.goto('https://leafground.com/frame.xhtml');
    // Interact with the Click Me button inside the first frame
    const firstFrame = page.frameLocator("(//iframe)[1]");
    const clickMeButton1 = firstFrame.locator("#Click");
    await clickMeButton1.click();
    // Assert the text changed after clicking the button
    const buttonText1 = await clickMeButton1.textContent();
    console.log('Button text after click in first frame:', buttonText1);
    await test.expect(buttonText1).toBe('Hurray! You Clicked Me.');
    // Get the total count of frames present in the page
    const frames = page.frames();
    console.log('Total number of frames on the page:', frames.length);
    // Interact with the Click Me button present inside the nested frames
    // const outerFrame = page.frameLocator("//iframe[@title='Frame Example']");
    // const innerFrame = outerFrame.frameLocator("//iframe");
    // const clickMeButton2 = innerFrame.locator("//button[text()='Click Me']");
    // await clickMeButton2.click();
    // // Assert the text changed after clicking the button
    // const buttonText2 = await clickMeButton2.textContent();
    // console.log('Button text after click in nested frame:', buttonText2);
    // await test.expect(buttonText2).toBe('You Clicked Me!!!');
});

