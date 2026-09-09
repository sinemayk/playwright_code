import { test, expect } from "@playwright/test";

const credentials = [
  { username: "standard_user", password: "secret_sauce" },
  { username: "problem_user", password: "secret_sauce" },
  { username: "performance_glitch_user", password: "secret_sauce" },
];

test.describe("parametrize login", () => {
  for (const credential of credentials) {
    test(`login test ${credential.username}`, async ({ page }) => {
      const userField = page.getByTestId("username");
      const passField = page.getByTestId("password");
      const login = page.getByRole("button", { name: "Login" });
      const title = page.getByText("Products");

      await page.goto("https://saucedemo.com");
      await userField.fill(credential.username);
      await passField.fill(credential.password);
      await login.click();
      await expect(title).toBeVisible();
    });
  }
});

//2.yol

test.describe("parametrize login with forEach", () => {
  credentials.forEach((credential) =>{
    test(`login test with forEach of ${credential.username}`, async ({ page }) => {
      const userField = page.getByTestId("username");
      const passField = page.getByTestId("password");
      const login = page.getByRole("button", { name: "Login" });
      const title = page.getByText("Products");

      await page.goto("https://saucedemo.com");
      await userField.fill(credential.username);
      await passField.fill(credential.password);
      await login.click();
      await expect(title).toBeVisible();
    });
  
});
})

