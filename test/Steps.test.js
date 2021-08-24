const { describe, expect, test, beforeEach, afterEach } = require("@jest/globals");
const sinon = require("sinon");
const CoordinatesAccess = require("../dataaccess/CoordinatesAccess");
const InvaliRobotException = require("../errors/InvalidRobotException");
const Steps = require("../control/steps");

const mocks = {
    happyPath: require("./mocks/coordinates-happy-path.json"),
}

describe("Populate Robot Steps with json files", () => {
    let sandBox = {};

    beforeEach(() => {
        sandBox = sinon.createSandbox();
    })

    afterEach(() => {
        sandBox.restore();
    }) 

    test("get instance happy path", async () => {
        const steps = await Steps.getInstance();
        expect(steps.tasks).toHaveLength(mocks.happyPath.length);
    });

    test("execute robot null", async () => {
        const steps = await Steps.getInstance();
        
        const call = async () => {
            return await steps.executeTask(null);
        }

        expect(call).rejects.toThrow(InvaliRobotException);
    });
})