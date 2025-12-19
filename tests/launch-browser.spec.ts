import test, { chromium, firefox, webkit } from "@playwright/test";

test("To launch a browser", async ({page}) => {

// const browser = await chromium.launch({ headless: false, channel:"chrome" });

// const browserContext = await browser.newContext();

// const page = await browserContext.newPage();

await page.goto("http://leaftaps.com/opentaps/control/main");

await page.waitForTimeout(5000)
});