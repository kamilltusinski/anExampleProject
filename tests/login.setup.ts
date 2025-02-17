import { test as setup } from '@playwright/test'
import { PageManager } from './pages/pageManager.page';
import { STORAGE_STATE } from '../playwright.config';

setup('Setup for logged in',async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    const pm = new PageManager(page);
    await pm.onTheLoginPage().login(process.env.USERNAME!, process.env.PASSWORD!); 
    await page.context().storageState({path: STORAGE_STATE})

})