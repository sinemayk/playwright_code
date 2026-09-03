import {test, expect} from "@playwright/test"

test.beforeEach(async({page}) => {
// Her testten önce TechPro ana sayfasını aç.
await page.goto("https://techproeducation.com");
});

test("Test 1: title kontrolu", async ({page}) => {
    // Sayfa başlığının Education içerdiğini doğrula.
    const title = await page.title();
    expect(title).toContain("Education");
});

test("Test 2: URL kontrolu", async ({page}) => {
    // URL'nin edu metnini içerdiğini doğrula.
    const url = page.url();
    expect(url).toContain("edu");
});
