import { test, expect} from "../../fixtures/hw-auth.fixture";

test('Login olmus fixture kullanimi - ödev', async ({ loggedInPage }) => {

    await expect(loggedInPage.getByRole("heading", {name:"Dashboard"})).toBeVisible();
    
});