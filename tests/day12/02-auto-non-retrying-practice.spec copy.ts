import { test, expect } from "@playwright/test";
test("non-retrying practice", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");
  page.getByRole("button",{name:"Start"}).click();
  const isVisible: boolean = await page.getByText("Hello World!").isVisible();
  expect(isVisible).toBe(true); //o anki degerine bakti, hata verdi cunku beklemedi, true ya donemedi
});

test("auto-retrying practice", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");
  await page.getByRole("button", {name:"Start"}).click();
  await expect(page.getByText("Hello World!")).toBeVisible({timeout:10000});
});
