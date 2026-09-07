import { test, expect, chromium, Browser, Page } from "@playwright/test";
import { Context } from "node:vm";
test("browser - context - page", async ({ page }) => {
  const browser: Browser = await chromium.launch();

  const context: Context = await browser.newContext();

  const newPage1: Page = await context.newPage();
  const newPage2: Page = await context.newPage();
  const newPage3: Page = await context.newPage();

  await newPage1.goto("https://www.google.com");
  await newPage2.goto("https://www.amazon.com");
  await newPage3.goto("https://www.facebook.com");

  //her sayfayi arraye atti
  const pages: Page[] = context.pages();

  console.log("Acik sayfa sayisi", pages.length);

  //her sayfanin basligini yazdik
  for (const pg of pages) {
    console.log(await pg.title());
  }
await browser.close();

});
