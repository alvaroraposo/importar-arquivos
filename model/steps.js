const CoordinatesAccess = require('../dataaccess/coordinatesaccess.js');
const Task = require('./Task.js');

class Steps {
    Steps = () => {};
    static #instance;
    static #tasks = [];

    static getInstance = async () => {
        if(instance == null)
            instance = new Steps();        

        await readSteps();
    }

    #readSteps = async () => {
        const coordinatesAccess = new CoordinatesAccess();
        tasks = await coordinatesAccess.read();
    }

    static run = (robot) => {
        for(step of tasks) {
            const task = new Task(step);
            await task.executeTask(robot);
        }
    }
}

module.exports = Steps;