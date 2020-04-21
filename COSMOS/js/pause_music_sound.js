
/*------------------------- PAUSE: ----------------------*/
var pause = false;
var a = 0;
var imgPause2 = document.getElementById("pause2");
var gifPause = document.getElementById("pauseGif");
function pauseClick() {
	if (start==true){
		a++;
		if(a % 2 != 0) { 
			pause = true;
			imgPause2.style.visibility = "visible"; 
			gifPause.style.visibility = "visible"; 
		}
		else{
			pause = false;
			imgPause2.style.visibility = "hidden"; 
			gifPause.style.visibility = "hidden"; 
		}
	}	
}

/*------------------------- MUSIC: ----------------------*/
var audio1 = new Audio(); 
audio1.src = 'sound/earth_song.mp3'; 
var imgMusic2 = document.getElementById("music2");
function musicClick() {
  	if(audio1.paused) {
       audio1.play(); 
       imgMusic2.style.visibility = "visible"; 
   	} 
   	else {
       audio1.pause(); 
       imgMusic2.style.visibility = "hidden";
    }
}

/*-------------------- collision SOUND: ------------------*/
var sound = true;
var b = 0;
var imgSound2 = document.getElementById("sound2");
var soundClick = function(){
	b++;
	if(b % 2 != 0) { 
		sound = false;
		imgSound2.style.visibility = "visible"; 
	}
	else {
		sound = true;
		imgSound2.style.visibility = "hidden";
	}
}

// with others: 
var audio2 = new Audio(); 
audio2.src = 'sound/collision_sound.mp3';
function collisionSound() {
	if (sound == true){
    	audio2.play(); 
	}
} 

// with star: 
var audio3 = new Audio(); 
audio3.src = 'sound/bonus_sound.mp3';
function bonusSound() {
	if (sound == true) {
    	audio3.play();
    }
} 





