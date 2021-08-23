class NotImplementedException extends Error {
    constructor(message){
        super();

        this.name = "NotImplementedException";
        this.message = message;
    }
}

module.exports = NotImplementedException;