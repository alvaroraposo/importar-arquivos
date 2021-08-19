const Task = require('./task.js');

class Steps {
    Steps = () => {};
    static #instance;
    static #steps = ['importar', 'documento', 'documentoIsolado', 'tipo', 'tipoClick', 'assunto', 'assuntoClick', 'orgaoEmissor', 'orgaoEmissorClick', 'descricao', 'procurar', 'abrir', 'salvar', 'ok'];

    static getInstance = () => {
        if(instance == null)
            instance = new Steps();
    }

    constructor() {
        this.importar = new Task({ x: 96, y: 95});
        this.documento = new Task({ x: 99, y: 123, sleep: 5000});        
        this.documentoIsolado = new Task({ x: 639, y: 292});
        this.tipo = new Task({ x: 762, y: 463, text: "Certidao"});
        this.tipoClick = new Task({ x: 732, y: 485});
        this.assunto = new Task({ x: 732, y: 495, text: "Certidao Negativa"});
        this.assuntoClick = new Task({ x: 732, y: 517});
        this.orgaoEmissor = new Task({ x: 732, y: 535, text: "TCEAM"});
        this.orgaoEmissorClick = new Task({ x: 732, y: 552, sleep: 1000});
        this.descricao = new Task({ x: 732, y: 600, text: "Descrição Qualquer"})
        this.procurar = new Task({ x: 950, y: 665, text: "C:\\Users\\Avell\\OneDrive - incubate web-enabled systems\\003 Desenvolvimento Web\\[PROGRAMMING][Clean Code by Robert C Martin].pdf"});
        this.abrir = new Task({ x: 630, y: 445, sleep: 1000});
        this.salvar = new Task({ x: 732, y: 742, sleep: 10000});
        this.ok = new Task({ x: 742, y: 455});
        this.steps = ['importar', 'documento', 'documentoIsolado', 'tipo', 'tipoClick', 'assunto', 'assuntoClick', 'orgaoEmissor', 'orgaoEmissorClick', 'descricao', 'procurar', 'abrir', 'salvar', 'ok'];
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