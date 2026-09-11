import { test, expect, devices } from "@playwright/test";

test.describe("parametrize login", () => {
  test.only("login test", async ({ page }) => {
    const userField = page.getByTestId("username");
    const passField = page.getByTestId("password");
    const login = page.getByRole("button", { name: "Login" });
    const title = page.getByText("Products");

    await page.goto("https://saucedemo.com");
    await userField.fill("standard_user");
    await passField.fill("secret_sauce");
    await login.click();
    await expect(title).toBeVisible();
  });
});
