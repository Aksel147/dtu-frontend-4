import { test, expect } from '@playwright/test';
//import { IndexTestPage } from "./playwrightPages/indexTest";

test.describe('Test on localhost', () => {

  test.describe('Test index page', () => {

    test.beforeEach(async ({ page }) => {
      //const indexTest = new IndexTestPage(page);
      await page.goto('http://localhost:5173/');

    });

    test.only('remove first item', async ({ page }) => {
      
      // Arrange
      const item0 = page.locator('.pItemHeader').nth(0)
      const finalPrice = page.locator('.totalSumRight').nth(1)

      // Accept
      await expect(item0).toBeVisible()
      await expect(item0).toContainText('C-vitamin, 500mg, 250 stk')
      await expect(finalPrice).toContainText('375 DKK')

      // Act
      await page.getByRole('button', { name: 'Fjern' }).nth(0).click()

      //Accept
      await expect(item0).toContainText('De små synger')
      await expect(finalPrice).toContainText('200 DKK')

    })

    test('remove all items', async ({ page }) => {

      // Arrange
      const item0 = page.locator('.pItemHeader').nth(0)

      // Accept
      await expect(item0).toBeVisible()

      // Act
      await page.getByRole('button', { name: 'Fjern' }).nth(0).click();
      await page.getByRole('button', { name: 'Fjern' }).nth(0).click();
      await page.getByRole('button', { name: 'Fjern' }).nth(0).click();

      // Accept
      await expect(item0).not.toBeVisible()
      await expect(page.locator('.shopping-cart')).toContainText('Kurven er tom')

    })

    test('buy more of same item', async ({ page }) => {

      // Arrange
      const antal = page.getByRole('spinbutton').nth(0)
      const finalPrice = page.locator('.totalSumRight').nth(1)

      // Accept
      await expect(antal).toHaveAttribute('value', '2')
      await expect(finalPrice).toContainText('375 DKK')

      // Act
      await antal.fill('1')
      await page.keyboard.press('Tab'); // Does this so the container will opdate by leaving it

      // Accept
      await expect(finalPrice).toContainText('315 DKK')
      await expect(antal).toHaveAttribute('value', '1')

    })

    test('Opgrade items', async ({ page }) => {

      // Accept
      await expect(page.locator('.pItemHeader').nth(0)).toContainText('C-vitamin, 500mg, 250 stk')
      await expect(page.locator('.pItemHeader').nth(1)).toContainText('De små synger')
      await expect(page.locator('.pItemHeader').nth(2)).toContainText('Rørsukker, 1000g')

      await expect(page.locator('.pItemPrice').nth(0)).toContainText('225 DKK')
      await expect(page.locator('.pItemPrice').nth(1)).toContainText('120 DKK')
      await expect(page.locator('.pItemPrice').nth(2)).toContainText('80 DKK')

      // Arrange
      await page.getByRole('button', { name: 'vælg' }).nth(0).click();
      await page.getByRole('button', { name: 'vælg' }).nth(0).click();
      await page.getByRole('button', { name: 'vælg' }).nth(0).click();

      // Accept
      await expect(page.locator('.pItemHeader').nth(0)).toContainText('C-vitamin Depot, 500mg, 250')
      await expect(page.locator('.pItemHeader').nth(1)).toContainText('De små synger, indbundet')
      await expect(page.locator('.pItemHeader').nth(2)).toContainText('Rørsukker, økologisk, 1000g')

      await expect(page.locator('.pItemPrice').nth(0)).toContainText('350 DKK')
      await expect(page.locator('.pItemPrice').nth(1)).toContainText('180 DKK')
      await expect(page.locator('.pItemPrice').nth(2)).toContainText('81 DKK')
    })

    test('Go to form', async ({ page }) => {

      // Accept
      await expect(page).toHaveURL('http://localhost:5173/');

      // Arrange
      await page.getByRole('button', { name: 'Betal' }).click();

      // Accept
      await expect(page).toHaveURL('http://localhost:5173/form');
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

  })

})

