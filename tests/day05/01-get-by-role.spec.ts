import { test, expect, Locator } from "@playwright/test";
/*
Syntax = getByRole(role, {options})

Not=>
getByRole kullanabilmek icin bir web elementin implicit(<button>, <h1> ya da 
explicit(<div role="button") bir rolu olmalidir. )

*/

test("Baslik gorunurluk testi", async({page}) =>{

// TechPro ana sayfasını aç.

//https://www.techproeducation.com/ sayfasina gidin.

await page.goto("https://www.techproeducation.com/");

//Baslik yazisini getByRole ile locate edin.

// Başlık öğesini role tabanlı locator ile seç.
const appListText : Locator = page.getByRole("heading", { name: 'Launch a high-paying tech' });

//Gorunur oldugunu dogrulayin.

await expect(appListText).toBeVisible();

})