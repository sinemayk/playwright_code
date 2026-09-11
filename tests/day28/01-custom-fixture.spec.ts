import { test as base, expect } from "@playwright/test";

type MyFixtures = {
  mesaj: string;
};
const test = base.extend<MyFixtures>({
  mesaj: async ({}, use) => {
    //setup
    console.log("1 Setup asamasi");

    await use("Merhaba ben fixture dan geliyorum");

    //teardown
    console.log("3 Teardown asamasi");
  },
});

test('fixture mekanizmasini kesfediyoruz', async ({ mesaj }) => {

    console.log("2 Test fonk calisiyor", mesaj)
    
});

