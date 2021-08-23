const { describe, expect, test, beforeEach, afterEach } = require("@jest/globals");
const sinon = require("sinon");
const CoordinatesAccess = require("../dataaccess/CoordinatesAccess");
const Task = require("../model/Task")

describe("Testing Task class", () => {
    let sandBox = {};

    beforeEach(() => {
        sandBox = sinon.createSandbox();
    })

    afterEach(() => {
        sandBox.restore();
    }) 

    test.todo("constructor validation");
    test.todo("executeTaskValidation");
})