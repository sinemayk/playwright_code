import { test, expect } from "@playwright/test";

test("iframe usage", async ({ page }) => {
  await page.goto("https://www.letskodeit.com/practice");
  const iframe = page.frameLocator("#courses-iframe");
  const searchBox = iframe.getByPlaceholder("Search Course");
  await searchBox.fill("api");
  await searchBox.press("Enter");
  expect(iframe.getByText("Rest API Automation With Rest Assured")).toBeVisible();
});
