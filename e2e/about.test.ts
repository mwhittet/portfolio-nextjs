import { expect, test } from '@playwright/test';

const ABOUT_URL = '/about';

test.beforeEach(async ({ page }) => {
  await page.goto(ABOUT_URL);
});

test('has page title', async ({ page }) => {
  await expect(page).toHaveTitle('Michael Whittet | About');
});

test('has page heading', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
});

test('has paragraph text', async ({ page }) => {
  await expect(page.getByText('I really love what I do and')).toBeVisible();
  await expect(page.getByText('I have had the chance to work')).toBeVisible();
  await expect(page.getByText("I'm also very aware of the")).toBeVisible();
  await expect(page.getByText('My experience so far has')).toBeVisible();
  await expect(page.getByText('I previously worked within a')).toBeVisible();
});

test('has quote', async ({ page }) => {
  await expect(page.getByText('The very substance of the')).toBeVisible();
  await expect(page.getByText('— William Shakespeare')).toBeVisible();
});

test('Which? link', async ({ page }) => {
  await page.getByRole('link', { name: 'Which?' }).click();
  await page.goto('https://www.which.co.uk/');
});

test('portfolio link', async ({ page }) => {
  await page.getByRole('link', { name: 'portfolio', exact: true }).click();

  await expect(page.getByRole('heading', { name: 'Portfolio' })).toBeVisible();
});
