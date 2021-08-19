const NotImplementedException = require("../errors/NotImplementedException");

class Base {
    read = () => {
        throw new NotImplementedException("Método read não implementado");
    }

    update = () => {
        throw new NotImplementedException("Método update não implementado");
    }
}

module.exports = Base;