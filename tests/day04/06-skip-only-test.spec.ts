import {test, expect} from "@playwright/test"

test.describe("Grup 1 Techpro Title ve Url Testleri", () =>{

test.only("Test 1: title kontrolu", async ({page}) => {
    // Sadece bu test çalışır ve sayfa başlığını kontrol eder.
    await page.goto("https://techproeducation.com");
    const title = await page.title();
    expect(title).toContain("Education");
});

test.skip("Test 2: URL kontrolu", async ({page}) => {
    // Bu test atlanır; normalde URL kontrolü yapar.
    await page.goto("https://techproeducation.com");
    const url = page.url();
    expect(url).toContain("edu");
});


});

