class WebButton {
  
    async click(element){
      try{
         var locator = await $(element);
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
}

export default WebButton