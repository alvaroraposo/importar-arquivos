const blessed = require('blessed');
const contrib = require('blessed-contrib');
const ConfigView = require('./view/configMenu/ConfigView');
const StartView = require('./view/startMenu/StartView');
const screen = blessed.screen();

let startView = null;
let configView = null;

(() => {
    startView = new StartView(screen, blessed, contrib);
    
    screen.append(startView.getTable());
    startView.getTable().focus();
    
    screen.render();
})();

screen.key(['enter'], function(ch, key) {
    
    if(startView && startView.getTable().rows.selected === 1) {        
        configView = new ConfigView(screen, blessed, contrib);

        screen.remove(startView.getTable());
        screen.append(configView.getTable());

        startView = null;
        configView.getTable().focus();
        screen.render();        
    }
    
    if(configView && configView.getTable().rows.selected === 6) {
        startView = new StartView(screen, blessed, contrib);

        screen.remove(configView.getTable());
        screen.append(startView.getTable());
        
        configView = null;
        startView.getTable().focus();
        screen.render();        
    }    

    if(configView && configView.getTable().rows.selected === 1) {        
/*        if(textBox != null) {
            configTable.remove(label);
            configTable.remove(textBox);
        }            */

        label = configView.newLabel("Digite Novo Tipo");
        textBox = configView.newTextbox();

        configView.getTable().append(label);
        configView.getTable().append(textBox);

        textBox.focus();
        screen.render();
    }
})