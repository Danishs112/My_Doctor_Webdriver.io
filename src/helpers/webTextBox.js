class WebTextBox {


    async setText(element,text){
        try{
           await browser.$(element).setValue(text) 
            console.log('Typing of the field with value: ' + text);
       
        }
        catch(error){
            console.log('--->Error: Typing of the field with value:' + text + ' was not done due to: ' + error);
        }
     }
}

export default WebTextBox