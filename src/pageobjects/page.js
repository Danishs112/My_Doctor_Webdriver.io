import { getHomeUrl,getUrls,getCredentials } from '../../web/config.js'


class BasePage {
    
    open (url= "/") {
        browser.url(getHomeUrl()+ getUrls(url.split(" ").join("").toLocaleLowerCase()))
        browser.maximizeWindow()
     }
    
    getCredentials(credentials){
        return getCredentials(credentials)
    }

}

export default BasePage