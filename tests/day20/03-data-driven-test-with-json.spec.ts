import { test, expect } from "@playwright/test";
import credentials from "../../test-data/login-test-data.json";

test.describe("parametrize login", () => {
for (const user of credentials) {
    test(`login test ${user.username}`, async ({ page }) => {
      const userField = page.getByTestId("username");
      const passField = page.getByTestId("password");
      const login = page.getByRole("button", { name: "Login" });
      const title = page.getByText("Products");

      await page.goto("https://saucedemo.com");
      await userField.fill(user.username);
      await passField.fill(user.password);
      await login.click();
      await expect(title).toBeVisible();
    });
  }
});