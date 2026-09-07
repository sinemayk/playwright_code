import { test, expect } from "@playwright/test";
test("multi window handling", async ({ page, context }) => {
  await page.goto("https://the-internet.herokuapp.com/windows");

  //pw yeni tab acildiktan sonra yakalayamaz o yuzden onceden haber vermemiz lazim
  const newPagePromise = context.waitForEvent("page");

  await page.getByRole("link", { name: "Click Here" }).click();

  //verdigin sozu tut, bana sayfayi getir, o sayfaya gittim
  const newPage = await newPagePromise;

  await expect(newPage.getByRole("heading", {name:"New Window"}));
});
