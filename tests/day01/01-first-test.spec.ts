import {test,expect} from "@playwright/test"

/*
test("buraya testimizin basligini yazariz", ()=> { // test("testin basligi", test fonk.)
    // testlerimizle ilgili kodlari buraya yazacagiz
}) ;

promise: Tamamlanmasi zaman alacak bir islemin sonucunu o sonuc gelene kadar kod icinde temsil eder 
ve hatasiz testler yazabilmek icin promise return eden bir methodun basina mutlaka await keywordunu
koymaliyiz

await: asenkron bir islemden sonuc gerceklesene kadar kodun bir alt satira devam etmesini
duraklatan komuttur

async: bir fonksiyon icinde await yapilabilecegini ve bu fonksiyonun icinde promise return eden
yapilar bulundugunu belirtir ve await kullabilmek icin fonksiyonu async olarak isaretlememiz gerekir
*/

test("Sayfa basligini dogrula", async({page})=>{ // async olmadan await kullanamazsin
await page.goto("https://www.google.com") // buraya await yazmadim, hata verdi. 





// Cunku daha sayfaya gelmeden basligi aradi
//await page.getByRole('button', { name: 'Alle akzeptieren' }).click();
await page.getByRole('button', { name: 'Alle ablehnen' }).click();
//Title bilgisini alalim
const title : string = await page.title(); // daha title alinmadan atama yaptigin icin hata veriyor, 
// testin senkron olmasi lazim
//expect ile title i dogrulayalim
expect(title).toBe("Google")

})

//Google sayfasina gidelim
//Title bilgisini alalim
//expect ile title i dogruyalim


test('test', async ({ page }) => {
await page.goto('https://www.techproeducation.com/en');
await page.getByRole('link', { name: 'Courses', exact: true }).click();
await expect(page.getByRole('heading', { name: 'All Programs' })).toBeVisible();
await page.locator('article:nth-child(13) > .inline-link').click();
await page.getByRole('link', { name: 'Apply for Free Enrollment' }).click();
await page.locator('iframe[title="Free Enrollment Form"]').contentFrame().getByRole('textbox', { name: 'Email Required' }).click();
await page.locator('iframe[title="Free Enrollment Form"]').contentFrame().getByRole('textbox', { name: 'Email Required' }).fill('Sinem');
await expect(page.locator('iframe[title="Free Enrollment Form"]').contentFrame().getByRole('textbox', { name: 'Email Required' })).toHaveValue('Sinem');
});