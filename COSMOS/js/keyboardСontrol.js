/* ---- check if a key is pressed/released ---- */
var leftArrowPressed = false;  
var upArrowPressed = false; 
var rightArrowPressed = false;  
var downArrowPressed = false; 

document.addEventListener("keydown", keyPressed, false);
document.addEventListener("keyup", keyReleased, false); 

function keyPressed(e) {
    if(e.keyCode == 37) {
        leftArrowPressed = true;
    }
    else if(e.keyCode == 38) {
        upArrowPressed = true;
    }
    else if(e.keyCode == 39) {
        rightArrowPressed = true;
    }
    else if(e.keyCode == 40) {
        downArrowPressed = true;
    }
}
        
function keyReleased(e) {
    if(e.keyCode == 37) {
        leftArrowPressed = false;
    }
    else if(e.keyCode == 38) {
        upArrowPressed = false;
    }
    else if(e.keyCode == 39) {
        rightArrowPressed = false;
    }
    else if(e.keyCode == 40) {
        downArrowPressed = false;
    }
}


/* -------------- move my player: -------------*/
var hero_x = 900; 
var hero_y = 230;
var hero_size = 60;
var my_image = document.getElementById("myPlayer");
ctx.drawImage(my_image, hero_x, hero_y, hero_size, hero_size);

function moveMyPlayer() {
    var my_image = document.getElementById("myPlayer");
    ctx.drawImage(my_image, hero_x, hero_y, hero_size, hero_size);

    if(leftArrowPressed && hero_x > 0){ 
        hero_x=hero_x-10;
        ctx.drawImage(my_image, hero_x, hero_y, hero_size, hero_size);
    }
    else if(upArrowPressed && hero_y > 75){  
        hero_y=hero_y-10;
        ctx.drawImage(my_image, hero_x, hero_y, hero_size, hero_size);
    }
    else if(rightArrowPressed && hero_x < width-hero_size){ 
        hero_x=hero_x+10;
        ctx.drawImage(my_image, hero_x, hero_y, hero_size, hero_size);
    }
    else if(downArrowPressed && hero_y < height-hero_size){ 
        hero_y=hero_y+10;
        ctx.drawImage(my_image, hero_x, hero_y, hero_size, hero_size);
    }
}
