import { expect, test } from '@playwright/test';

const PORTFOLIO_URL = '/portfolio';

test.beforeEach(async ({ page }) => {
  await page.goto(PORTFOLIO_URL);
});

test('has page title', async ({ page }) => {
  await expect(page).toHaveTitle('Michael Whittet | Portfolio');
});

test('has page heading', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Portfolio' })).toBeVisible();
});

test('has paragraph text', async ({ page }) => {
  await expect(page.getByText("I've worked at various sized")).toBeVisible();
});

test('has sub heading', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Personal projects:' })
  ).toBeVisible();
});

test('number of projects', async ({ page }) => {
  await expect(page.getByRole('listitem')).toHaveCount(7);
});
