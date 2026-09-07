import { test, expect } from "@playwright/test";
test("radiobutton", async ({ page }) => {
  await page.goto("https://www.letskodeit.com/practice");
  const radioBmw = page.locator("#bmwradio");
  const radioBenz = page.locator("#benzradio");
  const radioHonda = page.locator("#hondaradio");
  await expect(radioHonda).toBeChecked();
  await expect(radioBenz).not.toBeChecked();
  await radioBenz.check();
  expect(radioBenz).toBeChecked();
});
