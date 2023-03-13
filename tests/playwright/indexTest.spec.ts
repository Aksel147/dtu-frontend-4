//import { test, expect } from '@playwright/test';
import { IndexTestPage } from "./playwrightPages/indexTest";
import { expect, test as base } from '@playwright/test';


// Extend test with IndexTestPage fixture
const test = base.extend<{ indexTestPage: IndexTestPage }>({
  indexTestPage: async ({ page }, use) => {
    const indexTestPage = new IndexTestPage(page)
    await use(indexTestPage)
  }
})


test.describe('Test on localhost', () => {

  test.describe('Test index page', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:5173/');

    });

    test('remove first item', async ({ indexTestPage }) => {

      // Arrange
      const item0 = indexTestPage.item0
      const finalPrice = indexTestPage.finalPrice

      // Accept
      await expect(item0).toBeVisible()
      await expect(item0).toContainText('C-vitamin, 500mg, 250 stk')
      await expect(finalPrice).toContainText('375 DKK')

      // Act
      await indexTestPage.ClickButton('Fjern')

      //Accept
      await expect(item0).toContainText('De små synger')
      await expect(finalPrice).toContainText('200 DKK')

    })

    test('remove all items', async ({ indexTestPage }) => {

      // Arrange
      const item0 = indexTestPage.item0

      // Accept
      await expect(item0).toBeVisible()

      // Act
      await indexTestPage.ClickButton('Fjern')
      await indexTestPage.ClickButton('Fjern')
      await indexTestPage.ClickButton('Fjern')

      // Accept
      await expect(item0).not.toBeVisible()
      await expect(indexTestPage.shopping_cart).toContainText('Kurven er tom')

    })

    test('buy more of same item', async ({ indexTestPage }) => {

      // Arrange
      const item0Quantity = indexTestPage.item0Quantity
      const finalPrice = indexTestPage.finalPrice

      // Accept
      await expect(item0Quantity).toHaveAttribute('value', '2')
      await expect(finalPrice).toContainText('375 DKK')

      // Act
      await item0Quantity.fill('1')
      await indexTestPage.page.keyboard.press('Tab'); // Does this so the container will opdate by leaving it

      // Accept
      await expect(finalPrice).toContainText('315 DKK')
      await expect(item0Quantity).toHaveAttribute('value', '1')

    })

    test('Opgrade items', async ({ indexTestPage }) => {

      // Accept
      await expect(indexTestPage.item0).toContainText('C-vitamin, 500mg, 250 stk')
      await expect(indexTestPage.item1).toContainText('De små synger')
      await expect(indexTestPage.item2).toContainText('Rørsukker, 1000g')

      await expect(indexTestPage.item0Price).toContainText('225 DKK')
      await expect(indexTestPage.item1Price).toContainText('120 DKK')
      await expect(indexTestPage.item2Price).toContainText('80 DKK')

      // Arrange
      await indexTestPage.ClickButton('vælg')
      await indexTestPage.ClickButton('vælg')
      await indexTestPage.ClickButton('vælg')

      // Accept
      await expect(indexTestPage.item0).toContainText('C-vitamin Depot, 500mg, 250')
      await expect(indexTestPage.item1).toContainText('De små synger, indbundet')
      await expect(indexTestPage.item2).toContainText('Rørsukker, økologisk, 1000g')

      await expect(indexTestPage.item0Price).toContainText('350 DKK')
      await expect(indexTestPage.item1Price).toContainText('180 DKK')
      await expect(indexTestPage.item2Price).toContainText('81 DKK')
    })

    test('Go to form', async ({ indexTestPage }) => {

      // Accept
      await expect(indexTestPage.page).toHaveURL('http://localhost:5173/');

      // Arrange
      await indexTestPage.ClickButton('Betal')

      // Accept
      await expect(indexTestPage.page).toHaveURL('http://localhost:5173/form');
    })

  })

  test.describe('Test form page', () => {

    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:5173/form');

    });

    test.skip('Write acceptable answers into to form', async ({ page }) => {

      // Arrange
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

