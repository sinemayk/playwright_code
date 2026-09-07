import { test, expect } from '@playwright/test';

test('right click', async ({ page }) => {
await page.goto("https://demoqa.com/buttons");
const rightClick = page.getByRole("button", {name:"Right Click Me"});
await rightClick.click({button:"right"});
expect(page.getByText("You have done a right click")).toBeVisible();

    
});
