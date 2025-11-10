This project demonstrates running Playwright tests using LambdaTest HyperExecute for smart test orchestration on both Windows and Linux environments.

📌 Prerequisites
Before running the tests, ensure you have the following:

1. Basic Knowledge of:
  1. Playwright automation framework.
  2. HyperExecute smart test orchestration platform.
  3. YAML-based test execution configurations (Auto-split, Matrix-based execution, Secrets management).
  4. Running cross-browser tests (Serial & Parallel execution) on HyperExecute Cloud Grid.

2. Installed Dependencies:
   1. Node.js 16+ and npm
  2. npm-run-all package (for running both Windows and Linux scripts in parallel)

3. Running Playwright Tests
    Run Playwright tests locally before executing them on HyperExecute.
    npx playwright test --config=./playwright.config.js

4. Running Tests on HyperExecute
   1. ./hyperexecute --user process.env.LT_USERNAME --key process.env.LT_LT_ACCESS_KEY --config .hyperexecute.yaml
  
5. This uses npm-run-all to run both scripts in parallel.

📁 Project Structure
├── .gitpod.yml             # Gitpod workspace setup
├── playwright.config.js    # Playwright configuration
├── package.json            # Project dependencies & scripts
├── package-lock.json       # Lock file
├── pages                   # folder contains all the page objects
├── tests                   # This folder contains all the test spec files
├── .hyperexecute.yaml      # This file contains the configuration for hyperexecute CLI


