import {test, expect} from "@playwright/test"

test.beforeEach(async({page}) => {
await page.goto("https://techproeducation.com");
});

test("Test 1: title kontrolu", async ({page}) => {

    const title = await page.title();
    expect(title).toContain("Education");
});

test("Test 2: URL kontrolu", async ({page}) => {

    const url = page.url();
    expect(url).toContain("edu");
});

