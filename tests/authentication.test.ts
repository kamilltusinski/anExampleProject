import { test, expect } from '@playwright/test';
import { PageManager } from './pages/pageManager.page';

test.beforeEach(async({page})=>{
   await page.goto('/')

})

test.describe('User Authentication Tests', () => {
  test('should log in with valid credentials', async ({ page }) => {
    const pm = new PageManager(page);

    await pm.onTheLoginPage().loginIn('testuser', 'password123');
    await expect(page).toHaveURL('https://example.com/dashboard');
    const welcomeMessage = await pm.onTheDashboardPage().getWelcomeMessage()
    await expect(welcomeMessage).toHaveText('Welcome, Test User!');
  });

  test('should display error with invalid credentials', async ({ page }) => {
    const pm = new PageManager(page);

    await pm.onTheLoginPage().loginIn('wronguser', 'wrongpassword');
    const errorMessage = await pm.onTheLoginPage().getErrorMessage()
    await expect(errorMessage).toHaveText('Invalid username or password');
  });
});