# Playwright TypeScript Demonstration

A demonstration project showcasing end-to-end testing using Playwright with TypeScript and the Page Object Model (POM) design pattern.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Page Object Model](#page-object-model)
- [CI/CD Integration](#cicd-integration)
- [Best Practices](#best-practices)

## ✨ Features

- **TypeScript Support**: Fully typed test automation with TypeScript
- **Page Object Model**: Maintainable and reusable page objects
- **Custom Fixtures**: Extended Playwright fixtures for page objects
- **Cross-Browser Testing**: Support for Chromium, Firefox, and WebKit
- **GitHub Actions**: Automated CI/CD pipeline
- **Parallel Execution**: Run tests in parallel for faster execution
- **HTML Reports**: Detailed test execution reports

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ankita010899/Playwright-Typescript-demonstration.git
cd Playwright-Typescript-demonstration
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 📁 Project Structure

```
playwright-typescript-demonstration/
├── .github/
│   └── workflows/
│       └── playwright.yml          # GitHub Actions workflow
├── src/
│   ├── pages/
│   │   ├── BasePage.ts            # Base page with common methods
│   │   ├── LoginPage.ts           # Login page object
│   │   └── InventoryPage.ts       # Inventory page object
│   └── fixtures/
│       └── pageObjectFixture.ts   # Custom fixtures for page objects
├── tests/
│   └── login.spec.ts              # Login test specifications
├── package.json                    # Project dependencies
├── playwright.config.ts           # Playwright configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Project documentation
```

## ⚙️ Configuration

### Playwright Configuration

The `playwright.config.ts` file contains settings for:
- Test directory and timeout configurations
- Browser configurations (Chromium, Firefox, WebKit)
- Retry and parallel execution settings
- Reporter configurations
- Base URL and other global settings

### TypeScript Configuration

The `tsconfig.json` defines TypeScript compiler options optimized for Playwright testing.

## 🚀 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode
```bash
npx playwright test --headed
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run a specific test file
```bash
npx playwright test tests/login.spec.ts
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run tests in UI mode
```bash
npx playwright test --ui
```

### View test report
```bash
npx playwright show-report
```

## 📄 Page Object Model

This project follows the Page Object Model design pattern:

### BasePage
Contains common methods and properties shared across all pages:
- Navigation methods
- Wait utilities
- Common element interactions

### LoginPage
Encapsulates login page elements and actions:
- Username and password input methods
- Login button interaction
- Error message validation

### InventoryPage
Represents the inventory/product page:
- Product listing interactions
- Cart operations
- Navigation elements

### Custom Fixtures
The `pageObjectFixture.ts` provides custom fixtures that automatically initialize page objects for tests, promoting code reusability and cleaner test code.

## 🔄 CI/CD Integration

This project includes a GitHub Actions workflow (`.github/workflows/playwright.yml`) that:
- Runs on push and pull requests
- Executes tests across multiple browsers
- Generates and uploads test reports
- Caches dependencies for faster builds

## ✅ Best Practices

1. **Separation of Concerns**: Keep test logic separate from page interactions
2. **Reusable Components**: Use page objects and fixtures for reusability
3. **Type Safety**: Leverage TypeScript for better code quality
4. **Descriptive Names**: Use clear and descriptive names for tests and methods
5. **Proper Waits**: Use Playwright's auto-waiting features and explicit waits when needed
6. **Independent Tests**: Ensure tests can run independently and in any order
7. **Clean Test Data**: Set up and tear down test data appropriately

## 📝 Writing New Tests

Example test structure:

```typescript
import { test } from '../src/fixtures/pageObjectFixture';
import { expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test('should perform specific action', async ({ loginPage, inventoryPage }) => {
    await loginPage.navigate();
    await loginPage.login('username', 'password');
    await expect(inventoryPage.title).toBeVisible();
  });
});
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is available for educational and demonstration purposes.

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Happy Testing! 🎭**