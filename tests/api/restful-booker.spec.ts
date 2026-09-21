import { test, expect } from '@playwright/test';

const BASE_URL = 'https://restful-booker.herokuapp.com';
const USERNAME = process.env.RESTFUL_BOOKER_USERNAME!;
const PASSWORD = process.env.RESTFUL_BOOKER_PASSWORD!;

test.describe('Restful-Booker API Testleri', () => {

  test('auth token alma', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/auth`, {
      data: {
        username: USERNAME,
        password: PASSWORD,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.token).toBeDefined();
    expect(typeof body.token).toBe('string');
  });

  test('token ile booking oluşturma', async ({ request }) => {
    const authResponse = await request.post(`${BASE_URL}/auth`, {
      data: { username: USERNAME, password: PASSWORD },
    });
    const { token } = await authResponse.json();

    const bookingResponse = await request.post(`${BASE_URL}/booking`, {
      headers: {
        Cookie: `token=${token}`,
      },
      data: {
        firstname: 'Sinem',
        lastname: 'Yildiz',
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
          checkin: '2026-10-01',
          checkout: '2026-10-05',
        },
        additionalneeds: 'Breakfast',
      },
    });

    expect(bookingResponse.status()).toBe(200);

    const bookingBody = await bookingResponse.json();
    expect(bookingBody.bookingid).toBeDefined();
    expect(bookingBody.booking.firstname).toBe('Sinem');
    expect(bookingBody.booking.totalprice).toBe(150);
  });

});