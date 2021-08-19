const { existsSync } = require("fs");
const BaseClass = require("./base/BaseClass");

class ConfigAccess extends BaseClass {    
    read = async () => {     
        return await super.read("config.json");        
    }

    update = (item, newValue) => {

    }

    validateAttributes = (jsonFile) => {
        const attributes = [
            "tipo",
            "assunto",
            "orgaoEmissor",
            "descricao",
            "pasta",
        ];
        
        return attributes.sort().toString() === Object.keys(jsonFile).sort().toString();
    }

    validateValues = (jsonFile) => !(['', null].every(val => Object.values(jsonFile).indexOf(val) !== -1)) 
    validateFolderPath = (jsonFile) => existsSync(jsonFile.pasta);
}

module.exports = ConfigAccess;