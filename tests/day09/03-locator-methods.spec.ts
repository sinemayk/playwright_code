import { test, expect } from "@playwright/test";

test("textContent usage", async ({ page }) => {
  await page.goto("https://www.automationteststore.com/");
  const rawTitle = await page
    .getByRole("heading", { name: "Easy Payments" })
    .textContent(); //ham metni getirecek

  console.log("--------" + rawTitle + "---------");

  expect(rawTitle).toContain("Easy Payments");
});

test("innerText usage", async ({ page }) => {
  await page.goto("https://www.automationteststore.com/");
  const title = await page
    .getByRole("heading", { name: "Easy Payments" })
    .innerText(); //kullanicinin gordugu metni getirir

  console.log("--------" + title + "---------");

  expect(title).toContain("Easy Payments");
});
