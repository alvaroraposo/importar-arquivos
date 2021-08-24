class BaseView {
    constructor(name, screen, blessed, contrib, data) {        
        this.name = name;
        this.blessed = blessed;
        this.contrib = contrib;
        this.data = data;    
        this.screen = screen;
        this.table = this.initTable();

        this.screen.key(['q', 'C-c'], function(ch, key) {
            return process.exit(0);
        });        
    }

    initTable = function() {
        this.table = this.contrib.table(
            {
              screen: this.screen 
            , keys: true
            , fg: 'white'
            , selectedFg: 'white'
            , selectedBg: 'blue'
            , interactive: true
            , label: 'Importação de Arquivos para o SPEDE'
            , width: '100%'
            , height: '100%'
            , border: {type: "line", fg: "cyan"}
            , columnSpacing: 2 //in chars
            , columnWidth: [14, 30] /*in chars*/ })    
        
        this.table.setData({ headers: this.data.headers, data: this.data.options });

        return this.table;
    }

    getTable = function() {            
        return this.table;
    }

    newLabel = (parent, content) => {
        label = this.blessed.text({
            parent,
            content,
            top: "70%"
        })
    
        return label;
    }

    newTextbox = (parent) => {
    
        textBox = this.blessed.textbox({
            parent,
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
    
        textBox.on("submit", (data) => {
            console.log('submit enter', data);
        });
    
        textBox.on("blur", () => {
            if(parent && textBox) {
                parent.remove(label);
                parent.remove(textBox);                
                parent.focus();
                textBox = null;
                label = null;
            }
            this.screen.render();
        })
    
        return textBox;
    }
}

module.exports = BaseView;