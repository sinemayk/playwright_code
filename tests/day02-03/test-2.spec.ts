import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Todo uygulamasını aç.
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  // Üç görev ekle.
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('learn your lesen');
  // İlk görevin imlecini metnin sonuna taşı.
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('End');
  // İlk görevi listeye ekle.
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  // İkinci görev metnini gir.
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('eat your meal');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  // Üçüncü görev metnini gir.
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('clean your house');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  // Bir görevi tamamlandı olarak işaretle.
  await page.getByRole('listitem').filter({ hasText: 'eat your meal' }).getByLabel('Toggle Todo').check();
  // Tamamlanan görevin listede kaldığını doğrula.
  await expect(page.getByText('eat your meal')).toBeVisible();
  // Görevleri silip filtreleri kontrol et.
  await page.getByRole('button', { name: 'Delete' }).click();
  // Kalan görevin görünür olduğunu doğrula.
  await expect(page.locator('body')).toContainText('clean your house');
  // Son görevi sil.
  await page.getByRole('button', { name: 'Delete' }).click();
  // Aktif görevler filtresini aç.
  await page.getByRole('link', { name: 'Active' }).click();
  // Tamamlanan görevler filtresini aç.
  await page.getByRole('link', { name: 'Completed' }).click();
  // Filtre değişikliklerinden sonra görev giriş alanının kullanılabilir kaldığını doğrula.
  await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toBeVisible();

});