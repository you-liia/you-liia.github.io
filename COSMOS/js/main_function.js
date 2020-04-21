var main_func = function() {
	if (start==true){
		if (pause == false){

			// CANVAS
			ctx.clearRect(0,0,width,height); 
			ctx.strokeRect(0,0,width,height);
			
			// line:
		    ctx.strokeStyle = "orange";
		    ctx.beginPath(); 
  			ctx.moveTo(0,75); 
  			ctx.lineTo(width,75); 
  			ctx.stroke();
	
			// move objects:
			player2.player2_1.horizontalMovement();
			player3.player3_1.horizontalMovement();
			player4.player4_1.horizontalMovement();
			player5.player5_1.horizontalMovement();
			player6.player6_1.horizontalMovement();
			player7.player7_1.horizontalMovement();
			player8.player8_1.horizontalMovement();
			player9.player9_1.horizontalMovement();

			// score and hearts 
			score();
		    ctx.fillText(hearts, 100, 50); 
		    
		    // move my player:
		    moveMyPlayer();          	
	    }
	}
}
		
var secondParam = 10;
setInterval(main_func, secondParam);
		