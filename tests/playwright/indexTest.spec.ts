import { expect, test as base } from '@playwright/test';
import { IndexTestPage } from "./playwrightPages/indexTest";

// Extend test with IndexTestPage fixture
const test = base.extend<{indexTestPage: IndexTestPage}>({  
})

test.describe('Test on localhost', () => {

  test.beforeEach(async ({ page }) => {
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
    await page.getByRole('button', { name: 'fjern' }).nth(0).click();

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

  })

  test('buy more of same item', async ({ page }) => {

    // Arrange
    const antal = page.getByRole('spinbutton').nth(0)
    const finalPrice = page.locator('.totalSumRight').nth(1)
  
    // Accept
    await expect(antal).toHaveAttribute('value', '2')
    await expect(finalPrice).toContainText('375 DKK')

    // Act
    await antal.fill('5')
    await page.keyboard.press('Tab'); // Does this so the container will opdate by leaving it

    // Accept
    await expect(finalPrice).toContainText('667,5 DKK')
    await expect(antal).toHaveAttribute('value', '5')
    

  })

  test('Go to form', async ({ page }) => {

    // Arrange
    await page.getByRole('button', { name: 'Betal' }).click();

    // Accept
    await expect(page).toHaveURL('http://localhost:5173/form');
  })

})

