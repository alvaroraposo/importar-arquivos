const ncp = require('copy-paste');
const InvaliRobotException = require('../errors/InvalidRobotException');

class Task {
    constructor({x, y, text = '', sleep = 500}) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.sleep = sleep;
    }

    setSleepTime = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    executeTask = async (robot) => {
        console.log("robot", robot);
        if(robot === null)
            throw new InvaliRobotException();
            
        robot.moveMouse(this.x, this.y);
        robot.mouseClick();
        (this.text != '') ? ncp.copy(this.text.toString()) : null;
        await this.setSleepTime(this.sleep);
        (this.text != '') ? robot.keyTap('v', 'control') : null;        
    }
}

module.exports = Task;