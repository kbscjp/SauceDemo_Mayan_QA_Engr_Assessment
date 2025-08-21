import { test, expect } from '@playwright/test';
import { SauceDemoWeb } from '../pages/pageObject'


test.describe('Sauce Demo Core Flow', () => {

  let sauceDemo: SauceDemoWeb

  test.beforeEach(async ({ page }) => {
    sauceDemo = new SauceDemoWeb(page)
    await sauceDemo.gotoLoginPage()
    await sauceDemo.login('standard_user', 'secret_sauce')
  })

  test('Add 1 Item to Cart', async ({ page }) => {
    await sauceDemo.addFirstItemToCart()
    await expect(sauceDemo.cartBadgeCounter).toHaveText('1')
  })

  test('Proceed To CheckOut', async ({ page }) => {
    await sauceDemo.addFirstItemToCart()
    await sauceDemo.gotoCart()
    await sauceDemo.proceedToCheckOut('Test', 'Data', '12345')
    await expect(sauceDemo.page.locator('.summary_info')).toBeVisible()

  })

  test('Complete Purchase Successfully', async ({ page }) => {
    await sauceDemo.addFirstItemToCart()
    await sauceDemo.gotoCart()
    await sauceDemo.proceedToCheckOut('Test', 'Data', '12345')
    await sauceDemo.finishCheckOut()
    await expect(sauceDemo.orderAcknowledgment).toHaveText('Thank you for your order!')
  })

  test('Log Out After successful check out', async ({ page }) => {
    await sauceDemo.addFirstItemToCart()
    await sauceDemo.gotoCart()
    await sauceDemo.proceedToCheckOut('Test', 'Data', '12345')
    await sauceDemo.finishCheckOut()
    await sauceDemo.LogOutAfterSuccessfulCheckOut()
    await expect(sauceDemo.sauceDemoLoginURL).toEqual('https://www.saucedemo.com/')
  })



})







