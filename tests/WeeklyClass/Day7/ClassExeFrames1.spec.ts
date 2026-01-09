/*https://www.leafground.com/frame.xhtml
handle frame with FrameLocator and FrameObject for nested frame*/
import test, { Frame, FrameLocator } from '@playwright/test';

test('Frame Handling Test', async ({ page }) => {
    await page.goto('https://www.leafground.com/frame.xhtml');  

    // Handling single frame using FrameLocator
    const frame1: Frame |null = page.frame({ url: "https://www.leafground.com/default.xhtml"})
    await frame1?.locator('#Click').click()

    const frame3 = page.frame({ url: "https://www.leafground.com/page.xhtml"})
    if (frame3) {
        const frame4: FrameLocator = frame3.frameLocator('#frame2')
        await frame4.locator('#Click').click()
    }
    });

