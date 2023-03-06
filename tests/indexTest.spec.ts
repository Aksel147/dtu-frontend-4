import { test, expect } from '@playwright/test';




test.describe('Test on localhost', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  test('remove first item', async ({ page }) => {

    // Arrange
    const item0 = page.locator('.pItemHeader').nth(0)
    const finalPrice = page.locator('.totalSumRight').nth(1)

    // Accept
    await expect(item0).toBeVisible()
    await expect(item0).toContainText('C-vitamin, 500mg, 250 stk')
    await expect(finalPrice).toContainText('350 DKK')

    // Act
    await page.locator('div').getByRole('button', { name: 'fjern' }).nth(0).click();

    //Accept
    await expect(item0).toContainText('De små synger')
    await expect(finalPrice).toContainText('50 DKK')
  })



  test('remove all items', async ({ page }) => {

    // Arrange
    const item0 = page.locator('.pItemHeader').nth(0)

    // Accept
    await expect(item0).toBeVisible()

    // Act
    await page.locator('div').getByRole('button', { name: 'fjern' }).nth(0).click();
    await page.locator('div').getByRole('button', { name: 'fjern' }).nth(0).click();
    await page.locator('div').getByRole('button', { name: 'fjern' }).nth(0).click();

    // Accept
    await expect(item0).not.toBeVisible()

  })

  test('buy more of same item', async ({ page }) => {

    // Arrange
    const antal = page.locator('div').getByRole('spinbutton').nth(0)
    const finalPrice = page.locator('.totalSumRight').nth(1)
  
    // Accept
    await expect(antal).toHaveAttribute('value', '2')
    await expect(finalPrice).toContainText('350 DKK')

    // Act
    await antal.fill('5')
    await page.keyboard.press('Tab'); // Does this so the container will opdate by leaving it

    // Accept
    await expect(finalPrice).toContainText('800 DKK')
    await expect(antal).toHaveAttribute('value', '5')
    

  })

})

