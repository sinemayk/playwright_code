import { test, expect } from "@playwright/test";
test.describe("Smoke Tests", () => {
  test("Google aciliyor mu", async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle(/Google/);
  });

  test("URL dogru mu", async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveURL(/google/); //kasitli olarak yanlis yazdik
  });

  test("Yanlis title kontrolu", async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveURL("Bu baslik yanlis"); //kasitli olarak yanlis yazdik
  });
});

test.describe("Regression Tests", () => {
  test("Google arama kutusu gorunuyor mu", async ({ page }) => {
    await page.goto("https://www.google.com");
    const searcBox = page.locator('textarea[name="q"]');
    await expect(searcBox).toBeVisible();
  });

  test("Arama yapilabiliyor mu", async ({ page }) => {
    await page.goto("https://www.google.com");
    const searcBox = page.locator('textarea[name="q"]');
    await searcBox.fill("Playwright test automation");
    await searcBox.press("Enter");
    await expect(page).toHaveURL(/search/); //bu element yok
  });

  test("Var olmayan element", async ({ page }) => {
    await page.goto("https://www.google.com");
    const fakeButton = page.locator("#bu-element-yok");
    await expect(fakeButton).toBeVisible({ timeout: 3000 }); //kasitli olarak yanlis yazdik
  });

  test("Sayfa 3 sn de yukleniyor mu", async ({ page }) => {
    const startTime = Date.now();
    await page.goto("https://www.google.com");
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);
  });

  test.describe("UI Tests", () => {
  test("Google logosu gorunuyor mu", async ({ page }) => {
    await page.goto("https://www.google.com");
    const logo = page.locator('img[alt="Google"]');
    await expect(logo).toBeVisible();
  });

  test("Olmayan butona tiklama", async ({ page }) => {
    await page.goto("https://www.google.com");
    await page.click("#olmayan-buton", {timeout:3000})
    await expect(page).toHaveURL(/search/); //bu element yok
  });

  test("Sayfa basligi bos degil mi", async ({ page }) => {
    await page.goto("https://www.google.com");
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });
  });
});
