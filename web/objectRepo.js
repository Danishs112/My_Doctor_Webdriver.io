import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

class ObjectRepo {

    constructor() {
        
        this.projectProperties = {};
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const directoryPath = path.join(__dirname, "../src/pages");
        const listOfFiles = fs.readdirSync(directoryPath);
        for (const fileName of listOfFiles) {
            const filePath = path.join(directoryPath, fileName);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const properties = JSON.parse(fileContent);
            Object.assign(this.projectProperties, properties);
        }
    }

    getSelector(key) {
        return this.projectProperties[key] || null;
    }

    getKeysToRemove(key) {
        return this.projectProperties[key] || null;
    }
}

export default ObjectRepo;