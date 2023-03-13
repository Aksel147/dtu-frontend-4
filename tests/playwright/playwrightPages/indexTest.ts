import { Locator, Page, expect } from "@playwright/test";

export class IndexTestPage {
    readonly page: Page;
    readonly quantity_nudge1: Locator;
    readonly item0: Locator;
    readonly finalPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.quantity_nudge1 = page.locator('.quantity-nudge').nth(0)
        this.item0 = page.locator('.pItemHeader').nth(0)
        this.finalPrice = page.locator('.totalSumRight').nth(1)

    }

    async ClickButton(string: string, number: number = 0) {
        await this.page.getByRole('button', { name: `${string}` }).nth(number).click()
    }

}