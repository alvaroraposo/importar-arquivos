const { describe, expect, test, beforeEach, afterEach } = require("@jest/globals");
const sinon = require("sinon");
const Task = require("../model/Task");
const InvalidRobotException = require("../errors/InvalidRobotException");

describe("test task class", () => {
    let sandBox = {};

    beforeEach(() => {
        sandBox = sinon.createSandbox();
    })

    afterEach(() => {
        sandBox.restore();
    })

    test.skip("test task happy path", () => {
        const newTask = new Task({x: 1, y: 1});


    });

    test("execute task with invalid robot", async () => {
        const newTask = new Task({x: 1, y: 1});

        const call = async () => {
            return await newTask.executeTask(null);
        }

        expect(call).rejects.toThrow(InvalidRobotException);                    
    });
})