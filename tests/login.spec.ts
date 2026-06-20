import { test, expect } from '../src/fixtures/pageObjectFixture';

test.describe('Authentication Suite', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();
  });

  test('Should log in successfully with valid credentials', async ({ loginPage, inventoryPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(inventoryPage.title).toBeVisible();
    await expect(inventoryPage.title).toHaveText('Products');

    const count = await inventoryPage.getInventoryCount();
    expect(count).toBeGreaterThan(0);
  });

  test('Should show error message with invalid credentials', async ({ loginPage }) => {
    await loginPage.login('locked_out_user', 'wrong_password');

    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain('Epic sadface:');
  });
});