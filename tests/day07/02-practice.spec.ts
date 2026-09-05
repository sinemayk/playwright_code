import { test, expect } from "@playwright/test";
test("", async ({ page }) => {
  // OrangeHRM giriş sayfasını aç.
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await expect(
    page.getByRole("heading", { name: "Login", level: 5 }),
  ).toBeVisible();
  await page.getByPlaceholder("Username").fill("Admin");
  // Parola alanını doldur.
  await page.getByPlaceholder("Password").fill("admin123");
  // Giriş düğmesine tıkla.
  await page.getByRole("button", { name: "Login" }).click();
  // Giriş sonrası Dashboard sayfasını doğrula.
  await expect(
    page.getByRole("heading", { name: "Dashboard", level: 6 }),
  ).toBeVisible();
  // My Info sayfasını aç.
  await page.getByRole("link", { name: "My Info" }).click();
  // My Info bölümünün açıldığını doğrula.
  await expect(
    page.getByRole("heading", { name: "PIM", level: 6 }),
  ).toBeVisible();
});
