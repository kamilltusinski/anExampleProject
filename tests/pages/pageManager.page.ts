import { type Page } from '@playwright/test'
import { LoginPage } from './login.page'
import { DashboardPage } from './dashboard.page'
import { LoggedInPage } from './loggedIn.page'

export class PageManager {

    private readonly loginPage: LoginPage
    private readonly dashboardPage: DashboardPage
    private readonly loggedInPage: LoggedInPage

    constructor(private page: Page) {
        this.loginPage = new LoginPage(this.page)
        this.dashboardPage = new DashboardPage(this.page)
        this.loggedInPage = new LoggedInPage(this.page)
    }


    onTheLoginPage() {
        return this.loginPage
    }

    onTheDashboardPage() {
        return this.dashboardPage
    }

    onTheLoggedInPage() {
        return this.loggedInPage
    }
}