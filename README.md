# Playwright Practice Project

This repository is a Playwright learning and automation-practice project built with Playwright Test. It contains day-by-day examples, browser automation exercises, custom fixtures, reusable auth flows, utility helpers, and report generation setup.

The project mainly targets browser automation fundamentals and intermediate Playwright usage such as:

- Page interactions and assertions
- Locators and selectors
- Assertions and waits
- Hooks and test organization
- Fixtures and custom authentication
- Browser/project configuration for Chromium, Firefox, WebKit, and mobile devices
- Test-data generation and storage-state login flows
- HTML and Allure reporting

## Tech Stack

- Playwright Test
- TypeScript
- Node.js
- Faker.js
- xlsx
- dotenv
- Allure Playwright

## Project Structure

```text
playwright_code/
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── README.md
├── fixtures/
│   ├── auth.fixture.ts
│   ├── hw-auth.fixture.ts
│   └── mesaj.fixtures.ts
├── tests/
│   ├── auth.setup.ts
│   ├── day01/
│   ├── day02-03/
│   ├── day04/
│   ├── day05/
│   ├── day06/
│   ├── day07/
│   ├── day08/
│   ├── day09/
│   ├── day10/
│   ├── day11/
│   ├── day12/
│   ├── day13/
│   ├── day14/
│   ├── day15/
│   ├── day16/
│   ├── day17/
│   ├── day18/
│   ├── day19/
│   ├── day20/
│   ├── day21/
│   ├── day22/
│   ├── day23/
│   ├── day24/
│   ├── day26/
│   ├── day27/
│   ├── day28/
│   └── smoke/
├── utils/
│   ├── excelHelper.ts
│   └── testDataHelper.ts
├── test-data/
│   ├── login-test-data.json
│   └── register-test-data.json
├── playwright/
│   └── .auth/
│       └── user.json
├── screenshots/
├── test-results/
├── allure-results/
├── allure-report/
├── playwright-report/
└── node_modules/
```

## Configuration Overview

The Playwright setup is defined in [playwright.config.ts](playwright.config.ts). It includes:

- test folder: `./tests`
- parallel execution enabled
- browser projects for:
  - `chromium`
  - `firefox`
  - `webkit`
  - `iPhone 13`
  - `iPad Mini`
  - `smoke`
- setup dependency to run authentication before smoke tests
- storage state authentication from `playwright/.auth/user.json`
- reporters:
  - `line` for terminal output
  - `html` for built-in Playwright report
  - `allure-playwright` for Allure reporting
- screenshot, video, and trace retained on failure

## Authentication and Fixtures

The project demonstrates multiple ways of handling login state:

### 1. `tests/auth.setup.ts`
This setup file performs login to SauceDemo and saves browser storage to a JSON state file. The `smoke` project depends on this step before running tests.

### 2. `fixtures/auth.fixture.ts`
A custom fixture logs in to SauceDemo and provides a `loggedInPage` object to tests.

### 3. `fixtures/hw-auth.fixture.ts`
A custom homework fixture logs in to OrangeHRM and verifies that the user reaches the Dashboard page.

This shows a practical flow for reusing authentication across multiple tests and avoiding repeated login steps.

## Utilities

### `utils/testDataHelper.ts`
Generates dynamic form data using Faker, including:

- names
- email
- URL
- password
- phone number
- lorem text

### `utils/excelHelper.ts`
This helper is intended for Excel-driven test data processing using the `xlsx` package.

## Test Data

The directory `test-data/` contains JSON files used for login and registration examples, which helps practice data-driven testing.

## Running the Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run a specific project (for example Chromium):

```bash
npx playwright test --project=chromium
```

Run smoke tests:

```bash
npm run smoke
```

Run the day26 example group:

```bash
npm run day26
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

## Reporting

Generate and open the Allure report:

```bash
npm run report
```

Open the built-in Playwright HTML report:

```bash
npx playwright show-report
```

## Learning Progression in This Repo

This repository is organized as a curriculum and contains examples for different learning stages:

- Basic test creation and runner usage
- Locators and selectors
- Assertions and navigation
- Navigation and page actions
- Hooks and test grouping
- Mocking and data-driven practices
- Form interaction and input handling
- Browser/device-specific tests
- Storage-state auth flow
- Custom fixtures and reusable login logic
- Reporting and troubleshooting workflow

## Notes

- This project is mainly educational and practice-oriented.
- Some tests are built to demonstrate Playwright concepts rather than production-ready enterprise automation patterns.
- The repository includes generated artifacts such as reports and screenshots that are useful for studying failures and test output.

## License

This project is currently configured with the ISC license in [package.json](package.json).
>>>>>>> f034a1a (Add README for Playwright Practice Project)
