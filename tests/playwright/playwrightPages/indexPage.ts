import { Locator, Page, expect } from "@playwright/test";

export class IndexTestPage {
    readonly page: Page;

    readonly item0: Locator;
    readonly item0Price: Locator;

    readonly item1: Locator;
    readonly item1Price: Locator;

    readonly item2: Locator;
    readonly item2Price: Locator;

    readonly finalPrice: Locator;
    readonly shopping_cart: Locator;
    readonly item0Quantity: Locator;
    readonly quantity_nudge1: Locator;

    constructor(page: Page) {
        this.page = page;

        this.item0 = page.locator('.pItemHeader').nth(0)
        this.item0Price = page.locator('.pItemPrice').nth(0)
        this.item0Quantity = page.getByRole('spinbutton').nth(0)
        
        this.item1 = page.locator('.pItemHeader').nth(1)
        this.item1Price = page.locator('.pItemPrice').nth(1)
        
        this.item2 = page.locator('.pItemHeader').nth(2)
        this.item2Price = page.locator('.pItemPrice').nth(2)

        this.finalPrice = page.locator('.totalSumRight').nth(1)
        this.shopping_cart = page.locator('.shopping-cart')
        
        this.quantity_nudge1 = page.locator('.quantity-nudge').nth(0)

    }

    async ClickButton(string: string, number: number = 0) {
        await this.page.getByRole('button', { name: `${string}` }).nth(number).click()
    }

}