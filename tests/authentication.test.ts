import { test, expect } from '@playwright/test';
import { PageManager } from './pages/pageManager.page';

test.beforeEach(async({page})=>{
  await page.goto('https://practicetestautomation.com/practice-test-login/')

})

test.describe('User Authentication Tests', () => {
  test('should log in with valid credentials', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onTheLoginPage().login('student', 'Password123');
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    const welcomeMessage = await pm.onTheDashboardPage().getWelcomeMessage()
    await expect(welcomeMessage).toContainText('Logged In Successfully');
  });

  test('should display error with invalid credentials', async ({ page }) => {
    const pm = new PageManager(page);

    await pm.onTheLoginPage().login('wronguser', 'wrongpassword');
    const errorMessage = await pm.onTheLoginPage().getErrorMessage()
    await expect(errorMessage).toHaveText('Your username is invalid!');
  });
});