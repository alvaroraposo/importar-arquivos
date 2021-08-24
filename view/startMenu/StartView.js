const BaseView = require("../base/BaseView");
const ConfigView = require("../configMenu/ConfigView");

class StartView extends BaseView {
    constructor(screen, blessed, contrib) {
        super("StartView", screen, blessed, contrib, {
            headers: ['Opções'],
            options: [ [1, 'Importar Arquivos'], 
            [2, 'Configurações']]
        }) 

        this.loadEvents();
    }

    loadEvents = () => {        
        let that = this;

        this.screen.key(['enter'], function(ch, key) {       
            if(that.table && that.table.rows.selected === 1) {
                const configView = new ConfigView(that.screen, that.blessed, that.contrib, that);
                const configTable = configView.initTable();
        
                that.screen.remove(that.table);
                that.screen.append(configTable);
        
                configTable.focus();
                that.screen.render();      
            }
        })
    }
}

module.exports = StartView;