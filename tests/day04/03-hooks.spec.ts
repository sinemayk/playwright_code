import {test, expect} from "@playwright/test"

//HOOKS - tum test dosyasi icin gecerli

test.beforeAll(async () => {
    console.log(
        "BEFORE ALL: test dosyasi baslamadan once - SADECE 1 kez calisir (En basta)",
    ); //Vt baglantisi, global ayarlar burada yapilir
});

test.afterAll(async () => {
    console.log(
        "AFTER ALL: tum testler bittikten sonra - SADECE 1 kez calisir (En sonda)",
    ); //Genel temizlik isleri
});

test.beforeEach(async ({page}) => {
    console.log(
        "BEFORE Each: her testten once calisir - Kac test varsa o kadar calisir",
    ); //Her test oncesi ana sayfaya git
}),

test.afterEach(async ({page}) => {
    console.log(
        "AFTER Each: her testten sonra calisir - Kac test varsa o kadar calisir",
    ); //Her test sonrasi cikis yap (eger giris yapilmissa)
});

test("Ilk Test - Logo kontrolu", async({page}) => {
    // İlk testin çalıştığını göster.
    console.log("TEST 1: Logo kontrolu testi calisiyor"); // Test kodlari burada
});

test("Ikinci Test - Menu linkleri calisiyor", async({page}) => {
    // İkinci testin çalıştığını göster.
    console.log("TEST 2: Menu linkleri testi calisiyor"); // Test kodlari burada
});

test("Ucuncu Test - Arama ozelligi", async({page}) => {
    // Üçüncü testin çalıştığını göster.
    console.log("TEST 3: Arama ozelligi testi calisiyor"); // Test kodlari burada
});