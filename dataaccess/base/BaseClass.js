const Base = require("./Base");
const path = require("path");
const { readFile } = require("fs/promises");
const FileNotFoundError = require("../errors/FileNotFoundError");

class BaseClass extends Base {        
    async read(filename) {
        let file = null;
        let parse = null;

        try {
            const pathResolved = path.resolve(`${__dirname}`, "./../../bd/" + filename);
            file = await readFile(pathResolved);                        
        } catch (error) {
            throw new FileNotFoundError("config.json");   
        }
        
        try {            
            parse = JSON.parse(file);
        } catch (error) {
            throw EmptyFileError("config.json");
        }

        return parse;
    }

    update = (item, newValue) => {

    }
}

module.exports = BaseClass;