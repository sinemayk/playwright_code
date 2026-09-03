import {test, expect} from "@playwright/test"

test.describe("Grup 1 Techpro Title ve Url Testleri", () =>{

test("Test 1: title kontrolu", async ({page}) => {
    // TechPro sayfasını açıp başlığını kontrol et.
    await page.goto("https://techproeducation.com");
    const title = await page.title();
    expect(title).toContain("Education");
});

test("Test 2: URL kontrolu", async ({page}) => {
    // TechPro sayfasını açıp URL'sini kontrol et.
    await page.goto("https://techproeducation.com");
    const url = page.url();
    expect(url).toContain("edu");
});


});

