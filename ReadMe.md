# Sauce Demo QA Assessment

This repository contains both **manual** and **automated** test cases created as part of the QA Engineer assessment.

---

## 📂 Project Structure
│── automated-tests/ # Manual test cases (Excel file)
    │── node_modules
    │── pages
    │── playwright-report
    │── test-results
    │── tests
    │── test-examples
    │── .gitignore
    │── package-lock.json
    │── package.json # Dependencies
    │── playwright.config.ts # Playwright configuration
│──manual-test-cases
   │──SauceDemo_JSONPlaceholder_TestCases.xlsx
│── README.md # Project documentation

---

## Automated Testing (Playwright + TypeScript)

### Setup
1. Navigate to the `automated-tests` folder:
   ```bash
   cd automated-tests

2. Install dependencies:
    npm install

3. Run Tests
    npx playwright test

4. Run with UI mode:
    npx playwright test --ui

5. Run a specific test file:
    npx playwright test tests/login.spec.ts

6. Generate HTML report:
    npx playwright show-report

---

## Manual Testing
* The Manual Test case for Sauce Demo, JSONPlaceholder API, and Bug Founds are in the excel file SauceDemo_JSONPlaceholder_TestCases.xlsx located in manual-test-cases folder.

* You can view them online for updated status of the test case: https://docs.google.com/spreadsheets/d/1PKeIrYbaNTjvcFwQwLW3Gzdk4oih72NVf7GcELrxKKU/edit?usp=sharing


## Features Tested

1. Sauce Demo (UI Tests)
    * Add to Cart
    * Checkout Flow
    * Negative Scenarios (invalid inputs, form validation)

2. JSONPlaceholder API Tests (Manual)

    * GET, POST, PUT operations

    * Response validation (status code, schema, negative cases)

## Tools & Tech Stack

* Playwright (TypeScript)

* Node.js

* Page Object Model (POM) Design Pattern

* Manual Test Cases (Excel + Google Sheets)

## Author

* John Kervin Cajipe
* LinkedIn: https://www.linkedin.com/in/kervin-cajipe-8817b8259/
* GitHub Profile: https://github.com/kbscjp



