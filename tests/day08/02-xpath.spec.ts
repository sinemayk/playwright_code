import { test, expect } from '@playwright/test';

test('xpath practice', async ({ page }) => {
   await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
   await page.locator("//button[ .='Add Element']").click();
   await expect(page.locator("//button[ .='Delete']")).toBeVisible();
   await page.locator("//button[ .='Delete']").click();
   await expect(page.locator("//h3[ .='Add/Remove Elements']")).toBeVisible();
    
});
