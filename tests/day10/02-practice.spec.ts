import { test, expect, Locator } from "@playwright/test";

test("practice", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  const searchBox: Locator = page.getByRole("searchbox");
  expect(await searchBox.getAttribute("name")).toBe("field-keywords");
  await searchBox.fill("mouse");
  expect(await searchBox.inputValue()).toBe("mouse");//1nci yol
  await expect(searchBox).toHaveValue("mouse");//2nci yol
  await page.getByRole('button', { name: 'Go', exact: true }).click();//1nci yol
  await searchBox.press("Enter");//2nci yol
  await expect(page).toHaveTitle(/mouse/i);
});
