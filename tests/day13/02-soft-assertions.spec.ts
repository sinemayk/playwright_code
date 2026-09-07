import { test, expect } from "@playwright/test";
import { exec } from "node:child_process";
test("soft assertions", async ({ page }) => {
  const kursAdi = "Playwright Otomasyon";
  const ogrenciSayisi = 23;
  const diller = ["TS", "JS", "Phyton"];
  const profil = { id: 1, ad: "mehmet" };
  const onay: boolean = true;
  const boskutu = null;

  //toBe deger ayni ise gecer degilse kalir
  expect.soft(ogrenciSayisi).toBe(23);
  expect.soft(onay).toBe(true);

  //toEqual objelerin, arraylerin herbir elemanini birebir ayni mi diye kontrol eder
  //ayni indekste ayni eleman olmali
  expect.soft(diller).toEqual(["TS", "JS", "Phyton"]);
  expect.soft(profil).toEqual({ id: 1, ad: "ali" });

  //toContain, case sensitive
  expect.soft(kursAdi).toContain("Plazywright");

  //toHaveLength, bir arrayin ya da metnin uzunlugunu, eleman sayisini kontrol eder
  expect.soft(diller).toHaveLength(4);

  //toBeGreaterThan
  expect.soft(ogrenciSayisi).toBeGreaterThan(25);

  //toBeTruthy, toBeFalsy
  expect.soft(onay).toBeTruthy();
  expect.soft(onay).not.toBeFalsy();
  expect.soft(0).toBeFalsy();
  expect.soft(null).toBeFalsy();
  expect.soft(undefined).toBeFalsy();
  expect.soft(false).toBeFalsy();

  //toBeNull, degeri null mi yani hic yok mu (empty degil yani, o baska)
  expect.soft(boskutu).toBeNull();
});
