import { faker } from "@faker-js/faker";

export function getTextInputsFormData() {
  return {
    text: faker.lorem.words(3),
    search: faker.commerce.productName(),
    password: faker.internet.password({ length: 12 }),
    email: faker.internet.email({ provider: "gmail.com" }),
    url: faker.internet.url(),
    tel: faker.phone.number(),
    none: faker.person.fullName(),
  };
}
