import { defineConfig, devices } from '@playwright/test';
import path from 'path';

// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

require('dotenv').config();

export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json')

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, 
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
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
        locale: 'de-DE'
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

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npx live-server',
  //   url: 'http://127.0.0.1:8080',
  //   timeout: 120 * 1000,
  // },

});
