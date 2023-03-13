import { Locator, Page, expect } from "@playwright/test";

export class FormTestPage {
    readonly page: Page;
    readonly fornavn: Locator;
    readonly efternavn: Locator;
    readonly addresseLinje1: Locator;
    readonly addresseLinje2: Locator;
    readonly postnr: Locator;
    readonly telefon: Locator;
    readonly email: Locator;
    readonly firmanavn: Locator;
    readonly VAT_nummer: Locator;

    constructor(page: Page) {
        this.page = page;

        this.fornavn = page.getByPlaceholder('Indtast fornavn').nth(0)
        this.efternavn = page.getByPlaceholder('Indtast efternavn').nth(0)
        this.addresseLinje1 = page.getByPlaceholder('Adresse Linje 1').nth(0)
        this.addresseLinje2 = page.getByPlaceholder('Adresse Linje 2').nth(0)
        this.postnr = page.getByPlaceholder('Indtast Postnummer').nth(0)
        this.telefon = page.getByPlaceholder('Indtast telefon nummer').nth(0)
        this.email = page.getByPlaceholder('Indtast email').nth(0)
        this.firmanavn = page.getByPlaceholder('Indtast firmanavn').nth(0)
        this.VAT_nummer = page.getByPlaceholder('Indtast VAT-nummer').nth(0)

    }

    async FillOutFormAcceptable() {
        await this.fornavn.type('Lars')
        await this.efternavn.type('Larsen')
        await this.postnr.type('2770')
        await this.addresseLinje1.type('PastaMedRis 69')
        await this.addresseLinje2.type('MomsSpaghetti 420')
        await this.postnr.type('2770')
        await this.telefon.type('12345678')
        await this.email.type('MonkeyMan123@Gmail.com')
        await this.firmanavn.type('xXx_AssKicker_xXx')
        await this.VAT_nummer.type('DK 87654321')
    }

    async ClickButton(string: string, number: number = 0) {
        await this.page.getByRole('button', { name: `${string}` }).nth(number).click()
    }

}