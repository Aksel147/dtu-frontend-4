import { Locator, Page, expect } from "@playwright/test";

export class IndexTestPage {
    readonly page: Page;



    constructor(page: Page) {
        this.page = page;
    }

}