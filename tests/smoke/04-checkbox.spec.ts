import { test, expect } from '@playwright/test';
test('checkbox', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    const checkbox1 = page.getByRole("checkbox").nth(0);
    const checkbox2 = page.getByRole("checkbox").nth(1);
    await expect(checkbox2).toBeChecked();
    await expect(checkbox1).not.toBeChecked();
    await checkbox1.check();
    await checkbox2.uncheck();
    await expect(checkbox1).toBeChecked();
    await expect(checkbox2).not.toBeChecked();
    
    
});