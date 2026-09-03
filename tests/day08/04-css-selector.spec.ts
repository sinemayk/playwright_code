import { test, expect } from '@playwright/test';

test('xpath practice', async ({ page }) => {
   await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
   await page.locator("button[onclick='addElement()']").click();
   await expect(page.locator(".added-manually")).toBeVisible();
   await page.locator("button[onclick='deleteElement()']").click();
   await expect(page.locator("h3")).toBeVisible();
    
});
