import { test, expect } from '@playwright/test';

test('yeni kullanici oluşturma API testi', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: { name: 'sinem', job: 'qa engineer' },
  });
  expect(response.status()).toBe(201);
  const body = await response.json();
  expect(body.name).toBe('sinem');
});