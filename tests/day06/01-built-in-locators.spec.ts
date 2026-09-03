import { test, expect, Locator } from "@playwright/test";
//getBytext()

test("getByText() usage", async ({ page }) => {
  //https://www.techproeducation.com/ sayfasina gidin.

  await page.goto("https://www.techproeducation.com/");

  //Baslik yazisini getByText ile locate edin.

  const appListText: Locator = page.getByText(
    "Launch a high-paying tech career — guaranteed. ",
    { exact: true },
  );

  //Gorunur oldugunu dogrulayin.
  await expect(appListText).toBeVisible();
});

test("getByTitle() usage", async ({ page }) => {
  //Techpro adresine git

  await page.goto("https://www.techproeducation.com/");

  //Go to Turkish linkine tikla

  await page.getByTitle("Switch to Turkish").click();

  //Basligi dogrula

  await expect(page).toHaveTitle("TechPro Education");

  //url i dogrula

  await expect(page).toHaveURL("https://www.techproeducation.com/tr");
});

test("getByLabel() usage", async ({ page }) => {
  await page.goto("https://www.techproeducation.com/");
  await page
    .locator("header")
    .getByRole("link", { name: "Enroll Now" })
    .click();
  await page
    .getByRole("link", { name: "🎁 Free Enrollment Start your" })
    .click();
  const firstNameInput = page.locator('iframe[title="Free Enrollment Form"]').contentFrame().getByRole('textbox', { name: 'Name First Required' });
  await firstNameInput.fill("Sinem");
  await expect(firstNameInput).toBeEnabled();
  await expect(firstNameInput).toHaveValue("Sinem");

  await page.locator('iframe[title="Free Enrollment Form"]').contentFrame().getByRole('textbox', { name: 'Referral' }).fill("Can");
  const referral = page.locator('iframe[title="Free Enrollment Form"]').contentFrame().getByRole('textbox', { name: 'Referral' });
  expect(referral).toHaveValue("Can")
});

