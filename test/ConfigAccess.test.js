const { describe, expect, test, beforeEach, afterEach } = require("@jest/globals");
const sinon = require("sinon");
const ConfigAccess = require("../dataaccess/ConfigAccess");
const EmptyFileError = require("../dataaccess/errors/EmptyFileError");
const FileNotFoundError = require("../dataaccess/errors/FileNotFoundError");
const mocks = {
    invalidAttribute: require("./mocks/config-invalid-attribute.json"),
    hasEmptyAttribute: require("./mocks/config-empty-attribute.json"),
    invalidFolder: require("./mocks/config-invalid-folder.json"),
    happyPath: require("./mocks/config-happy-path.json")   
}

describe("access to config.json", () => {
    let sandBox = {};

    beforeEach(() => {
        sandBox = sinon.createSandbox();
    })

    afterEach(() => {
        sandBox.restore();
    }) 

    test("has invalid attribute", async () => {
        const configAccess = new ConfigAccess();
        const stub = sandBox.stub(configAccess, configAccess.read.name);
        stub.resolves(mocks.invalidAttribute);
        
        const call = async () => {
            return await configAccess.read();
        }
        
        const ret = configAccess.validateAttributes((await call()));
        expect(ret).toBeFalsy();
    });

    test("has invalid attribute value", async () => {
        const configAccess = new ConfigAccess();
        const stub = sandBox.stub(configAccess, configAccess.read.name);
        stub.resolves(mocks.hasEmptyAttribute);
        
        const call = async () => {
            return await configAccess.read();
        }
        
        const ret = configAccess.validateValues((await call()));
        expect(ret).toBeFalsy();
    });

    test("has invalid folder", async () => {
        const configAccess = new ConfigAccess();
        const stub = sandBox.stub(configAccess, configAccess.read.name);
        stub.resolves(mocks.invalidFolder);

        const call = async () => {
            return await configAccess.read();
        }        

        const file = await call();

        expect(configAccess.validateFolderPath(file)).toBeFalsy();
    });

    test("happy path", async () => {
        const configAccess = new ConfigAccess();
        const call = async () => {
            return await configAccess.read();
        }

        const file = await call();

        expect(file).toStrictEqual(mocks.happyPath);
    });

    test("is file empty", async () => {
        const configAccess = new ConfigAccess();
        const stub = sandBox.stub(configAccess, configAccess.read.name);
        stub.rejects(new EmptyFileError("config.json"));
        
        const call = async () => {
            return await configAccess.read();
        }

        expect(call).rejects.toThrow(EmptyFileError);            
    });

    test("no file", async () => {        
        const configAccess = new ConfigAccess();
        const stub = sandBox.stub(configAccess, configAccess.read.name);
        stub.rejects(new FileNotFoundError("config.json"));
        
        const call = async () => {
            await configAccess.read();
        }
        
        expect(call).rejects.toThrow(FileNotFoundError);            
    })   
})