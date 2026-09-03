import { test, expect } from '@playwright/test';

test('xpath usage', async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/auth/register")

    await expect(page.locator("//h3")).toHaveText("Customer registration"); //tagname ile

    //tag + att name + att value
    await page.locator("//input[@id='first_name']").fill("tag + att name + att value");

    //tag name farketmeksizin
    await page.locator("//*[@id='last_name']").fill("tag name farketmeksizin");

    //and
    await page.locator("//*[@id='dob' and @placeholder='YYYY-MM-DD']").fill("1987-09-12");

    //full text()
    await expect(page.locator("//*[text()='Customer registration']")).toBeVisible();

    //Text() kisa yolu
    await expect(page.locator("//*[.='Practice Black Box Testing & Bug Hunting']")).toBeVisible();

    //contains
    await expect(page.locator("//*[contains(text(), 'usto')]")).toContainText("regis");

    
});
