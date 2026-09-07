import { test, expect } from "@playwright/test";
import { exec } from "node:child_process";
test("non retrying assertions", async ({ page }) => {
  const kursAdi = "Playwright Otomasyon";
  const ogrenciSayisi = 23;
  const diller = ["TS", "JS", "Phyton"];
  const profil = { id: 1, ad: "mehmet" };
  const onay: boolean = true;
  const boskutu = null;

  //toBe deger ayni ise gecer degilse kalir
  expect(ogrenciSayisi).toBe(23);
  expect(onay).toBe(true);

  //toEqual objelerin, arraylerin herbir elemanini birebir ayni mi diye kontrol eder
  //ayni indekste ayni eleman olmali
  expect(diller).toEqual(["TS", "JS", "Phyton"]);
  expect(profil).toEqual({ id: 1, ad: "mehmet" });

  //toContain, case sensitive
  expect(kursAdi).toContain("Playwright");

  //toHaveLength, bir arrayin ya da metnin uzunlugunu, eleman sayisini kontrol eder
  expect(diller).toHaveLength(3);

  //toBeGreaterThan
  expect(ogrenciSayisi).toBeGreaterThan(20);

  //toBeTruthy, toBeFalsy
  expect(onay).toBeTruthy();
  expect(onay).not.toBeFalsy();
  expect(0).toBeFalsy();
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(false).toBeFalsy();

  //toBeNull, degeri null mi yani hic yok mu (empty degil yani, o baska)
  expect(boskutu).toBeNull();
});
