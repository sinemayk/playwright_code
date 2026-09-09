import { test, expect } from "@playwright/test";

const searchKeywords = ["playwright", "selenium", "cypress"];

//boyle gruplandirabilirsin
test.describe('youtube search test', () => {
   //1.yol
for (const searchKeyword of searchKeywords) {
  test(`parameterize test with pw ${searchKeyword}`, async ({ page }) => {
    await page.goto("https://www.youtube.com");
    await page
      .getByRole("button", { name: "Accept the use of cookies and" })
      .click();
    const searchBox = page.getByRole("combobox", { name: "Search" });
    await searchBox.click();
    await searchBox.fill(searchKeyword);
    await searchBox.press("Enter");
    
    //new RegExp(searchKeyword) yazarak her turda searchKeyword icinde
    //hangi deger varsa onu arayan bir regex olusturduk, loop degiskenini
    //regexe donusturmenin yolu bu 
    await expect(page).toHaveTitle(new RegExp(searchKeyword));
  });
  } 
});



  //2.yol
  searchKeywords.forEach((searchKeyword) => {
    test(`parameterize test with pw for each ${searchKeyword}`, async ({ page }) => {
    await page.goto("https://www.youtube.com");
    await page
      .getByRole("button", { name: "Accept the use of cookies and" })
      .click();
    const searchBox = page.getByRole("combobox", { name: "Search" });
    await searchBox.click();
    await searchBox.fill(searchKeyword);
    await searchBox.press("Enter");
  
    await expect(page).toHaveTitle(new RegExp(searchKeyword));
  })
})


