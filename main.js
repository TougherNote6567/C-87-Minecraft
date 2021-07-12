var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
var block_img_width=30;
block_img_height=30;
var player_object="";
var block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
       block_img_object=Img;
       block_img_object.scaleToWidth(block_img_width);
       block_img_object.scaleToHeight(block_img_height);
       block_img_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
keyPressed = e.keyCode;

if(e.shiftKey == true && keyPressed == '80'){
console.log("The keys 'shift' and 'p' have been pressed together.");
block_img_width=block_img_width+10;
block_img_height=block_img_height+10;
document.getElementById("current_width").innerHTML=block_img_width;
document.getElementById("current_height").innerHTML=block_img_height;
}

if(e.shiftKey == true && keyPressed == '77'){
    console.log("The keys 'shift' and 'm' have been pressed together.");
    block_img_width=block_img_width-10;
    block_img_height=block_img_height-10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(keyPressed == '38'){
        console.log("The 'up' arrow key has been pressed.");
    }

    if(keyPressed == '40'){
        console.log("The 'down' arrow key has been pressed.");
    }

    if(keyPressed == '37'){
        console.log("The 'left' arrow key has been pressed.");
    }

    if(keyPressed == '39'){
        console.log("The 'right' arrow key has been pressed.");
    }

    if(keyPressed == '67'){
        console.log("The 'c' key has been pressed.");
        new_image('cloud.jpg');
    }

    if(keyPressed == '68'){
        console.log("The 'd' key has been pressed.");
        new_image('dark_green.png');
    }

    if(keyPressed == '71'){
        console.log("The 'g' key has been pressed.");
        new_image('ground.png');
    }

    if(keyPressed == '76'){
        console.log("The 'l' key has been pressed.");
        new_image('light_green.png');
    }

    if(keyPressed == '82'){
        console.log("The 'r' key has been pressed.");
        new_image('roof.jpg');
    }

    if(keyPressed == '84'){
        console.log("The 't' key has been pressed.");
        new_image('trunk.jpg');
    }

    if(keyPressed == '85'){
        console.log("The 'u' key has been pressed.");
        new_image('unique.png');
    }

    if(keyPressed == '87'){
        console.log("The 'w' key has been pressed.");
        new_image('wall.jpg');
    }

    if(keyPressed == '89'){
        console.log("The 'y' key has been pressed.");
        new_image('yellow_wall.png');
    }
}