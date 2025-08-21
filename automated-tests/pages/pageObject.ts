import { expect, Locator, Page } from "@playwright/test";

export class SauceDemoWeb {

    readonly page: Page
    readonly sauceDemoLoginURL: string
    readonly backPack: Locator
    readonly inputUsername: Locator
    readonly inputPassword: Locator
    readonly loginButton: Locator
    readonly firstAddToCartItem: Locator
    readonly shoppingCartIcon: Locator
    readonly cartBadgeCounter: Locator
    readonly checkOutButton: Locator
    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly postalCodeInput: Locator
    readonly continueButton: Locator
    readonly finishButton: Locator
    readonly orderAcknowledgment: Locator
    readonly menuButton: Locator
    readonly logOut: Locator


    constructor(page: Page) {
        this.page = page
        this.sauceDemoLoginURL = 'https://www.saucedemo.com/'
        this.backPack = page.locator('.inventory_item_name ', { hasText: "Sauce Labs Backpack" })
        this.inputUsername = page.getByPlaceholder('Username')
        this.inputPassword = page.getByPlaceholder('Password')
        this.loginButton = page.locator('#login-button')
        this.firstAddToCartItem = page.locator('.inventory_item button').first()
        this.shoppingCartIcon = page.locator('.shopping_cart_link')
        this.cartBadgeCounter = page.locator('.shopping_cart_badge')
        this.checkOutButton = page.locator('.checkout_button')
        this.firstNameInput = page.locator('#first-name')
        this.lastNameInput = page.locator('#last-name')
        this.postalCodeInput = page.locator('#postal-code')
        this.continueButton = page.locator('#continue')
        this.finishButton = page.locator('#finish')
        this.orderAcknowledgment = page.locator('.complete-header')
        this.menuButton = page.locator('#react-burger-menu-btn')
        this.logOut = page.locator('#logout_sidebar_link')
    }


    async gotoLoginPage() {
        await this.page.goto(this.sauceDemoLoginURL)
    }

    async login(username: string, password: string) {
        await this.inputUsername.fill(username)
        await this.inputPassword.fill(password)
        await this.loginButton.click()
    }

    async addFirstItemToCart() {
        await this.firstAddToCartItem.click()
    }

    async gotoCart() {
        await this.shoppingCartIcon.click()
    }

    async proceedToCheckOut(firstname: string, lastname: string, postalcode: string) {
        await this.checkOutButton.click()
        await this.firstNameInput.fill(firstname)
        await this.lastNameInput.fill(lastname)
        await this.postalCodeInput.fill(postalcode)
        await this.continueButton.click()
    }

    async finishCheckOut() {
        await this.finishButton.click()
    }

    async LogOutAfterSuccessfulCheckOut() {
        await this.menuButton.click()
        await this.logOut.click()
    }

}