import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.techproeducation.com/en');
  await page.getByRole('link', { name: 'Courses', exact: true }).click();
  await page.getByRole('link', { name: 'Free Courses' }).click();
  await expect(page.getByRole('link', { name: 'Enroll now', exact: true })).toBeVisible();
  await expect(page.locator('footer')).toContainText('+1 585 304 29 79');
});