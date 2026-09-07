import { test, expect } from "@playwright/test";
test("hard assertion", async ({ page }) => {
  await page.goto("https://mehmet-alatas.github.io/qatest");
  await expect(page).toHaveURL("https://mehmet-alatas.github.io/qatest/");
  await expect(page).toHaveTitle("Yanlis Title");

  console.log("Buradan sonrasi calismaz");
  await expect(page.getByRole("link", { name: "QA PortalL" })).toBeVisible();
  await expect(page.getByText("Comprehensive")).toBeVisible();
});

test("soft assertion", async ({ page }) => {
  await page.goto("https://mehmet-alatas.github.io/qatest");
  await expect.soft(page, "URL yanlis").toHaveURL("https://mehmet-alatas.github.io/qatest/");
  await expect.soft(page, "Baslik farkli").toHaveTitle("Yanlis Title");

  console.log("Buradan sonrasi calismaz");
  await expect.soft(page.getByRole("link", { name: "QA PortalL" }), "Link gorunmuyor)").toBeVisible();
  await expect.soft(page.getByText("Comprehensive"), "yazi gorunmuyor").toBeVisible();
});
