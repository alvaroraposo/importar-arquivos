class FileNotFoundError extends Error {
    constructor(fileName){
        super();

        this.name = "FileNotFoundError";
        this.message = `Arquivo ${fileName} não encontrado`;
        console.log(this.message);
    }    
}

module.exports = FileNotFoundError;