import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async getWelcomeMessage() {
    return this.page.locator('#loop-container');
  }
}