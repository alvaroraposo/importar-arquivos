const { describe, expect, test, beforeEach, afterEach } = require("@jest/globals");
const sinon = require("sinon");
const CoordinatesAccess = require("../dataaccess/CoordinatesAccess");

describe.skip("Populate Robot Steps with json files", () => {
    let sandBox = {};

    beforeEach(() => {
        sandBox = sinon.createSandbox();
    })

    afterEach(() => {
        sandBox.restore();
    }) 

    test.todo("");
})