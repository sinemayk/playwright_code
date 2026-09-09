import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/tr";

test("faker ile dynamic test verisi kullanimi", async ({ page }) => {
  await page.goto("https://testpages.eviltester.com/pages/forms/text-inputs/");

  const textValue = faker.lorem.words(3);
  const searchValue = faker.commerce.productName();
  const passValue = faker.internet.password({ length: 12 });
  const email = faker.internet.email({ provider: "gmail.com" });
  const url = faker.internet.url();
  const tel = faker.phone.number();
  const fullName = faker.person.fullName();

  const textInput = page.getByLabel("Text", { exact: true });
  const searchInput = page.getByLabel("Search");
  const passInput = page.getByLabel("Password");
  const emailInput = page.getByLabel("email");
  const urlInput = page.locator("#url-input");
  const telInput = page.getByLabel("tel");
  const fullNameInput = page.getByLabel("None (text)");

  await textInput.fill(textValue);
  await searchInput.fill(searchValue);
  await passInput.fill(passValue);
  await emailInput.fill(email);
  await urlInput.fill(url);
  await telInput.fill(tel);
  await fullNameInput.fill(fullName);

  await expect(textInput).toHaveValue(textValue);
  await expect(searchInput).toHaveValue(searchValue);
  await expect(passInput).toHaveValue(passValue);
  await expect(emailInput).toHaveValue(email);
  await expect(urlInput).toHaveValue(url);
  await expect(telInput).toHaveValue(tel);
  await expect(fullNameInput).toHaveValue(fullName);

  await page.getByRole("button", { name: "Validate and Send Inputs" }).click();

  const sentText = page.locator("li[id='_valuetext']");
  const sentSearch = page.locator("li[id='_valuesearch']");
  const sentPass = page.locator("li[id='_valuepassword']");
  const sentEmail = page.locator("li[id='_valueemail']");
  const sentUrl = page.locator("li[id='_valueurl']");
  const sentTel = page.locator("li[id='_valuetel']");
  const sentFullName = page.locator("li[id='_valuetext-default']");

  await expect(sentText).toHaveText(textValue);
  await expect(sentSearch).toHaveText(searchValue);
  await expect(sentPass).toHaveText(passValue);
  await expect(sentEmail).toHaveText(email);
  await expect(sentUrl).toHaveText(url);
  await expect(sentTel).toHaveText(tel);
  await expect(sentFullName).toHaveText(fullName);

  
});
