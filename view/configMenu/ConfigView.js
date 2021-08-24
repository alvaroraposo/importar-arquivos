const BaseView = require("../base/BaseView");

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

        this.parent = parent;
        this.loadEvents();
    }

    loadEvents = () => {        
        const that = this;

        this.screen.key(['enter'], function(ch, key) {  
            if(that.table && that.table.rows.selected === 6) {
                const startTable = that.parent.initTable();
        
                that.screen.remove(that.table);
                that.screen.append(that.parent.table);
                
                that.parent.table.focus();
                that.screen.render();
            }                
        })
    }
}

module.exports = ConfigView;