class FileNotFoundException extends Error {
    constructor(fileName){
        super();

        this.name = "FileNotFoundException";
        this.message = `Arquivo ${fileName} não encontrado`;
        console.log(this.message);
    }    
}

module.exports = FileNotFoundException;