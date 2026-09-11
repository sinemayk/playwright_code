import { test, expect } from "@playwright/test";

//bu testi storage state kullanmadan nasil yapariz?

//bu dosya icin storage bilgisini sifirlar, hic login olmamis gibi
//login ile baslar. user.json bu test icin devre disi kalmis olur
//playwright.config.ts teki smoke projemizde butun testler login olmus bir 
//state ile baslar ama biz bu testte login olmadan test etmeliyiz
test.use({storageState:{cookies:[], origins:[]}});

test("login without storage state", async ({ page }) => {
  await page.goto("https://saucedemo.com");
  const userField = page.getByTestId("username");
  const passField = page.getByTestId("password");
  const login = page.getByRole("button", { name: "Login" });
  const title = page.getByText("Products");

  await userField.fill("standard_user");
  await passField.fill("secret_sauce");
  await login.click();
  await expect(title).toBeVisible();
});
