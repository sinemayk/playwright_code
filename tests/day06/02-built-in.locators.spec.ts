import { test, expect } from "@playwright/test";

test.skip("getByTestId() usage", async ({ page }) => {
  await page.goto("https://devexpress.github.io/testcafe/example/");

  // 1. İsim alanını doldur
  const nameInput = page.getByTestId("name-input");
  await nameInput.fill("123");

  // 2. Checkbox'ları işaretle
  await page.getByTestId("remote-testing-checkbox").check();
  await page.getByTestId("tried-testcafe-checkbox").check();

  // 3. Buton artık enabled durumdadır, rahatça tıklayabilirsiniz
  const submitBtn = page.getByTestId("submit-button");
  await expect(submitBtn).toBeEnabled();
  await submitBtn.click();
});

test("getByPlaceHolder() usage", async ({ page }) => {
  await page.goto(
    "https://www.techproeducation.com/en/enroll/premium-enrollment",
  );

  await page.getByPlaceholder("e.g 1234567890").isVisible();
});

test("getByAltText usage", async ({ page }) => {
  await page.goto("https://www.techproeducation.com/en/");
  await page.getByAltText("Blatt Systemhaus").isVisible();
});
