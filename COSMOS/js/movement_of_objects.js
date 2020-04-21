var speed = 4; 

/*--------------------- MOVE objects TO THE RIGHT --------------------*/     
Player.prototype.horizontalMovement = function(){

	// draw picture
	var img = document.getElementById(this.my_pic); 
	ctx.drawImage(img, this.x, this.y, picsize, picsize); 
	// speed
	this.x = this.x + speed;  
				 
	if (this.x>width) { 
		this.x = pickRandomDistance()-200;
		this.my_pic = pickRandomValue(characters); 		
		// speed: 		
		if (speed > 14) speed = 14;
		else speed = speed + 0.1;  
	}


	/*---------------   collision:  --------------*/
	if (respite == false){ 
		if (this.x+10 <= hero_x+hero_size-10 && 
			this.x+picsize-10 >= hero_x+10 &&        
			this.y+10 <= hero_y+hero_size-10 &&
			this.y+picsize-10 >= hero_y+10) {
	
			if (this.my_pic == "star"){ 
				hearts++;
				bonusSound();
			}
			else { 
				hearts--;
				collisionSound();
			}	
			respite = true; 
			setTimeout(stop_respite, 500); 
					
			// game over: 
			if (hearts==0) { 
				start=false;
				visible_finish(); 
			}		
		}
	}

}
		
