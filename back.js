var button = document.getElementById("clear");
var button2 = document.getElementById("toggle");
var canvas = document.getElementById("work");
var ctx = canvas.getContext("2d");
var mode = "circle";
var clear = function(){
    ctx.clearRect(0,0,500,500);
}

var toggle = function(){
    if (mode == "circle") {
	mode = "square";
    }
    else{
	mode = "circle";
    }
}

var draw = function(e){

    if (mode == "square"){
	ctx.fillRect(e.clientX, e.clientY, 50,50);
    }
    else {
	ctx.beginPath();
	ctx.arc(e.clientX, e.clientY, 30, 0 , 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
    }

}

canvas.addEventListener("click", draw);
button.addEventListener("click", clear);
button2.addEventListener("click", toggle);
