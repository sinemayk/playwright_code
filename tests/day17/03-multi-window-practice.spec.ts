import { test, expect, Page } from '@playwright/test';

test('multi window practice', async ({ page, context }) => {
    await page.goto("https://www.tutorialspoint.com/selenium/practice/login.php");
    

    const newTab : Page = await context.newPage();
    await newTab.goto("https://www.fakemail.net");
    await newTab.getByRole("button", { name: "Consent" }).click();
    const emailLocator = newTab.locator(".animace");
    await expect(emailLocator).toBeVisible();
    const email = await emailLocator.innerText();
    await page.getByPlaceholder("UserName").fill(email);
    await page.getByPlaceholder("Password").fill("FakePassword123");
    await page.getByRole("button", {name:"Login"}).click();

    await expect(page.getByText("Welcome, Login In")).toBeVisible();

  
    
});
