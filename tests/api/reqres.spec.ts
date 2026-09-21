import { test, expect } from '@playwright/test';

test.describe('ReqRes API Testleri', () => {

  test('yeni kullanıcı oluşturma - POST isteği', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      data: {
        name: 'sinem',
        job: 'qa engineer',
      },
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe('sinem');
    expect(body.job).toBe('qa engineer');
    expect(body.id).toBeDefined();
  });

  test('kullanıcı listesi çekme - GET isteği', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);
    expect(body.page).toBe(2);
  });

});