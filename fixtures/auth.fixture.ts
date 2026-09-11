import { test as base, expect, Page } from '@playwright/test';

type Myfixtures = {
    loggedInPage : Page;
}

export const test = base.extend<Myfixtures>({
    loggedInPage: async ({page}, use) =>{

      await page.goto("https://saucedemo.com");
      await page.getByTestId("username").fill("standar_user");
      await page.getByTestId("password").fill("secret_sauce");
      await page.getByRole("button", { name: "Login" }).click();
      await expect(page.getByText("Products"));
              
      await use(page);

    },
    
});

export {expect} from "@playwright/test";