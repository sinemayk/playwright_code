import { test, expect } from '@playwright/test';

test('xpath practice', async ({ page }) => {
   // Add/Remove Elements sayfasını aç.
   await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
   // CSS seçiciyle öğe ekle.
   await page.locator("button[onclick='addElement()']").click();
   // Eklenen öğenin görünür olduğunu doğrula.
   await expect(page.locator(".added-manually")).toBeVisible();
   // Eklenen öğeyi sil.
   await page.locator("button[onclick='deleteElement()']").click();
   // Sayfa başlığının görünür olduğunu doğrula.
   await expect(page.locator("h3")).toBeVisible();
    
});
