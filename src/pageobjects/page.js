import { getHomeUrl,getUrls } from '../../web/config.js'


class BasePage {
    
    open (url= "/") {
        browser.url(getHomeUrl()+ getUrls(url))
        browser.maximizeWindow()
     }
}

export default BasePage