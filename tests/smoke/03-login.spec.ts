import { test, expect } from "@playwright/test";

const user_names = [
  "standard_user",
  "problem_user",
  "performance_glitch_user",
  "error_user",
  "visual_user",
];

test.describe("parametrize login", () => {
  for (const userName of user_names) {
    test(`login test ${userName}`, async ({ page }) => {
      const userField = page.getByTestId("username");
      const passField = page.getByTestId("password");
      const login = page.getByRole("button", { name: "Login" });
      const title = page.getByText("Products");

      await page.goto("https://saucedemo.com");
      await userField.fill(userName);
      await passField.fill("secret_sauce");
      await login.click();
      await expect(title).toBeVisible();
    });
  }
});
