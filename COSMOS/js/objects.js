var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var picsize = 60; 
var characters = ["character1", "character2", "star", "character3", "character4", "character1", "character2", "character3", "character4", "character1", "character2", "character3", "character4"];
var hearts = 3;
var respite = false;
var stop_respite = function(){
	respite = false;
}


/*--------------  random distance --------------*/
var minDistance=-1000; 
var maxDistance=1; 
var pickRandomDistance = function(){
	return Math.floor(Math.random() * (maxDistance - minDistance)) + minDistance;
} 
/*--------------  random picture (character) --------------*/
var pickRandomValue = function(your_array){
	return your_array[Math.floor(Math.random()*your_array.length)]; 
} 



// constructor 
var Player = function(x, y, my_pic){  
	this.x = x;
	this.y = y;
	this.my_pic = my_pic;
};

/*----------------------  objects  --------------------------*/
var player2_y = 80;
player2 = new Player(pickRandomDistance(), player2_y, pickRandomValue(characters));

var player3_y = 155;
player3 = new Player(pickRandomDistance(), player3_y, pickRandomValue(characters));

var player4_y = 230;
player4 = new Player(pickRandomDistance(), player4_y, pickRandomValue(characters));

var player5_y = 305;
player5 = new Player(pickRandomDistance(), player5_y, pickRandomValue(characters));

var player6_y = 380;
player6 = new Player(pickRandomDistance(), player6_y, pickRandomValue(characters));
	
var player7_y = 455;
player7 = new Player(pickRandomDistance(), player7_y, pickRandomValue(characters));

var player8_y = 530;
player8 = new Player(pickRandomDistance(), player8_y, pickRandomValue(characters));
	
var player9_y = 605;
player9 = new Player(pickRandomDistance(), player9_y, pickRandomValue(characters));

