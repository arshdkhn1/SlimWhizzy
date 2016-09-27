// *******************************
// * SlimWhizzy
// * Written by Jody LeCompte
// * https://github.com/jodylecompte/SlimWhizzy
// * License: MIT License
// *******************************
var buttons = document.getElementsByClassName("toolbar-button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', processCommand, false);
}
