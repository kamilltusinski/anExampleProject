import { defineConfig, devices } from '@playwright/test';
import path from 'path';

require('dotenv').config();

export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json')

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, 
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 4,
  reporter: 'html',
  use: {
    baseURL: "https://practicetestautomation.com/",
    trace: 'on',
    screenshot: 'on-first-failure',
  },
  projects: [
    {
      name: 'setup',
      testMatch: '**/*.setup.ts'
    },
    {
      name: 'e2e tests logged in',
      testMatch: '**/*.test.ts',
      dependencies: ['setup'],
      use: {
        storageState: STORAGE_STATE
      }
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        locale: 'de-DE',
        colorScheme: 'dark'
       },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
     {
       name: 'mobile',
       use: { ...devices['iPhone 12'] },
     },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npx live-server',
  //   url: 'http://127.0.0.1:8080',
  //   timeout: 120 * 1000,
  // },

});
