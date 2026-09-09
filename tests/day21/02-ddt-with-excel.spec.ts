import { test, expect } from "@playwright/test";
import * as xlsx from "xlsx";

const workbook = xlsx.readFile("test-data/loginTestData.xlsx");
const sheetName = workbook.SheetNames[0];//adini aldik
const sheet = workbook.Sheets[sheetName];//sayfayi aldik
const testData: any[] = xlsx.utils.sheet_to_json(sheet);

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