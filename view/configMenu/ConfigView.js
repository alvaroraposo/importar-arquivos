const BaseView = require("../base/BaseView");
const StartView = require("../startMenu/StartView");

class ConfigView extends BaseView {
    constructor(screen, blessed, contrib, parent) {
        super("ConfigView", screen, blessed, contrib, {
            headers: ['Opções'],
            options: [ [1, 'Calibrar'], 
            [2, 'Alterar Tipo'],
            [3, 'Alterar Assunto'],
            [4, 'Alterar Órgão Emissor'],
            [5, 'Alterar Descrição'],
            [6, 'Alterar Pasta com Arquivos'],
            [7, 'Voltar'] ]
        })

        this.label = null;
        this.textBox = null;
    }    

    newLabel = (content) => {
        this.label = this.blessed.text({
            content,
            top: "70%"
        })
    
        return this.label;
    }
    
    newTextbox = () => {        
        this.textBox = this.blessed.textbox({
            inputOnFocus: true,
            top: "75%",
            height: "10%",
            border: {
                type: 'line',
                fg: 'blue'
            },
            focus: {
                fg: 'blue'
            }
        });
    
        this.textBox.on("submit", (data) => {
            console.log('submit enter', data);
        });
    
        this.textBox.on("blur", () => {
            if(this.textBox) {
                this.table.remove(this.label);
                this.table.remove(this.textBox);                
                this.table.focus();
                this.textBox = null;
                this.label = null;
            }
            this.screen.render();
        })
    
        return this.textBox;
    }
}

module.exports = ConfigView;