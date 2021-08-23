class InvaliRobotException extends Error {
    constructor(){
        super();

        this.name = "InvaliRobotException";
        this.message = `Pacote Robot.js não instalado ou inválido`;
        console.log(this.message);
    }    
}

module.exports = InvaliRobotException;