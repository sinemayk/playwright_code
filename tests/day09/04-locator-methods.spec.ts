import { test, expect } from "@playwright/test";

test("allTextContents() usage", async ({ page }) => {
  await page.goto("https://www.automationteststore.com/");
  const allLinkText: string[] = await page.getByRole("link").allTextContents();

  for (const linkText of allLinkText) {
    //string arraylerde for of ile kullanilir
    const cleared = linkText.trim();
    expect(cleared.length).toBeGreaterThanOrEqual(0); //verdigim sitede uzunlugu 0 olan link varmis
    expect(cleared.toLowerCase()).not.toContain("null");
    expect(cleared.toLowerCase()).not.toContain("undefined");
  }
});
