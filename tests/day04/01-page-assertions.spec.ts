import { test, expect } from "@playwright/test";

test ("Test 1: Baslik Education iceriyor mu?", async ({ page }) => {
// https://www.techproeducation.com/en
//Senaryo 1
//1. Url e git

await page.goto("https://www.techproeducation.com/en");

//2. Sayfa basligini (Title) bir degiskene ata

const actualTechproTitle = await page.title();

//3. Title in "Education" kelimesini icerip icermedigini dogrula

expect(actualTechproTitle).toContain("Education");

});

//-----------------------------------------------------------
test ("Test 2: Basligin TechPro Education oldugunu dogrula", async ({ page }) => {
//Senaryo 2
//1. Url e git
// https://www.techproeducation.com/en

await page.goto("https://www.techproeducation.com/en");

//2. Sayfa basliginin tam olarak "TechPro Education" oldugunu dogrula

//birebir dogrulama yapar, icinde kelime aramaz
await expect(page).toHaveTitle("TechPro Education"); 

});

//-----------------------------------------------------------
//Senaryo 3
//1. Url e git

test ("Test 3: URL Education iceriyor mu?", async ({ page }) => {

await page.goto("https://www.techproeducation.com/en");

//2. Mevcut sayfa URL ini bir degiskene ata

const actualUrl = page.url();

//3. URL in "education" kelimesini icerip icermedigini dogrula

expect(actualUrl).toContain("education");

});

//-----------------------------------------------------------
//Senaryo 4
//1. Url e git

test ("Test 4: URL'nin dogru oldugunu dogrula", async ({ page }) => {
await page.goto("https://www.techproeducation.com/en");

//2. Sayfa URL inin tam olarak "https://www.techproeducation.com/en" oldugunu dogrula

await expect(page).toHaveURL("https://www.techproeducation.com/en"); 

});