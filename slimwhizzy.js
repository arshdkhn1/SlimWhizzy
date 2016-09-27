// *******************************
// * SlimWhizzy
// * Written by Jody LeCompte
// * https://github.com/jodylecompte/SlimWhizzy
// * License: MIT License
// *******************************
var buttons = document.getElementsByClassName("toolbar-button");
for (var i = 0; i < buttons.length; i++) {
    var command = buttons[i].getAttribute('data-command');
    buttons[i].addEventListener('click', function() {
        processCommand(command);
    }, false);
}

function processCommand(command) {
    document.execCommand(command, false, null)
}
