import { test, expect } from '@playwright/test';

test('css locator usage', async ({ page }) => {
    // Kayıt sayfasını aç.
    await page.goto("https://practicesoftwaretesting.com/auth/register");
    // İlk input alanını etiket adına göre doldur.
    await page.locator("input").first().fill("tagname input"); //tagname input ile sectik
    // Soyadı alanını id seçicisiyle doldur.
    await page.locator("#last_name").fill("id ile sectik")
    // Doğum tarihi alanını sınıf seçicisiyle doldur.
    await page.locator(".form-control").nth(3).fill("1982-12-12");
    // Posta kodu alanını öznitelik seçicisiyle doldur.
    await page.locator("input[id='postal_code']").fill("324234");
    
});
