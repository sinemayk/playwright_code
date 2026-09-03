import { test, expect } from "@playwright/test";

test("add a product to the cart", async ({ page }) => {
  // Mağazaya giriş yap.
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // Ürünler sayfasının açıldığını doğrula.
  await expect(page.getByText("Products")).toBeVisible();

  // Sırt çantasını açıp sepete ekle.
  await page.getByAltText("Sauce Labs Backpack").click();
  await expect(page.getByTestId("back-to-products")).toBeVisible();

  await page.getByRole("button", { name: /add to cart/i }).click();
  await expect(page.getByRole("button", { name: /remove/i })).toBeVisible();
  await expect(page.getByText("1", { exact: true })).toBeVisible();

  // Sepete git ve alışverişe devam et.
  await page.getByTestId("shopping-cart-link").click();

  await expect(page.getByText("Your Cart")).toBeVisible();
  await page.getByRole("button", {name:"Continue Shopping"}).click();
  await expect(page.getByText("Products")).toBeVisible();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");


});
