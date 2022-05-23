const Page = require('../pageobjects/main.page');

describe('show header', () => {
    /**
     * Open The Page: https://www.volvocars.com/intl/v/car-safety/a-million-more
     * Accept Cookies
     */
    before(async () => {
        Page.open()
        await Page.btnAcceptCookies.waitForDisplayed()
        await Page.btnAcceptCookies.click()
    })
    after(async () => {
        await browser.pause(1000)
    })

    it('Checking Navbar Show Button', async () => {
        await Page.btnNav.scrollIntoView()
        await Page.btnNav.click()
        assert.equal(await Page.navList.isDisplayedInViewport(),true)
    })

    it('Checking Navbar Close Button', async () => {
        await Page.btnNavClose.click()
        assert.equal(await Page.navList.isDisplayedInViewport(),false)
    })
})


