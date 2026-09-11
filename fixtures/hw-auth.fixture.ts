import { test as base, expect, Page } from '@playwright/test';

type Myfixtures = {
    loggedInPage : Page;
}

export const test = base.extend<Myfixtures>({
    loggedInPage: async ({page}, use) =>{

      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      await page.getByPlaceholder("Username").fill("Admin");
      await page.getByPlaceholder("Password").fill("admin123");
      await page.getByRole("button", { name: "Login" }).click();
      await expect(page.getByRole("heading", {name:"Dashboard"})).toBeVisible();
              
      await use(page);

    },
    
});

export {expect} from "@playwright/test";