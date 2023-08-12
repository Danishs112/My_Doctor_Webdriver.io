import base64 from 'base-64';
import ObjectRepo from '../../web/objectRepo.js';


const objectRepo = new ObjectRepo();
class GenericHelper {
   
    decode(string){
        try {
            var decodedString = base64.decode(string);
            return decodedString
        }
        catch(error){
            console.log("string is not decoded - ",error)
        }
    }

    getLocatarFromJsonFile(locator){
        var cred = locator.split(" ").join("").toLowerCase()
        var locator = objectRepo.getSelector(cred);
        return locator
    }

    async getCurrentPageUrl(){
        return await browser.getUrl();
    }
    
    

}

export default GenericHelper