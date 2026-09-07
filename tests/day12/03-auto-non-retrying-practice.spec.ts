import { test, expect } from "@playwright/test";
test("non-retrying practice", async ({ page }) => {
  await page.goto("https://mehmet-alatas.github.io/qatest/Wait.html");
  page.locator("button[onclick='showDelayedElement(10)']").click();
  const isVisible: boolean = await page
    .getByText("🎉 Element Appeared!")
    .isVisible();
  expect(isVisible).toBe(true); //o anki degerine bakti, hata verdi cunku beklemedi, true ya donemedi
});

test("auto-retrying practice", async ({ page }) => {
  await page.goto("https://mehmet-alatas.github.io/qatest/Wait.html");
  await page.getByRole("button", { name: "Show Element (10s delay)" }).click();
  await expect(page.getByText("🎉 Element Appeared!")).toBeVisible({
    timeout: 20000,
  });
});
