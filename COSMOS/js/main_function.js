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
			player2.horizontalMovement();
			player3.horizontalMovement();
			player4.horizontalMovement();
			player5.horizontalMovement();
			player6.horizontalMovement();
			player7.horizontalMovement();
			player8.horizontalMovement();
			player9.horizontalMovement();

			// score and hearts 
			score();
		    ctx.fillText(hearts, 100, 50); 
		    
		    // move my player:
		    moveMyPlayer();          	
	    }
	}
}
		
setInterval(main_func, secondParam);
		