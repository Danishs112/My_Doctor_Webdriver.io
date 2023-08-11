

class WebElement {

    async elementIsDisplayed(element) {
      expect($(element)).toBeExisting() 
       
    }
}
export default WebElement