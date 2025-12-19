import test from '@playwright/test';

test('DropDown Test', async ({ page }) => {
//   await page.goto('https://www.leafground.com/select.xhtml');   
//     await page.locator('#j_idt87:country_label').click();
//     await page.locator('li[data-label="India"]').click();
//     await page.waitForTimeout(5000);
/*ClassRoom:
Use PageFixture
Url:https://www.telerik.com/contact
1st dropdown -> index
2nd dropdown -> value
3rd dropdown -> label*/
    await page.goto('https://www.telerik.com/contact');
    await page.selectOption("[id='Dropdown-1']", { index: 2 });
    await page.waitForTimeout(3000);
    await page.selectOption("[id='Dropdown-2']", { value: 'DevCraft' });
    await page.waitForTimeout(3000);
    await page.selectOption("#Country-1", { label: 'India' });
    await page.waitForTimeout(5000);
   

    

})
