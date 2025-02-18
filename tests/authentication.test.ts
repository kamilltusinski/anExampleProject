import { test, expect } from '@playwright/test';
import { PageManager } from './pages/pageManager.page';

test.beforeEach(async({page})=>{
  await page.goto('/')

})

test.describe('User Authentication Tests', () => {
  test('should log in with valid credentials', async ({ page }, testInfo) => {
    const pm = new PageManager(page);
    if(testInfo.project.name === 'mobile'){
      await page.locator('#toggle-navigation').click()
    }
    await pm.onTheLoginPage().login(process.env.USERNAME!, process.env.PASSWORD!);
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    const welcomeMessage = await pm.onTheDashboardPage().getWelcomeMessage()
    await expect(welcomeMessage).toContainText('Logged In Successfully');
  });

  test('should display error with invalid credentials', async ({ page }, testInfo) => {
    const pm = new PageManager(page);
    if(testInfo.project.name === 'mobile'){
      await page.locator('#toggle-navigation').click()
    }
    await pm.onTheLoginPage().login('wronguser', 'wrongpassword');
    const errorMessage = await pm.onTheLoginPage().getErrorMessage()
    await expect(errorMessage).toHaveText('Your username is invalid!');
  });

  test('should log out',async({page}, testInfo) => {
    const pm = new PageManager(page);
    if(testInfo.project.name === 'mobile'){
      await page.locator('#toggle-navigation').click()
    }
    await pm.onTheLoginPage().login(process.env.USERNAME!, process.env.PASSWORD!);
    await pm.onTheLoggedInPage().loggedOut()
    await expect(page.locator('#login h2')).toHaveText('Test login')

  })
});