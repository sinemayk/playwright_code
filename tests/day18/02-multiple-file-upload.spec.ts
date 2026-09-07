import { test, expect } from "@playwright/test";
test("multiple file uploads", async ({ page }) => {
  await page.goto("https://mehmet-alatas.github.io/qatest/downloadUpload.html");
  await page
    .locator("#file-input")
    .setInputFiles([
      "tests/day18/upload/P1.pdf",
      "tests/day18/upload/P2.pdf",
      "tests/day18/upload/P3.pdf",
    ]);
    await expect(page.getByText("P1.pdf")).toBeVisible();
    await expect(page.getByText("P2.pdf")).toBeVisible();
    await expect(page.getByText("P3.pdf")).toBeVisible();

});
