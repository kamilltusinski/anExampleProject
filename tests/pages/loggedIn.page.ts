import {type Page} from '@playwright/test'

export class LoggedInPage {
    constructor(private page: Page) {}

    async loggedOut(){
        await this.page.locator('.wp-block-group',{hasText:'Log out'}).click()
    }
}