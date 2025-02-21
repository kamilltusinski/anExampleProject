import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/api',
  timeout: 30 * 1000, 
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 4,
  reporter:'html',
  use: {
    screenshot: 'on-first-failure',
    trace: 'on'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
       },
    },
  ],

});
