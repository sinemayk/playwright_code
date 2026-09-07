import { test, expect } from "@playwright/test";
test("basic viewport screenshot", async ({ page }) => {
  await page.goto("https://www.techproeducation.com");
  await page.screenshot({ path: "screenshots/basic-viewport.png" });
});

test("full page screenshot", async ({ page }) => {
  await page.goto("https://www.techproeducation.com");
  await page.screenshot({ path: "screenshots/full-page.png", fullPage:true });
});

test("webelement screenshot", async ({ page }) => {
  await page.goto("https://www.techproeducation.com");
  await page.getByRole("link", {name:"Enroll Now"}).nth(0).click();
  const iframe = page.frameLocator("iframe[title='Contact Form']");
  const firstName = iframe.getByRole('textbox', { name: 'Name First Required' });
  await expect(firstName).toBeVisible({timeout:10000});
  await firstName.fill("Sinem");
  await firstName.screenshot({ path: "screenshots/firstname.png" });
});

test("config screenshot", async ({ page }) => {
  await page.goto("https://www.techproeducation.com");
  await page.getByRole("link", {name:"Enroll Now"}).nth(0).click();
  //bilerek hata aldik, hata ekran goruntusunu kayit etmek icin
  const iframe = page.frameLocator("iframe[title='Contact']");
  const firstName = iframe.getByRole('textbox', { name: 'Name First' });
  await firstName.fill("Sinem");
  await firstName.screenshot({ path: "screenshots/firstname.png" });
});