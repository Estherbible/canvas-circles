canvas = document.getElementById("myCanvas");
mouseEvent = "";
ctx = canvas.getContext("2d");
var lastPositonOfX, lastPositonOfY;
color = "black";
width = 1;

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    mouseEvent = "mousedown"
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseup"

}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    currentPosX = e.clientX - canvas.offsetLeft;
    currentPosY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lastPositonOfX, lastPositonOfY);
        circle(currentPosX, currentPosY);
        ctx.stroke();
    }
    lastPositonOfX = currentPosX
    lastPositonOfY = currentPosY
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseleave"

}

function clearScreen(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function circle(mouseX,mouseY){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=5
    ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
    ctx.stroke(); 
}