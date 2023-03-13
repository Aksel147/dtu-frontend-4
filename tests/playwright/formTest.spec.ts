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

        test.only('Write acceptable answers into to form', async ({ page, formTestPage }) => {

            // Arrange
            await formTestPage.FillOutFormAcceptable()

            // Accept

            expect(formTestPage.fornavn).toHaveAttribute('value', 'Lars')
            expect(formTestPage.efternavn).toHaveAttribute('value', 'Larsen')
            expect(formTestPage.postnr).toHaveAttribute('value', '2770')
            expect(formTestPage.addresseLinje1).toHaveAttribute('value', 'PastaMedRis 69')
            expect(formTestPage.addresseLinje2).toHaveAttribute('value', 'MomsSpaghetti 420')
            expect(formTestPage.postnr).toHaveAttribute('value', '2770')
            expect(formTestPage.telefon).toHaveAttribute('value', '12345678')
            expect(formTestPage.email).toHaveAttribute('value', 'MonkeyMan123@Gmail.com')
            expect(formTestPage.firmanavn).toHaveAttribute('value', 'xXx_AssKicker_xXx')
            expect(formTestPage.VAT_nummer).toHaveAttribute('value', 'DK 87654321')

        })

        test.skip('Write unacceptable answers into to form', async ({ page }) => {
            const Postnr = page.getByPlaceholder('Postnr').nth(0)
            const By = page.getByPlaceholder('By').nth(0)
            const Addresse_Linje_1 = page.getByPlaceholder('Addresse Linje 1').nth(0)
            const Addresse_Linje_2 = page.getByPlaceholder('Addresse Linje 2').nth(0)
            const Navn = page.getByPlaceholder('Navn').nth(0)
            const Telefon = page.getByPlaceholder('Telefon').nth(0)
            const Email = page.getByPlaceholder('Email').nth(0)
            const Firmanavn = page.getByPlaceholder('Firmanavn').nth(0)
            const VAT_nummer = page.getByPlaceholder('vAT-nummer').nth(0)

            // Act
            await Postnr.type('2770')
            await By.type('Kastrup')
            await Addresse_Linje_1.type('PastaMedRis 69')
            await Addresse_Linje_2.type('MomsSpaghetti 420')
            await Navn.type('Lars Larsen')
            await Telefon.type('12345678')
            await Email.type('MonkeyMan@Gmail.com')
            await Firmanavn.type('xXx_AssKicker_xXx')
            await VAT_nummer.type('DK 87654321')

            // Accept
            expect(Postnr).toContain('2770')
            expect(By).toContain('Kastrup')
            expect(Addresse_Linje_1).toContain('PastaMedRis 69')
            expect(Addresse_Linje_2).toContain('MomsSpaghetti 420')
            expect(Navn).toContain('Lars Larsen')
            expect(Telefon).toContain('12345678')
            expect(Email).toContain('MonkeyMan@Gmail.com')
            expect(Firmanavn).toContain('xXx_AssKicker_xXx')
            expect(VAT_nummer).toContain('DK 87654321')
        })

        test.skip('Test same billing adress', async ({ page }) => {

            await page.getByRole('checkbox').click();

            // copy act from 'Write acceptable answers into to form'

        })
    })
})