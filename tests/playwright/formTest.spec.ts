//import { test, expect } from '@playwright/test';
import { FormTestPage } from "./playwrightPages/formPage";
import { expect, test as base } from '@playwright/test';


// Extend test with IndexTestPage fixture
const test = base.extend<{ formTestPage: FormTestPage }>({
    formTestPage: async ({ page }, use) => {
        const formTestPage = new FormTestPage(page)
        await use(formTestPage)
    }
})
test.describe('Test on localhost', () => {

    test.describe('Test form page', () => {

        test.beforeEach(async ({ page }) => {
            await page.goto('http://localhost:5173/form');

        });

        test('Write acceptable answers into to form', async ({ page, formTestPage }) => {

            // Arrange
            await formTestPage.FillOutFormAcceptable()

            // Accept
            await expect(formTestPage.fornavn).toHaveAttribute('value', 'Lars')
            await expect(formTestPage.efternavn).toHaveAttribute('value', 'Larsen')
            await expect(formTestPage.addresseLinje1).toHaveAttribute('value', 'PastaMedRis 69')
            await expect(formTestPage.addresseLinje2).toHaveAttribute('value', 'MomsSpaghetti 420')
            //await expect(formTestPage.postnr).toHaveAttribute('value', '2770')
            await expect(formTestPage.telefon).toHaveAttribute('value', '12345678')
            await expect(formTestPage.email).toHaveAttribute('value', 'MonkeyMan123@Gmail.com')
            await expect(formTestPage.firmanavn).toHaveAttribute('value', 'xXx_AssKicker_xXx')
            await expect(formTestPage.VAT_nummer).toHaveAttribute('value', '87654321')

        })

        test('Write unacceptable answers into to form', async ({ formTestPage }) => {

            // Act
            await formTestPage.FillOutFormUnacceptable()

            // Accept
            //await expect.soft(formTestPage.fornavn).toHaveAttribute('value', '')
            //await expect.soft(formTestPage.efternavn).toHaveAttribute('value', '')
            await expect.soft(formTestPage.addresseLinje1).toHaveAttribute('value', '')
            await expect.soft(formTestPage.addresseLinje2).toHaveAttribute('value', '')
            //await expect(formTestPage.postnr).toHaveAttribute('value', '')
            await expect.soft(formTestPage.telefon).toHaveAttribute('value', '')
            await expect.soft(formTestPage.email).toHaveAttribute('value', '')
            await expect.soft(formTestPage.firmanavn).toHaveAttribute('value', '')
            await expect.soft(formTestPage.VAT_nummer).toHaveAttribute('value', '')
        })

        test.skip('Test same billing adress', async ({ page }) => {

            await page.getByRole('checkbox').click();

            // Waiting on how this box is gonna work

        })
    })
})