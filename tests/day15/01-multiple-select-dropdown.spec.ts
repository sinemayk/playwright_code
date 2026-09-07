import { test, expect } from '@playwright/test';
test('multiple select dropdown', async ({ page }) => {
    await page.goto("https://mehmet-alatas.github.io/qatest/Dropdowns.html");
    const multiDropdown = page.locator("#multi-select");
    await multiDropdown.selectOption(["java", "php"]); 
    expect(multiDropdown).toHaveValues(["java", "php"]);
        
   
    
});
