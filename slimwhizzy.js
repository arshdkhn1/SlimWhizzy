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
    var blockCommands = ['h1', 'h2', 'h3', 'p'];
    var parameterCommands = ['createlink', 'insertimage'];
    var listCommands = ['insertorderedlist', 'insertUnorderedList'];

    if(parameterCommands.indexOf(command) !== -1) {
        var assetAddress = prompt('Enter URL: ', 'http:\/\/');
        document.execCommand(command, false, assetAddress);
    } else if(blockCommands.indexOf(command) !== -1) {
        document.execCommand('formatBlock', false, command);
    } else if(listCommands.indexOf(command) !== -1) {
        var listArray = ['item1', 'item 2'];
        document.execCommand(command);
    } else if(command == "save"){
        window.location.hash = window.btoa(document.querySelectorAll('div[contenteditable]')[0].innerHTML)
    }else{
        document.execCommand(command, false, null);
    }
}
