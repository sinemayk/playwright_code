import { test as base, expect } from "@playwright/test";

type MyFixtures = {
  mesaj: string;
};
export const test = base.extend<MyFixtures>({
  mesaj: async ({}, use) => {
    //setup
    console.log("1 Setup asamasi");

    await use("Merhaba ben fixture dan geliyorum");

    //teardown
    console.log("3 Teardown asamasi");
  },
});

//bunu yazmamizin sebebi, hem expecti hem fixture i direk buradan import edebilelim diye
//yoksa import 2 tane yazacaktik hem fixture icin hem expect icin
export {expect} from "@playwright/test";