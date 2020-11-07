var counter = document.getElementById("text");

// Counter
var count = 0;

// Displays the couter
counter.innerHTML = count;

var selector = ["red", "blue", "green", "orange", "white", "grey", "purple"];

document.getElementById("text").style.color = selector[0];
if (count > 10) {
    document.getElementById("text").style.color = selector[2];
}
// Increases The Counter
function add() {
    count++;
    document.getElementById("text").innerHTML = count;
    colorText();
}

// Decreases The Counter
function minus() {
    count--;
    counter.innerHTML = count;
}

// Array of Colours
// Change Text Colour of Count on Random number
// Opacity increases on click
function colorText() {
    var rand = count % 10;
    var rcolour  = Math.floor((Math.random() * 7) + 0);
    var opacityVal = 0.1;
    if (rand == 0) {
        document.getElementById("text").style.color = selector[rcolour];
        document.getElementById("text").style.opacity = 0.1;
    } else {
        document.getElementById("text").style.opacity -= -opacityVal;
    }
}
//