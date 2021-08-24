const CoordinatesAccess = require('../dataaccess/coordinatesaccess.js');
const InvaliRobotException = require('../errors/InvalidRobotException.js');
const Task = require('../model/Task.js');

class Steps {
    Steps = () => {};

    static getInstance = async () => {
        if(!this.instance)
            this.instance = new Steps();     
            
        this.instance.tasks = await this.instance.readSteps();
        return this.instance;
    }

    readSteps = async () => {
        const coordinatesAccess = new CoordinatesAccess();
        return await coordinatesAccess.read();
    }

    run = async (robot) => {
        if(!robot)
            throw InvaliRobotException();
            
        for(step of tasks) {
            const task = new Task(step);
            await task.executeTask(robot);
        }
    }
}

module.exports = Steps;