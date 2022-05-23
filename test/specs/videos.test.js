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

    it('Checking the Main Video play', async () => {
        await Page.mainVideo.scrollIntoView()
        const _is = await Page.isPlaying()
        assert.equal(_is, true)
    })

    it('Checking the Main Video Pause and Play Again', async () => {
        await Page.mainVideo.scrollIntoView()
        await Page.btnPauseVideo.click()
        let _is = await Page.isPlaying()
        assert.equal(_is, false)
        await Page.btnPauseVideo.click()
        _is = await Page.isPlaying()
        assert.equal(_is, true)

    })
})


