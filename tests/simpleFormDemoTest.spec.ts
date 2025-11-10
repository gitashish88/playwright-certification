import { Page, test, expect } from "@playwright/test";
import { SeleniumPlaygroundPage } from "../pages/seleniumPlaygroundPage";
import { SimpleFormDemoPage } from "../pages/simpleFormDemoPage";

test.describe("Playwright 102 Certification Tests - Simple Form Demo", () => {

    let page: Page;
    let simpleFormDemoPage: SimpleFormDemoPage;
    let seleniumPlaygroundPage: SeleniumPlaygroundPage;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        simpleFormDemoPage = new SimpleFormDemoPage(page);
        seleniumPlaygroundPage = new SeleniumPlaygroundPage(page);
    });

    test.afterEach(async ({ browser }) => {
        await page.close();
        await browser.close();
    });

    test("Simple Form Demo - Validate Message Display", { tag: ['@RegressionTests'] }, async () => {

        const testMessage = "Welcome to LambdaTest";

        await seleniumPlaygroundPage.navigateToSeleniumPlaygroungPage();
        await seleniumPlaygroundPage.ClickSimpleFormDemoLink();
        await simpleFormDemoPage.ValidateURL("simple-form-demo");
        await simpleFormDemoPage.EnterMessage(testMessage);
        await simpleFormDemoPage.ClickGetCheckedValueButton();
        await simpleFormDemoPage.ValidateYourMessageText(testMessage);

    });

});