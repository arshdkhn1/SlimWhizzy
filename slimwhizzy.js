// *******************************
// * SlimWhizzy
// * Written by Jody LeCompte
// * https://github.com/jodylecompte/SlimWhizzy
// * License: MIT License
// *******************************
var buttons = document.getElementsByClassName("toolbar-button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        processCommand(this.getAttribute('data-command'));
    }, false);

}

function processCommand(command) {
    var directCommands = [
        'bold', 'italic', 'underline'
    ];

    var blockCommands = [
        'h1', 'h2', 'h3', 'h4'
    ];

    if(directCommands.indexOf(command) !== -1) {
        document.execCommand(command, false, null);
    }

    if(blockCommands.indexOf(command) !== -1) {
        document.execCommand(formatBlock, false, command);
    }

    //document.execCommand(command, false, null);
}
