import { test, expect } from "@playwright/test";

//dosya uzerinden yapilan retries ayarlamasi configteki ayari override eder
//bu gecerli olur
test.describe.configure({retries:2});

test.describe("Basit kontrol testleri grubu", () => {
  test("basarili kontrol testi", async ({ page }) => {
    await page.goto("https://www.playwright.dev/docs/intro");
    await expect(page).toHaveTitle(/Playwright/);
    console.log("Basarili Test 1 gecti");
  });

  test("bilerek kalan test", async ({ page }) => {
    await page.goto("https://www.playwright.dev/docs/intro");
    await expect(page).toHaveTitle(/Yanlis Baslik/);
    console.log("Basarisiz Test 2 kaldi");
  });
});
