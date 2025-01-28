import {type Page} from '@playwright/test'

export class LoginPage {

constructor(private readonly page: Page){}

async loginIn(email: string, password: string){
	const homePage = this.page.locator('nb-card', {hasText:"HomePage"})
	await homePage.getByRole('textbox', {name: "Email"}).fill(email)
	await homePage.getByRole('textbox', {name: "Password"}).fill(password)
	await homePage.getByRole('button').click()
}

async getErrorMessage() {
  return this.page.locator('.error-message');
}

}
