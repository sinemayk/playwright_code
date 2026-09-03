import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Todo uygulamasını aç.
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  // Üç görev ekle.
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('learn your lesen');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('End');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('eat your meal');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('clean your house');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  // Bir görevi tamamlandı olarak işaretle.
  await page.getByRole('listitem').filter({ hasText: 'eat your meal' }).getByLabel('Toggle Todo').check();
  await expect(page.getByText('eat your meal')).toBeVisible();
  // Görevleri silip filtreleri kontrol et.
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.locator('body')).toContainText('clean your house');
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toBeVisible();

});