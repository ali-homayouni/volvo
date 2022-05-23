const helper = require('../utilities/helper');


class MainPage {
    /**
     * define selectors using getter methods
     */
    get btnAcceptCookies () {
        return $('#onetrust-accept-btn-handler');
    }

    get divFooter () {
        return $('#vcc-site-footer');
    }

    get mainVideo(){
        return $('#Video-1')
    }

    get btnPauseVideo(){
        return $('#Video-1 button button')
    }

    get btnNav(){
        return $('#sitenav-sidenav-toggle')
    }

    get btnNavClose(){
        return $('button[data-autoid="nav:siteNavCloseIcon"]')
    }

    get navList(){
        return $('nav[id="nav:sideNavigation"]')
    }

    async isPlaying() {
        let screen1 = await browser.saveScreenshot('.png')
        await browser.pause(2000)
        let screen2 = await browser.saveScreenshot('.png')
        return await helper.compareImages(screen1, screen2, 0.1)
      }

    open () {
        return browser.url(browser.options.baseUrl)
    }
}

module.exports = new MainPage();
