import { test, expect } from "@playwright/test";

test("dropdown", async ({ page }) => {
  //ilk once web elementi locate ediyordun sonra da selectOption() ile seciyorsun
  await page.goto("https://mehmet-alatas.github.io/qatest/Dropdowns.html");
  const dropDownCountry = page.locator("#country-select");
  const dropDownCategory = page.locator("#category-select");
  const dropDownColor = page.locator("#color-search");

  const selectedCountry = await dropDownCountry.selectOption({ index: 1 });
  //burda direk selectOption("vegetables") yazabilirdik,
  //pw ilk olarak bunu value olarak alir kontrol eder bulamazsa
  //index olarak kontrol eder
  const selectedCategory = await dropDownCategory.selectOption({
    value: "vegetables",
  });
  //bunda select kullanamayiz, dropdown div ile tanimlanmis
  //ve arama yapilabilen bir dropdown
  await dropDownColor.click();
  const selectedColor = page.locator("//*[@id='color-options']/div[1]");
  await selectedColor.click();

  //Şimdi get selected olan seçeneğe tıklayın
  await page.locator("button[onclick='getSelectedColor()']").click();

  //value degerlerini kontrol eder

  //burda array listesinden sectigin icin o listede secilen degeri kontrol ediyor, girdi olarak
  //array istiyor ama altta dropdowna artik sectin, orda ne var diye bakiyor
  expect(selectedCountry).toEqual(["us"]);
  expect(dropDownCountry).toHaveValue("us");

  //bunda da ayni mantik
  expect(selectedCategory).toEqual(["vegetables"]);
  await expect(dropDownCategory).toHaveValue("vegetables");

  //burda dropdown searchable oldugu icin oradaki deger sabit kalmiyor o yuzden
  //dropdown in valuesuna degil secilene bakabilirsin sadece
  //await expect(selectedColor).toHaveValue("Red");
  await expect(dropDownColor).toHaveValue("Red");
});
