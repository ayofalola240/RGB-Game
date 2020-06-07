var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var HardBtn = document.querySelector("#HardBtn");

easyBtn.addEventListener("click", function(){
    HardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }

})
HardBtn.addEventListener("click", function(){
    HardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
    
            squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click",function(){
    colors = generateRandomColors(numSquares);

    messageDisplay.textContent = "";

    pickedColor = pickColor();

    h1.style.background = "steelblue";

    this.textContent = "new colors";

    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {

        squares[i].style.background = colors[i];
    }
    
})
console.log(colors);
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {

   squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function () {

        var clickedColor = this.style.background;

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            h1.style.background = pickedColor;
           
            for(var i = 0; i < numSquares; i++){
                squares[i].style.background = pickedColor;
            }
        } else {
            this.style.background = "#232323";
            messageDisplay.innerHTML = "Try again"

        }
    });
}

function changeColors(color){

    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }

}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

}

function generateRandomColors(num){
    var arr = []

    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;

}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", "+ g + ", "+ b +")";
}