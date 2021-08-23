const BaseClass = require("./base/BaseClass");

class CoordinatesAccess extends BaseClass {
    
    read = async () => {     
        return await super.read("coordinates.json");        
    }

    update = (item, newValue) => {

    }

    validateAttributes = (jsonFile) => {
        const attributes = [
            "x",
            "y",
            "sleep",
            "text"            
        ];
        
        return (Array.isArray(jsonFile) && jsonFile.length > 0) && 
            jsonFile.every(item => {
                return attributes.sort().toString() === Object.keys(item).sort().toString();
            })            
    }

    validateValues = (jsonFile) => {
        return (Array.isArray(jsonFile) && 
            jsonFile.length > 0) &&  
            (jsonFile.every(item => {
                return (Number.isInteger(item.x) && Number.isInteger(item.y) && Number.isInteger(item.sleep) && typeof item.text === 'string');
            }))
    }

    validateSteps = (steps, jsonFile) => {
        return (Array.isArray(jsonFile) && Number.isInteger(steps) && jsonFile.length === steps);
    }

//    validateFolderPath = (jsonFile) => existsSync(jsonFile.pasta);
}

module.exports = CoordinatesAccess;