var secondParam = 10; 
var divider = 1000/secondParam; 

//score output
myScore=0;
function score() {  
	ctx.font = "italic 30px Arial"; 
	ctx.fillStyle = "white";
	ctx.fillText("SCORE: ", 635, 50);
    ctx.fillText((myScore/divider).toFixed(0), 780, 50);
    myScore++;
}

       