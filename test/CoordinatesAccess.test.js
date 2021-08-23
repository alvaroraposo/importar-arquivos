const CoordinatesAccess = require("../dataaccess/CoordinatesAccess");
const { describe, expect, test, beforeEach, afterEach } = require("@jest/globals");
const sinon = require("sinon");
const EmptyFileError = require("../dataaccess/errors/EmptyFileError");
const FileNotFoundError = require("../dataaccess/errors/FileNotFoundError");
const mocks = {
    invalidAttribute: require("./mocks/coordinates-invalid-attribute.json"),
    hasInvalidValue: require("./mocks/coordinates-invalid-value.json"),
    happyPath: require("./mocks/coordinates-happy-path.json"),
    invalidStepValue: require("./mocks/coordinates-invalid-step-value.json"),
}

describe("access to coordinates.json", () => {
    let sandBox = {};

    beforeEach(() => {
        sandBox = sinon.createSandbox();
    })

    afterEach(() => {
        sandBox.restore();
    }) 

    test("has invalid attribute", async () => {
        const coordinatesAccess = new CoordinatesAccess();
        const stub = sandBox.stub(coordinatesAccess, coordinatesAccess.read.name);
        stub.resolves(mocks.invalidAttribute);
        
        const call = async () => {
            return await coordinatesAccess.read();
        }
        
        const ret = coordinatesAccess.validateAttributes((await call()));
        expect(ret).toBeFalsy();
    });

    test("has invalid attribute value", async () => {
        const coordinatesAccess = new CoordinatesAccess();
        const stub = sandBox.stub(coordinatesAccess, coordinatesAccess.read.name);
        stub.resolves(mocks.hasInvalidValue);
        
        const call = async () => {
            return await coordinatesAccess.read();
        }
        
        const ret = coordinatesAccess.validateValues((await call()));
        expect(ret).toBeFalsy();
    });

    test.skip("happy path", async () => {
        const coordinatesAccess = new CoordinatesAccess();
        const call = async () => {
            return await coordinatesAccess.read();
        }

        const file = await call();

        expect(file).toStrictEqual(mocks.happyPath);
    });

    test("is file empty", async () => {
        const coordinatesAccess = new CoordinatesAccess();
        const stub = sandBox.stub(coordinatesAccess, coordinatesAccess.read.name);
        stub.rejects(new EmptyFileError("coordinates.json"));
        
        const call = async () => {
            return await coordinatesAccess.read();
        }

        expect(call).rejects.toThrow(EmptyFileError);            
    });

    test("no file", async () => {        
        const coordinatesAccess = new CoordinatesAccess();
        const stub = sandBox.stub(coordinatesAccess, coordinatesAccess.read.name);
        stub.rejects(new FileNotFoundError("coordinates.json"));
        
        const call = async () => {
            await coordinatesAccess.read();
        }
        
        expect(call).rejects.toThrow(FileNotFoundError);            
    })
})