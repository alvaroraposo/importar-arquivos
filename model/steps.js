const Task = require('./Task.js');

class Steps {
    Steps = () => {};
    static #instance;
    static #steps = ['importar', 'documento', 'documentoIsolado', 'tipo', 'tipoClick', 'assunto', 'assuntoClick', 'orgaoEmissor', 'orgaoEmissorClick', 'descricao', 'procurar', 'abrir', 'salvar', 'ok'];

    static getInstance = (jsonFile) => {
        if(instance == null)
            instance = new Steps();
        
        this.#instance = jsonFile;
    }

    setStep = (step, x, y, text, sleep) => {
        if(!steps.includes(step))
            return;

        this[step] = new Task({x, y, text, sleep});
    }

    run = (robot) => {
        for(step of steps) {
            await this[step].executeTask(robot);
        }
    }
}

module.exports = Steps;