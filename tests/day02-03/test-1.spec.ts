import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Google ana sayfasını aç.
  await page.goto('https://www.google.com/');
  // Çerez bildirimini kabul et.
  await page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  // Google logosuna tıkla.
  await page.getByRole('img', { name: 'Google' }).click();
});