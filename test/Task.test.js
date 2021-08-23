const { describe, expect, test, beforeEach, afterEach } = require("@jest/globals");
const sinon = require("sinon");
<<<<<<< Updated upstream
const CoordinatesAccess = require("../dataaccess/CoordinatesAccess");
const Task = require("../model/Task")

describe("Testing Task class", () => {
=======
const Task = require("../model/task");
const InvalidRobotException = require("../errors/InvalidRobotException");

describe("test task class", () => {
>>>>>>> Stashed changes
    let sandBox = {};

    beforeEach(() => {
        sandBox = sinon.createSandbox();
    })

    afterEach(() => {
        sandBox.restore();
<<<<<<< Updated upstream
    }) 

    test.todo("constructor validation");
    test.todo("executeTaskValidation");
=======
    })

    test.skip("test invalid constructor", () => {
        const newTask = new Task(null);
    })
    test.todo("test sleeptime");

    test("execute task with invalid robot", async () => {
        const newTask = new Task({x: 1, y: 1});

        const call = async () => {
            return await newTask.executeTask(null);
        }
        
        expect(call).rejects.toThrow(InvalidRobotException);                    
    });
>>>>>>> Stashed changes
})