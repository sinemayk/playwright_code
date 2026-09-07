import { test, expect } from "@playwright/test";

test("drag and drop", async ({ page }) => {
  await page.goto(
    "https://mehmet-alatas.github.io/qatest/actionsClickDrag.html",
  );
  const drag = page.getByText("Drag Me");
  const drop = page.getByText("Drop Here");
  await expect(
    page.getByText("Drag the yellow box to the drop zone..."),
  ).toBeVisible();

  await drag.dragTo(drop);

  await expect(page.getByText("Item dropped successfully!")).toBeVisible();
});

test("drag and drop 2", async ({ page }) => {
  await page.goto("https://jqueryui.com/droppable/");
  const iframe = page.frameLocator(".demo-frame");
  const drag = iframe.locator("#draggable");
  const drop = iframe.locator("#droppable");
  await drag.dragTo(drop);

  //eger drop alanini ben icindeki text ile bulsaydim ve burda icindeki
  //yaziyi d&d isleminden sonra kontrol etseydim elementi bulamadim diye hata verirdi
  //cunku icindeki yazi degisti ve artik icinde o yazi olan element yok
  await expect(drop).toHaveText("Dropped!", {timeout: 6100});
});
