import { test, expect, Locator } from "@playwright/test";

test("child locators usage", async ({ page }) => {
  // Ürünler sayfasını aç.
  await page.goto("https://www.automationteststore.com/");

  //1. yol
  const latestProducts1 = page.locator(
    "//section[@id='latest']//div[@id='block_frame_latest_1770']//span[.='Latest Products']",
  );

  await expect(latestProducts1).toBeVisible();

  //2. yol
  const section = page.locator("//section[@id='latest']");
  // Bölüm içindeki ürün kapsayıcısını seç.
  const div = section.locator("//div[@id='block_frame_latest_1770']");
  // Kapsayıcı içindeki başlığı seç.
  const latestProducts2 = div.locator("//span[.='Latest Products']");
  await expect(latestProducts2).toBeVisible();

  //3. yol
  const latestProducts3 = page
    .locator("//section[@id='latest']")
    .locator("//div[@id='block_frame_latest_1770']")
    .getByText("Latest Products");
    // Üçüncü locator yaklaşımının sonucunu doğrula.
    await expect(latestProducts3).toBeVisible();
});
