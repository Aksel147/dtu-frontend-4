//import { test, expect } from '@playwright/test';
import { IndexTestPage } from "./playwrightPages/indexPage";
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
      await indexTestPage.ClickButton('Skraldespand')

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
      await indexTestPage.ClickButton('Skraldespand')
      await indexTestPage.ClickButton('Skraldespand')
      await indexTestPage.ClickButton('Skraldespand')

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



})

