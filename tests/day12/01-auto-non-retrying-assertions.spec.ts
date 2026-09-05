import { test, expect } from "@playwright/test";
test("non-retrying expertise", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
  const removeButton = page.locator("button[onclick='swapCheckbox()']");
  await removeButton.click();
  const buttonText = await removeButton.innerText();
  expect(buttonText).toEqual("Add");
});

test("Auto-retrying expertise", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
  const removeButton = page.locator("button[onclick='swapCheckbox()']");
  await removeButton.click();
  await expect(removeButton).toHaveText("Add"); //bunu suan auto retrying olarak degistirdik
  // o yuzden kalmadi, expectin icine locator verince auto retrying devreye girdi
});
