import { expect, test } from "@playwright/test";
test("dropdown", async ({ page }) => {
  await page.goto("https://mehmet-alatas.github.io/qatest/Dropdowns.html");
  const dropDownCountry = page.locator("#country-select");
  const dropDownCategory = page.locator("#category-select");
  const dropDownColor = page.locator("#color-search");

  //Kullanicinin gordugu degere gore aliyoruz
  //1. yol
   await dropDownCountry.selectOption({label:"Canada"});
  //2. yol, burda value bu mu diye bakacak yoksa label bu mu diye bakacak
  await dropDownCountry.selectOption("Canada");

   await dropDownCountry.selectOption({index:0});
   //Country dropdown undaki butun ulkeleri locate ettik
   const options = dropDownCountry.locator("option"); 

   //simdi arraye atiyoruz
   const optionsText: string[] = await options.allTextContents();
   console.log("Eyaletler", optionsText);

//optionsta kac tane eleman var
const count: number = await options.count();
console.log(count);

//gercekten 4 tane mi vae ulke sayisi
await expect(options).toHaveCount(4);

//ulkelerde Canada var mi, butun dropdown u gezer
await expect(dropDownCountry).toContainText("Canada");

});
