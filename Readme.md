# CodeceptJS

CodeceptJS is a powerful end-to-end testing tool. It supports and unifies popular test frameworks such as Selenium WebDriver, Puppeteer, Playwright, and others, allowing you to create tests that work across different browsers and platforms.

## Features

- It uses a simple and readable syntax.
- It enables you to create reliable and stable tests with automatic waiting and debugging features.
- It supports parallel and serial execution options.
- It provides hundreds of ready-to-use plugins and extensibility.
- It supports test execution reports and easy visualization of test results.

## Getting Started

To start using CodeceptJS, you can follow the steps below:

1. Make sure you have Node.js installed. You can download the latest version of Node.js from [here](https://nodejs.org/).

2. Create a new project directory and open the terminal in that directory.

3. Install the required dependencies by running the following command:

```bash
npm install codeceptjs --save-dev
```

4. Create a CodeceptJS configuration file by running the following command:

```bash
npx codeceptjs init
```

5. Create your CodeceptJS tests under the `tests` directory.

6. You can run the tests using the following command:

```bash
npx codeceptjs run --reporter mochawesome
```

For more information, you can refer to the [CodeceptJS Guide](https://codecept.io/basics/).

## About the Automation QA Homework Proposal 

* Some notes are below.
    - I created this test with Playwright.
    - **Allure report deprecated in codeceptJS.**
    - It is mentioned in the task that the Dockerized environment was not mandatory. I would like to inform you that I could not finish it due to time problems.
    - Instead of allure report used mochawesome report.

## About the Test Case
* REQ-1
    This test is about asserting the text given in the search bar. The test fails due to the assertion as lowercase.
    You can use this command to run this case.
    ```bash
    npx codeceptjs run --features --steps --grep '@REQ-1' --reporter mochawesome
    ```

* REQ-2
    This test asserts that the profile is displayed after the specific named profile is searched in the search bar.
        You can use this command to run this case.
    ```bash
    npx codeceptjs run --features --steps --grep '@REQ-2' --reporter mochawesome
    ```

* REQ-3
    In this test, it asserts that in an open livestream, an unregistered user triggers the Sign Up overlay pop-up by clicking some buttons.
        You can use this command to run this case.
    ```bash
    npx codeceptjs run --features --steps --grep '@REQ-3' --reporter mochawesome
    ```

## Some used Helpers
    - Test tool   : Playwright 
    - Report tool : Mochawsome
    - Assert tool : Chai

## Author notes
- I have prepared this test for you running on ubuntu22.04 VM headless. You can connect to this VM with ssh. For this you need to get .pem file from me. You can check the test in this VM. Remember that chrome browser will not open because this VM is running headless.
- I have shared the framework I prepared on the github account in the link.  https://github.com/mosmant/oranum_project

