import { test, expect} from "../../fixtures/auth.fixture";

test('Login olmus fixture kullanimi', async ({ loggedInPage }) => {

    await expect(loggedInPage.getByText("Products")).toBeVisible();
    
});
