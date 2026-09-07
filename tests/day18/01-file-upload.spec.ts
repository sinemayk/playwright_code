import { test, expect } from "@playwright/test";

test("file upload test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");

  await page.getByRole("link", { name: "File Upload" }).click();
  await page
    .locator("#file-upload")
    .setInputFiles("tests/day18/upload/Python_Temelleri-2.pdf");

  await page.getByRole("button", { name: "Upload" }).click();
  await expect(page.locator("#uploaded-files")).toContainText(
    "Python_Temelleri-2.pdf",
  );

  expect(page.getByRole("heading", { name: "File Uploaded!" })).toHaveText(
    "File Uploaded!",
  );
});

test("file upload test2", async ({ page }) => {
  await page.goto("https://www.ilovepdf.com/compress_pdf");
  await page
    .locator("input[type='file']")
    .setInputFiles("tests/day18/upload/Python_Temelleri-2.pdf");

    await expect(page.getByText("Python_Temelleri-2.pdf"));
});
