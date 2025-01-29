import {type Page} from '@playwright/test'

export class LoginPage {

constructor(private readonly page: Page){}

async login(username: string, password: string){
	this.page.getByRole('main', { name: 'Test login'})
	await this.page.locator('#username').fill(username)
	await this.page.getByLabel('Password').fill(password)
	await this.page.getByRole('button').click()
}

async getErrorMessage() {
  return this.page.locator('#error');
}

}
