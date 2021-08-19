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
                return Object.values(item).every(num => {
                    return Number.isInteger(num)
                })                                
            }))
    } 
}

module.exports = CoordinatesAccess;