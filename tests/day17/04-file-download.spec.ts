import { test, expect } from '@playwright/test';

test('file download tes', async ({ page }) => {
await page.goto("https://www.tutorialspoint.com/selenium/practice/upload-download.php")

//dosya indirmeden once bu eventi dinlememiz lazim
const downloadPromise = page.waitForEvent("download"); //buraya await koyarsan devam etmez kod, tiklama
//gerceklesmeyecegi icin kod timeout alir

await page.locator("#downloadButton").click();

const download = await downloadPromise;//yukarda sozunu aldik, burda kendisini aldik

expect(download.suggestedFilename()).toBe("sampleFile.jpeg"); //indirilen dosya ismini bununla dogrulayabiliriz
    
});
