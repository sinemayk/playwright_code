import { test } from "@playwright/test";

//Bu dosyadaki testler seri calisir
//Bu config dosyasindakini override eder
test.describe.configure({mode:"serial"});

test("A - Login testi", async ({ page }) => {
  console.log("A - Login testi basladi");
  await page.waitForTimeout(5000);
  console.log("A - Login testi bitti");
});

test("B - Ürünler testi", async ({ page }) => {
  console.log("B - Ürünler testi basladi");
  await page.waitForTimeout(5000);
  console.log("B - Ürünler testi bitti");
});

test("C - Sepet testi", async ({ page }) => {
  console.log("C - Sepet testi basladi");
  await page.waitForTimeout(5000);
  console.log("C - Sepet testi bitti");
});
