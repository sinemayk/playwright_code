import { test, expect } from '@playwright/test';

test('kullanici ürünleri görebilir', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/inventory.html");
    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByTestId("inventory-item")).toHaveCount(6);
    
});
