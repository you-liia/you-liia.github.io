
/*----------------------------- PLAY --------------------------*/
var play_button = document.getElementById("play");
var start = false;
var playClick = function(){
	start = true;
	play_button.style.display = "none";   
}

/*---------------------------- GAME OVER -----------------------*/
var replay_button = document.getElementById("replay");
var finish_ui = document.getElementById("finish");
var leaderboard_button = document.getElementById("leaderboard");
var visible_finish = function(){
	// buttons:
	finish_ui.style.visibility = "visible";
	replay_button.style.visibility = "visible"; 
	leaderboard_button.style.visibility = "visible";  
	// score output:
	document.getElementById("for_myScore").style.visibility = "visible";
	document.getElementById("for_myScore").innerHTML = (myScore/divider).toFixed(0);
	// green friend:
	document.getElementById("congrats").style.visibility = "visible";
	setTimeout(function(){document.getElementById("congrats").style.visibility = "hidden";}, 4000); 
}

/*---------------------------- REPLAY --------------------------*/
var replayClick = function(){
	start = true;
	hearts = 3;
	myScore = 0; 
	speed = 4;

	finish_ui.style.visibility = "hidden";    
	replay_button.style.visibility = "hidden";
	leaderboard_button.style.visibility = "hidden";
	document.getElementById("congrats").style.visibility = "hidden";
	document.getElementById("for_myScore").style.visibility = "hidden";

	// starting position for my player:
	hero_x = 900; 
    hero_y = 230;
    ctx.drawImage(my_image, hero_x, hero_y, hero_size, hero_size);

    // starting position for others:
    player2.player2_1.x = pickRandomDistance();
    player3.player3_1.x = pickRandomDistance();
    player4.player4_1.x = pickRandomDistance();
	player5.player5_1.x = pickRandomDistance();
	player6.player6_1.x = pickRandomDistance();
	player7.player7_1.x = pickRandomDistance();
	player8.player8_1.x = pickRandomDistance();
	player9.player9_1.x = pickRandomDistance();    
	// random character:
	player2.player2_1.my_pic = pickRandomValue(characters); 
	player3.player3_1.my_pic = pickRandomValue(characters); 
	player4.player4_1.my_pic = pickRandomValue(characters); 
	player5.player5_1.my_pic = pickRandomValue(characters); 
	player6.player6_1.my_pic = pickRandomValue(characters); 
	player7.player7_1.my_pic = pickRandomValue(characters); 
	player8.player8_1.my_pic = pickRandomValue(characters);
	player9.player9_1.my_pic = pickRandomValue(characters); 
}