import { test, expect, Locator } from "@playwright/test";

test("getAttribute() usage", async ({ page }) => {
  await page.goto("https://www.automationteststore.com/");
  const placeHolderAttValue: string | null = await page
    .getByPlaceholder("Search Keywords")
    .getAttribute("placeholder");

  expect(placeHolderAttValue).toBe("Search Keywords");
});

test("inputValue(), pressSequentially, clear(), press()", async ({ page }) => {
  await page.goto("https://automationteststore.com/index.php?rt=account/login");
  const input: Locator = page.locator("#loginFrm_loginname");

  await input.pressSequentially("Ali", { delay: 1000 });
 // await page.screenshot({ path: "input-filled.png" });
  const actualInputValue = await input.inputValue();

  expect(actualInputValue).toBe("Ali");

// await input.clear();
// await expect(input).toBeEmpty();

input.clear();
const clearedInput = await input.inputValue();
expect(clearedInput).toBe("");
});
