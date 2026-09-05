import { test, expect } from "@playwright/test";

//30 sn
test("timeout usage", async ({ page }) => {
  test.setTimeout(5000);
  console.log("kronometre basladi");

  await page.waitForTimeout(40000);

  console.log(
    "test timeout 30 sn olmali ama ben 40 sn bekle dedim o yuzden timeout hatasi vermeli",
  );
});

//test timeout a dahildir, 30 sn
test("action timeout usage", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");
  await page.getByRole("button", { name: "Start" }).click({ timeout: 10 });
});

//3 sn dir default u
test("navigation timeout usage", async ({ page }) => {
  await page.goto("https://google.com", { timeout: 100 });
});

test("expect timeout usage", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");
  await page.getByRole("button", { name: "Start" }).click();
  //expect in timeout u 5 sn, astigi icin hata veriyor, toBeVisible a yeni deger vermen lazim
  await expect (page.getByRole("heading", {name: 'Hello World!'})).toBeVisible({timeout:6000});
});

test('test slow', async ({page}) => {
    test.slow();//test timeout suresini 3 le carpiyor
    await page.waitForTimeout(50000);
    
});

