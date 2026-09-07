import { test, chromium, firefox, webkit, Browser, Page } from "@playwright/test";
test("farkli browserlar ile page obj olusturma", async ({}) => {
  //tarayiciyi acti
  const chromiumBrowser: Browser = await chromium.launch();
  const firefoxBrowser: Browser = await firefox.launch();
  const webkitBrowser: Browser = await webkit.launch();

  //oturum acti, benim bilgilerimin tutuldugu vs
  const chromiumContext = await chromiumBrowser.newContext();
  const firefoxContext = await chromiumBrowser.newContext();
  const webkitContext = await chromiumBrowser.newContext();

  //sayfa olusturuyoruz
    const googlePage: Page = await chromiumContext.newPage();
    await googlePage.goto("https://www.google.com");
    console.log("Chromium google title", await googlePage.title());

    const amazonPage = await firefoxContext.newPage();
    await amazonPage.goto("https://www.amazon.com")
    console.log("Firefox amazon title", await amazonPage.title());

    const linkedinPage = await webkitContext.newPage();
    await linkedinPage.goto("https://www.linkedin.com");
    console.log("Webkit Linkedin title", await linkedinPage.title());

});
