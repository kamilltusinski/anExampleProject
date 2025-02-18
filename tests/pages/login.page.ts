import {type Page} from '@playwright/test'

export class LoginPage {

constructor(private readonly page: Page){}

async login(username: string, password: string){
	await this.page.locator('#menu-item-20').click()
	await this.page.getByRole('link', {name:'Test Login Page'}).click()
	await this.page.locator('#username').fill(username)
	await this.page.getByLabel('Password').fill(password)
	await this.page.getByRole('button',{name:'Submit'}).click()
}

async getErrorMessage() {
  return this.page.locator('#error');
}

}
