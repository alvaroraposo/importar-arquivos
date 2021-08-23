class EmptyFileException extends Error {
    constructor(fileName){
        super();

        this.name = "EmptyFileException";
        this.message = `Arquivo ${fileName} vazio`;
        console.log(this.message);
    }    
}

module.exports = EmptyFileException;