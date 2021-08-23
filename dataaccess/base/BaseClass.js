const Base = require("./Base");
const path = require("path");
const { readFile } = require("fs/promises");
const FileNotFoundException = require("../../errors/FileNotFoundException");

class BaseClass extends Base {        
    async read(filename) {
        let file = null;
        let parse = null;

        try {
            const pathResolved = path.resolve(`${__dirname}`, "./../../bd/" + filename);
            file = await readFile(pathResolved);                        
        } catch (error) {
            throw new FileNotFoundException("config.json");   
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