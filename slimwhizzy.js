// *******************************
// * SlimWhizzy
// * Written by Jody LeCompte
// * https://github.com/jodylecompte/SlimWhizzy
// * License: MIT License
// *******************************
var buttons = document.getElementsByClassName("toolbar-button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var command = this.getAttribute('data-command');
        processCommand(command);
    }, false);

}

function processCommand(command) {
    console.log(command);
    document.execCommand(command, false, null);
}
