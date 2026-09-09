import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/tr";

const formData = {
  text: faker.lorem.words(3),
  search: faker.commerce.productName(),
  password: faker.internet.password({ length: 12 }),
  email: faker.internet.email({ provider: "gmail.com" }),
  url: faker.internet.url(),
  tel: faker.phone.number(),
  none: faker.person.fullName(),
};

test("faker ile dynamic test verisi kullanimi", async ({ page }) => {
  await page.goto("https://testpages.eviltester.com/pages/forms/text-inputs/");

  const textInput = page.getByLabel("Text", { exact: true });
  const searchInput = page.getByLabel("Search");
  const passInput = page.getByLabel("Password");
  const emailInput = page.getByLabel("email");
  const urlInput = page.locator("#url-input");
  const telInput = page.getByLabel("tel");
  const fullNameInput = page.getByLabel("None (text)");

  await textInput.fill(formData.text);
  await searchInput.fill(formData.search);
  await passInput.fill(formData.password);
  await emailInput.fill(formData.email);
  await urlInput.fill(formData.url);
  await telInput.fill(formData.tel);
  await fullNameInput.fill(formData.none);

  await expect(textInput).toHaveValue(formData.text);
  await expect(searchInput).toHaveValue(formData.search);
  await expect(passInput).toHaveValue(formData.password);
  await expect(emailInput).toHaveValue(formData.email);
  await expect(urlInput).toHaveValue(formData.url);
  await expect(telInput).toHaveValue(formData.tel);
  await expect(fullNameInput).toHaveValue(formData.none);

  await page.getByRole("button", { name: "Validate and Send Inputs" }).click();

  const sentText = page.locator("li[id='_valuetext']");
  const sentSearch = page.locator("li[id='_valuesearch']");
  const sentPass = page.locator("li[id='_valuepassword']");
  const sentEmail = page.locator("li[id='_valueemail']");
  const sentUrl = page.locator("li[id='_valueurl']");
  const sentTel = page.locator("li[id='_valuetel']");
  const sentFullName = page.locator("li[id='_valuetext-default']");

  await expect(sentText).toHaveText(formData.text);
  await expect(sentSearch).toHaveText(formData.search);
  await expect(sentPass).toHaveText(formData.password);
  await expect(sentEmail).toHaveText(formData.email);
  await expect(sentUrl).toHaveText(formData.url);
  await expect(sentTel).toHaveText(formData.tel);
  await expect(sentFullName).toHaveText(formData.none);
});
