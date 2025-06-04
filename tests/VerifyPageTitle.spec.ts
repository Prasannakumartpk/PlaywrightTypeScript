import{test, expect} from '@playwright/test';

test('TC-01 Verify Page Title', async({page})=> 
{
    await page.goto('https://www.globalsqa.com/');
    await page.locator('#menu-item-2822').hover();
    await page.locator('#menu-item-2823').click();

    await expect(page).toHaveTitle('Demo Testing Site - GlobalSQA');
    



})