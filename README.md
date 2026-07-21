# Cypress + JavaScript Practice Project

This project is a basic automation practice repository where John Arellano can learn how to create a test framework using Cypress and JavaScript.

The main goal is to practice:
- creating end-to-end tests with Cypress
- writing test cases in JavaScript
- organizing test files in a simple structure
- interacting with a demo web application
- learning good practices for automation testing

## Project Purpose

This repository is intended as a starting point for learning UI automation. It uses a simple Cypress setup and a demo banking application called ParaBank as the testing target.

The idea is to build confidence step by step while practicing real test scenarios such as login, registration, account navigation, and money transfer flows.

## Technologies Used

- Cypress
- JavaScript
- Node.js
- npm

## Project Structure

```text
cypress/
  e2e/                # Test files
  fixtures/           # Test data files
  support/            # Custom commands and setup
cypress.config.js     # Cypress configuration
package.json          # Project dependencies
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Open Cypress Test Runner:

```bash
npx cypress open
```

3. Run tests in headless mode:

```bash
npx cypress run
```

## What is ParaBank?

ParaBank is a demo banking application used for testing and learning purposes. It simulates a simple online banking experience and is a great example for practicing automation because it includes common user flows.

### Basic parts of ParaBank

- Home page: entry point of the application
- Register: create a new user account
- Login: sign in with an existing account
- Account Overview: view account information and balances
- Transfer Funds: move money between accounts
- Bill Pay: pay bills through the application
- Find Transactions: search for previous transactions
- Update Contact Info: edit personal information
- Logout: close the session safely

These areas are useful for practicing test cases like:
- opening the application
- validating pages and forms
- interacting with buttons and links
- checking visible text and values
- verifying successful navigation

## Learning Focus

This project helps you practice:
- how Cypress works
- how to write basic test cases
- how to structure tests for readability
- how to interact with web elements
- how to build a foundation for a bigger test framework later

## Next Steps

As the project grows, you can improve it by:
- creating reusable functions and commands
- organizing tests by feature
- using fixtures for test data
- adding assertions for more complete validations
- creating a page object model (POM) structure

This README can be updated as the framework becomes more complete.
