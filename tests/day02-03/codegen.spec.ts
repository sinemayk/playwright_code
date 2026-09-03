import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Ana sayfayı aç.
  await page.goto('https://www.techproeducation.com/en');
  // Kurslar menüsünden ücretsiz kurslara git.
  await page.getByRole('link', { name: 'Courses', exact: true }).click();
  await page.getByRole('link', { name: 'Free Courses' }).click();
  // Kayıt bağlantısının göründüğünü doğrula.
  await expect(page.getByRole('link', { name: 'Enroll now', exact: true })).toBeVisible();
  // Alt bilgide telefon numarasını doğrula.
  await expect(page.locator('footer')).toContainText('+1 585 304 29 79');
});