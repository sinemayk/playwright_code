import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.getByRole('img', { name: 'Google' }).click();
});