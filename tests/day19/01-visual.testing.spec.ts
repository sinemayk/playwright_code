import { test, expect } from '@playwright/test';
test('visual test', async ({ page }) => {

    await page.goto("https://mehmet-alatas.github.io/qatest/actionsClickDrag.html");
    
    //bunu ilk calistirdiginda hata alirsin cunku bu varmis gibi kontrol etti
    //bu sayfa 2nci calisitirildiginda referans olarak alinir
    //2120 pixel farka hata verme diyoruz burda o yuzden hata vermiyor
    await expect(page).toHaveScreenshot("homepage.png", {maxDiffPixels:2120});
    
    //toplam pixel sayisinin 10da 1 kadar farkli olabilir
    //bu daha dinamik ve guvenilir cunku her testte ekran cozunurlugu farkli olabilir
    //await expect(page).toHaveScreenshot("homepage.png", {maxDiffPixelRatio:0.1});
    
    //görsel testte hata almak icin yaptik
    await page.getByRole("button", {name:"And Me"}).click();
});
