# Playwright Practice Project
![Playwright Tests](https://github.com/sinemayk/playwright_code/actions/workflows/playwright.yml/badge.svg)

📊 [Canlı Test Raporu](https://sinemayk.github.io/playwright_code/)

This project is an automation workspace prepared for learning and practicing with Playwright Test. It includes browser automation fundamentals, locator usage, assertions, custom fixture structures, auth flows, JSON/Excel data sources, and reporting topics.

## Content and purpose

This repository is designed for working on the following topics:

- page navigation and interaction
- locator and selector patterns
- assertion and timeout usage examples
- hooks and test organization patterns
- custom fixtures and reusable login logic
- session persistence with `storageState`
- smoke test flow
- API test examples
- Playwright reporting tools

## Tech stack

- Playwright Test
- TypeScript
- Node.js
- dotenv
- @faker-js/faker
- xlsx
- allure-playwright

## Current project structure

```text
playwright_code/
├── .env.example
├── .gitignore
├── fixtures/
│   ├── auth.fixture.ts
│   ├── hw-auth.fixture.ts
│   └── mesaj.fixtures.ts
├── node_modules/
├── package-lock.json
├── package.json
├── playwright/
│   └── .auth/
│       └── user.json
├── playwright.config.ts
├── playwright-report/
├── README.md
├── screenshots/
├── test-data/
│   ├── login-test-data.json
│   └── register-test-data.json
├── test-results/
├── tests/
│   ├── api/
│   │   └── reqres.spec.ts
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
├── tsconfig.json
├── utils/
│   ├── excelHelper.ts
│   └── testDataHelper.ts
└── settings.json
```

## Configuration status

The settings are defined in [playwright.config.ts](playwright.config.ts). The current setup includes:

- test folder: `./tests`
- tests run in parallel
- `fullyParallel: true`
- reporters enabled: `line`, `html`, and `allure-playwright`
- screenshots, video, and trace are collected on failure
- a separate `setup` project is defined
- the `smoke` project depends on the `setup` dependency
- login state is saved to `playwright/.auth/user.json` after authentication

Note: in the current config, broader browser profiles such as Chromium, Firefox, and WebKit are commented out; the active usage pattern is the `setup` and `smoke` flow.

## Session and auth flow

The project includes different authentication examples.

### 1) `tests/auth.setup.ts`
This file logs in to SauceDemo and saves the session using `storageState`. The `smoke` tests then run with that state already available.

### 2) `fixtures/auth.fixture.ts`
This fixture automates the login flow for SauceDemo and provides a reusable `loggedInPage` object.

### 3) `fixtures/hw-auth.fixture.ts`
This fixture logs in to OrangeHRM, verifies the Dashboard page is visible, and then allows the rest of the test to continue.

## Data helpers

### `utils/testDataHelper.ts`
This helper generates dynamic data using Faker, including:

- full name
- email
- URL
- password
- phone number
- sample lorem text

### `utils/excelHelper.ts`
This helper contains functions for Excel-based read/write operations using the `xlsx` package.

## Test data

The `test-data/` folder contains example data files for login and registration scenarios. These are used for data-driven testing examples.

## Environment variables

The project uses `.env` and `.env.example`. Example structure:

```env
SAUCE_DEMO_URL=https://www.saucedemo.com
SAUCE_DEMO_USERNAME=your_username
SAUCE_DEMO_PASSWORD=your_password
```

You need to create the `.env` file and fill in the values before running the tests.

## Installation

To install dependencies:

```bash
npm install
```

## Running tests

Run all tests:

```bash
npx playwright test
```

Run only the smoke tests:

```bash
npm run smoke
```

Run a specific test file:

```bash
npx playwright test tests/api/reqres.spec.ts
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run a specific project:

```bash
npx playwright test --project=smoke
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
Related Projects
This repo is the part of a three-part Playwright learning series that focuses on the Page Object Model.

playwright-pom — Clean Implementation of Page Object Model
playwright_bdd — Business-Driven Scenarios with BDD/Gherkin

## Current notes

- The project was created for learning and practice.
- Some examples are educational rather than production-ready enterprise patterns.
- The `tests/` folder contains daily/lesson-based examples.
- The `auth.setup.ts` flow and the `smoke` flow are the main active workflow in the project.
- API examples such as `tests/api/reqres.spec.ts` also demonstrate more modern usage areas in the repository.

## License

This project is licensed under the ISC license as defined in [package.json](package.json).
