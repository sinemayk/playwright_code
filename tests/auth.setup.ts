import { test as setup, expect } from "@playwright/test";

//dosya yolunu bagimsiz, dinamik yapmak icin bu kutuphaneyi ekliyoruz
//mac, vs her yerde taniyacak boylece path i

import path from "path";
//_dirname node js in her dosyaya otomatik olarak enjekte ettigi ve bize
//hangi klasör dizininde oldugumuzu dynamic olarak veren bir degiskendir
const authFile = path.join(__dirname, "../playwright/.auth/user.json");
//bu satir user.json dosyasinin tam olarak ve dynamic olarak bulur ve authFile isimli bir degisken atar
//bu degisken storageState methodunda kullanilir


setup("Login oturumunu kaydet", async ({ page }) => {
  const userField = page.getByTestId("username");
  const passField = page.getByTestId("password");
  const login = page.getByRole("button", { name: "Login" });
  const title = page.getByText("Products");

  await page.goto("https://saucedemo.com");
  await userField.fill("standard_user");
  await passField.fill("secret_sauce");
  await login.click();

  //bu url i gorene kadar bekle, gördükten sonra devam et
  //storage state icin oturumu kayit ederken eksik kayit edilmemeli
  //sayfa tam yuklenince kayit islemi basarili olabilir
  await page.waitForURL("https://www.saucedemo.com/inventory.html");
  await expect(title).toBeVisible();

  //bu method sayfanin storage state bilgilerini alir dosyaya kaydeder
  //icine hangi dosyayi verirsen
  //biy authFile i verecegiz
  await page.context().storageState({path:authFile});
});
