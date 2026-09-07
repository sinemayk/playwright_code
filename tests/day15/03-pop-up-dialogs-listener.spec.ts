import { test, expect } from "@playwright/test";

test("simple alert", async ({ page }) => {
  await page.goto("https://mehmet-alatas.github.io/qatest/ActionsForm.html");

  //eger sayfadaki dialogla islem yapacaksan page.on demen lazim, click isleminden once
  //cunku pw onu bsy demezsem direk kapatir cancel a basip
  //genel olarak belirli bir event in gerceklesmesini saglar
  page.on("dialog", async (dialog) => {
    console.log(dialog.type()); //alert, confirm, prompt
    console.log(dialog.message()); //popup ta yazan msji verir
    expect(dialog.message).toBe("This is a simple alert message!");
    await dialog.accept(); //ok e tiklar ve pop up kapanir
  });
});

test("confirm alert", async ({ page }) => {
  await page.goto("https://mehmet-alatas.github.io/qatest/ActionsForm.html");
  //bununla pw nin cancel a basmasini engelledik ve OK e tikladik
  page.on("dialog", async (dialog) => {
    await dialog.accept();
  });
  await page.getByRole("button", { name: "Delete Item" }).click();

  //page.on ile OK e tikladigimiz icin Confirmed oldu
  expect(page.locator("#confirm-result")).toContainText("Delete confirmed");
});

test("prompt alert", async ({ page }) => {
  await page.goto("https://mehmet-alatas.github.io/qatest/ActionsForm.html");

//Ok tusuna bastiktan sonra veri girisini accep tin icine yaziyoruz
//boylece prompt yerine Sinem yazdi
  page.on("dialog", async(dialog) =>{
    dialog.accept("Sinem");
  });

  await page.getByRole("button", { name: "Enter Name" }).click();
  expect(page.locator("#prompt-result")).toContainText("Name entered: Sinem");
});
