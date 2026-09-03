import { test, expect } from '@playwright/test';

test('css locator usage', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/auth/register");
    await page.locator("input").first().fill("tagname input"); //tagname input ile sectik
    await page.locator("#last_name").fill("id ile sectik")
    await page.locator(".form-control").nth(3).fill("1982-12-12");
    await page.locator("input[id='postal_code']").fill("324234");
    
});
