import { test, expect, Locator } from "@playwright/test";

test("get by role", async({page}) =>{

//https://www.techproeducation.com/ sayfasina gidin.

// Locator alıştırma sayfasını aç.
await page.goto("https://mehmet-alatas.github.io/qatest/");

//Get Started Linkine git

// Get Started bağlantısını aç.
await page.getByRole("link", { name: "Get Started" }).click();

//playwright locators sayfasina gidin

// İkinci Start Practice bağlantısını seç.
await page.getByRole("link", {name:"Start Practice"}).nth(1).click();

//sayfanin url ini kontrol et
// Locator sayfasının URL'sini doğrula.
await expect(page).toHaveURL("https://mehmet-alatas.github.io/qatest/playwrightlocators.html")

//Arama kutusunu bul.
const searchBox: Locator = page.getByRole("searchbox"); // rol adi search degil

//arama kutusunun gorunurlugunu kontrol et

await expect(searchBox).toBeVisible();

//arama kutusuna playwright yaz

await searchBox.fill("Playwright");

//go to footer linkini bul

const footer: Locator = page.getByRole("link", {name:"Go to footer"});

//linkin gorunurlugunu kontrol et

await expect(footer).toBeVisible();

//tiklanabilir(etkin) oldugunu kontrol et

await expect(footer).toBeEnabled();

});