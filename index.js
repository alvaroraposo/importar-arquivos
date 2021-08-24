const blessed = require('blessed');
const contrib = require('blessed-contrib');
const StartView = require('./view/startMenu/StartView');
const screen = blessed.screen();


(() => {
    const startView = new StartView(screen, blessed, contrib);    
    screen.append(startView.getTable());
    startView.getTable().focus();
    
    screen.render();

/*    let configTable = null;
    let textBox = null;
    let label = null;*/

//    console.log("index.js");


})();