const ConfigAccess = require("./dataaccess/configaccess");
const CoordinatesAccess = require("./dataaccess/coordinatesaccess");

(() => {
    const a = new ConfigAccess();
    a.read();
})();