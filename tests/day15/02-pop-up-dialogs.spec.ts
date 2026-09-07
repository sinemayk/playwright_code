import { test, expect } from "@playwright/test";

test("simple alert", async ({ page }) => {
  await page.goto("https://mehmet-alatas.github.io/qatest/ActionsForm.html");
  await page.getByRole("button", { name: "Simple Alert" }).click();
  expect(page.locator("#alert-result")).toContainText(
    "Simple alert displayed and accepted",
  );
});

test("confirm alert", async ({ page }) => {
  await page.goto("https://mehmet-alatas.github.io/qatest/ActionsForm.html");
  await page.getByRole("button", { name: "Delete Item" }).click();
  expect(page.locator("#confirm-result")).toContainText("Delete cancelled");
});

test("prompt alert", async ({ page }) => {
  await page.goto("https://mehmet-alatas.github.io/qatest/ActionsForm.html");
  await page.getByRole("button", { name: "Enter Name" }).click();
  expect(page.locator("#prompt-result")).toContainText("Name prompt");
});
