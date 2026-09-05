import { test, expect } from "@playwright/test";

test("auto-retrying practice", async ({ page }) => {
  await page.goto("https://www.letskodeit.com/practice");
  const enabledDisabled = page.getByPlaceholder("Enabled/Disabled Field");
  await expect(enabledDisabled).toBeEnabled();
  await page.getByRole("button", { name: "Disable" }).click();
  await expect(enabledDisabled).toBeDisabled();
  await expect(enabledDisabled).not.toBeEditable();
  await page.getByRole("button", { name: "Enable" }).click();
  await expect(enabledDisabled).toBeEditable();
  await expect(enabledDisabled).toBeEmpty();
  enabledDisabled.fill("Test");
  await expect(enabledDisabled).not.toBeEmpty();
  const hideButtonInput =  page.getByPlaceholder("Hide/Show Example");
  await expect(hideButtonInput).toBeVisible();
  await page.getByRole("button", { name: "Hide" }).click();
  expect(hideButtonInput).toBeHidden();
  const switchTitle = page.getByText("Switch To Alert Example");
  expect(switchTitle).toContainText("Alert");
  expect(page).toHaveTitle("Practice Page");
  const pageTitle = page.getByRole("heading", {name: "Practice Page"});
  await expect(pageTitle).toHaveText("Practice Page");
  await expect(pageTitle).not.toHaveText("Test");
  await expect(enabledDisabled).toHaveValue("Test");
  await expect(page).toHaveURL("https://www.letskodeit.com/practice")
  
  


});
