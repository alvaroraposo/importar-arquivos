class EmptyFileError extends Error {
    constructor(fileName){
        super();

        this.name = "EmptyFileError";
        this.message = `Arquivo ${fileName} vazio`;
        console.log(this.message);
    }    
}

module.exports = EmptyFileError;