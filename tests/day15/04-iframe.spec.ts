import { test, expect } from '@playwright/test';
test('iframe', async ({ page }) => {

    await page.goto("https://mehmet-alatas.github.io/qatest/iframe.html");
    await expect(page.getByText("Master iframe handling techniques with these interactive examples and Selenium test scenarios")).toContainText("these");
    await expect(page.locator("//h2[text()='Understanding iFrames']")).toBeVisible();
    const iframe = page.frameLocator("iframe");
    await expect(iframe.getByText("Inside Simple Frame")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Simple iFrame", exact:true })).toHaveText("Simple iFrame");

});
