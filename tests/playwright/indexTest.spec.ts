import { test, expect} from '@playwright/test';
import { IndexTestPage } from "./playwrightPages/indexTest";

test.describe('Test on localhost', () => {

  

  test.skip('remove first item', async ({ page }) => {
    //const indexTestPage = new IndexTestPage(page);
    // Arrange

    // Accept
    await expect(indexTestPage.item0).toBeVisible()
    await expect(indexTestPage.item0).toContainText('C-vitamin, 500mg, 250 stk')
    await expect(indexTestPage.finalPrice).toContainText('375 DKK')

    // Act
    await indexTestPage.ClickButton('Fjern')

    //Accept
    await expect(indexTestPage.item0).toContainText('De små synger')
    await expect(indexTestPage.finalPrice).toContainText('200 DKK')
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
    await antal.fill('1')
    await page.keyboard.press('Tab'); // Does this so the container will opdate by leaving it

    // Accept
    await expect(finalPrice).toContainText('315 DKK')
    await expect(antal).toHaveAttribute('value', '1')
    await expect()


  })

  test('Go to form', async ({ page }) => {

    // Arrange
    await page.getByRole('button', { name: 'Betal' }).click();

    // Accept
    await expect(page).toHaveURL('http://localhost:5173/form');
  })

})

