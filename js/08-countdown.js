var number = parseInt(window.prompt("Enter a number greater than zero."));
var counter;
for (counter = number; counter >= 0; counter--) {
    document.write(counter + '<br>');
}