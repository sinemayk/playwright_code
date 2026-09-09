import { test, expect } from "@playwright/test";
import testData from "../../test-data/register-test-data.json";

test("json dosyasindan veri okuma", async ({ page }) => {
  await page.goto(
    "https://www.techproeducation.com/en/enroll/premium-enrollment",
  );

  const iframe = page.frameLocator('iframe[title="Premium Enrollment Form"]');
  const email = iframe.getByRole("textbox", { name: "Email Required" });
  const userName = iframe.locator("input[complink='Name_First']");
  const lastName = iframe.locator("input[complink='Name_Last']");
  const phone = iframe.locator("#PhoneNumber");
  const dob = iframe.locator("#Date-date");
  const gender = iframe
    .locator('select[name="Dropdown9"]');

  //await email.click();
  await email.fill(testData.email);

  //await userName.click();
  await userName.fill(testData.firstName);
  await lastName.fill(testData.lastName);
  await phone.fill(testData.phoneNumber);
  await dob.fill(testData.dateOfBirth);
  await dob.press("Enter");

  //selectOption sadece POM da select ile belirtilen alandan locate edilmesi lazim, kullanilabilmesi icin
  await gender.selectOption({ label: testData.gender });


});
