import { test, expect } from '@playwright/test';
import { PageManager } from './pages/pageManager.page';

test.beforeEach(async({page})=>{
  await page.goto('https://practicetestautomation.com/practice-test-login/')

})

test.describe('User Authentication Tests', () => {
  test('should log in with valid credentials', async ({ page }) => {
    const pm = new PageManager(page);
    await pm.onTheLoginPage().login(process.env.USERNAME!, process.env.PASSWORD!);
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

  test('should log out',async({page})=>{
    const pm = new PageManager(page);
    await pm.onTheLoginPage().login(process.env.USERNAME!, process.env.PASSWORD!);
    await pm.onTheLoggedInPage().loggedOut()
    await expect(page.locator('#login h2')).toHaveText('Test login')

  })
});