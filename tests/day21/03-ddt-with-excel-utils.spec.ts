import { test, expect } from "@playwright/test";
import { getExcelData } from "../../utils/excelHelper";

const testData = getExcelData("test-data/loginTestData.xlsx")

test.describe("parametrize login", () => {
testData.forEach((data) => {
    test(`login test ${data.username}`, async ({ page }) => {
      const userField = page.getByTestId("username");
      const passField = page.getByTestId("password");
      const login = page.getByRole("button", { name: "Login" });
      const title = page.getByText("Products");

      await page.goto("https://saucedemo.com");
      await userField.fill(data.username);
      await passField.fill(data.password);
      await login.click();
      await expect(title).toBeVisible();
    });
  })
});