

class WebXpath  {

    setXpath(text,type="visibleText"){
    
        let xpathString = '';

    if(type === 'name' || type === 'id' || type === 'class'){
        xpathString = `//*[contains(@${type},'${word}')]`
    }
    else if(type === 'visibleText'){
        xpathString = `//*[contains(text(),'${text}')]`
    }
    console.log("internal",xpathString)
    return xpathString;
   }

   async clickByXpath(text,type) {
    let getXpathValue = this.setXpath(text,type);
    try{
        var locator = await $(getXpathValue);
        await locator.isFocused();
        await locator.click().then(function(){
             console.log("element is clicked - ", element)
         }), function(error){
           console.log('element is not clicked - ',error)
         }
      } catch(error){
       console.log('Not able to click or find element',error)
      }
     }


async typeTextByXpath(text,type){
    let getXpathValue = this.setXpath(text,type);
    try{
        await browser.$(getXpathValue).setValue(text) 
         console.log('Typing of the field with value: ' + text);
    
     }
     catch(error){
         console.log('--->Error: Typing of the field with value:' + text + ' was not done due to: ' + error);
     }
  }

  async isDisplayed(text,type){
    let getXpathValue = this.setXpath(text,type);
    let element = await $(getXpathValue)
    // $(element).waitUntil(element.isDisplayed())
    await expect(element).toBeDisplayed()
  }



}

export default WebXpath