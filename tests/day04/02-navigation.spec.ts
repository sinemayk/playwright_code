import { test } from "@playwright/test";

test ("Navigation Methods", async ({ page }) => {
//https://techproeducation.com/en adresine git

await page.goto("https://www.techproeducation.com/en");

//https://www.amazon.com/ adresine git

await page.goto("https://www.amazon.com/");

//Tarayicida bir onceki sayfaya geri don

await page.goBack();

//Tarayicida bir sonraki sayfaya git

await page.goForward();

//Tarayiciyi yenile

await page.reload();

//sayfayi kapat

await page.close();

});


