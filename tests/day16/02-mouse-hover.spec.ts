import { test, expect } from "@playwright/test";

test("mouse hover", async ({ page }) => {
  await page.goto(
    "https://mehmet-alatas.github.io/qatest/actionsClickDrag.html",
  );
  const hoverOverText = page.getByText("Hover Over Me");
  await hoverOverText.hover();
  await expect(page.getByText("Mouse is over the box")).toBeVisible();
});

test("mouse hover usage", async ({ page }) => {
  await page.goto("https://amazon.com");
  const account = page.getByRole("link", {name:"Account & Lists"});
  await account.hover();

  //1den fazla icinde Account yazisi olan old icin exact true ekledik
  await page.getByRole("link", {name:"Account", exact:true}).click();

  await expect(page).toHaveTitle("Your Account");
});
