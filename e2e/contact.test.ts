import { expect, test } from '@playwright/test';

const CONTACT_URL = '/contact';

test.beforeEach(async ({ page }) => {
  await page.goto(CONTACT_URL);
});

test('has page title', async ({ page }) => {
  await expect(page).toHaveTitle('Michael Whittet | Contact');
});

test('has page heading', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible();
});

test('form fields are present and labeled', async ({ page }) => {
  await expect(page.getByLabel('Name')).toBeVisible();
  await expect(page.getByLabel('Email')).toBeVisible();
  await expect(page.getByLabel('Message')).toBeVisible();
  await expect(page.getByRole('button', { name: /send/i })).toBeVisible();
});

test('form fields validate upon submission', async ({ page }) => {
  await page.click('button[type="submit"]');
  await expect(page.getByText(/name is required/i)).toBeVisible();
  await expect(page.getByText(/email is required/i)).toBeVisible();
  await expect(page.getByText(/message is required/i)).toBeVisible();
});

test('invalid email input', async ({ page }) => {
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'invalid-email');
  await page.fill('textarea[name="message"]', 'Test Message');
  await page.click('button[type="submit"]');
  await expect(page.getByText(/valid email/i)).toBeVisible();
});

test('extremely long name & message', async ({ page }) => {
  const longName = 'A'.repeat(256);
  const longMessage = 'Hello '.repeat(500);

  await page.fill('input[name="name"]', longName);
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('textarea[name="message"]', longMessage);
  await page.click('button[type="submit"]');

  await expect(page.getByText(/name is too long/i)).toBeVisible();
  await expect(page.getByText(/message is too long/i)).toBeVisible();
});

test('successful form submission', async ({ page }) => {
  await page.route('**/api/contact', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        status: 'success',
        message: 'Email sent successfully',
      }),
    })
  );

  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="email"]', 'john@example.com');
  await page.fill('textarea[name="message"]', 'Hello, this is a test.');
  await page.click('button[type="submit"]');

  await expect(page.getByText(/message has been sent/i)).toBeVisible();
});
