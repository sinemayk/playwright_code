import { test, expect } from '@playwright/test';

test('xpath practice', async ({ page }) => {
   // Add/Remove Elements sayfasını aç.
   await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
   // Yeni bir Delete butonu ekle.
   await page.locator("//button[ .='Add Element']").click();
   // Eklenen Delete butonunu görünür olarak doğrula.
   await expect(page.locator("//button[ .='Delete']")).toBeVisible();
   // Delete butonunu kullan.
   await page.locator("//button[ .='Delete']").click();
   await expect(page.locator("//h3[ .='Add/Remove Elements']")).toBeVisible();
    
});
