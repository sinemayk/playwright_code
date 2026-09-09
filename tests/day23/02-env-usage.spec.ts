import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

test.describe("parametrize login", () => {
  test(`login test`, async ({ page }) => {
    const userField = page.getByTestId("username");
    const passField = page.getByTestId("password");
    const login = page.getByRole("button", { name: "Login" });
    const title = page.getByText("Products");

    //! isareti bana guven demek, bunu degeri var demis oldum
    //eger veri gelmezse hata verir
    await page.goto(process.env.BASE_URL!);

    //?? nullish coalescing operator ismi bunun
    //eger soldaki deger null ya da undefined ise sagdakini kullan demek
    //await page.goto(process.env.BASE_URL?? "https://www.saucedemo.com);

    //soldaki deger falsy ise(null, undefined, "", 0, false) sagdakini kullan
    //await page.goto(process.env.BASE_URL || "https://www.saucedemo.com);

    await userField.fill(process.env.SAUCEDEMO_USERNAME_VALID?? "standard_user");
    await passField.fill(process.env.SAUCEDEMO_PASSWORD_VALID|| "secret_sauce");
    await login.click();
    await expect(title).toBeVisible();
  });
});
