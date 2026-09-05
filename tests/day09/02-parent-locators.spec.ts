import { test, expect } from "@playwright/test";

test("Parent Locator Class usage", async ({ page }) => {
  await page.goto("https://www.automationteststore.com/");
  const contactUs = page
    .locator("//div[@class='block_frame block_frame_html_block']")
    .filter({ hasText: "Contact Us" });

    await expect(contactUs).toContainText("Contact Us");
});

test("Parent Locator Class usage 2", async ({ page }) => {
  
  const checkbox = page.locator("li").filter({hasText: "Checkboxes"});
  await expect(checkbox).toBeVisible();
});