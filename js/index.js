var canvas;
var brush;

//Input variables
var upKey;
var downKey;
var rightKey;
var leftKey;

//Game variables
var gameLoop;
var player;
var levelCounter;
var playerCollisionCounter;

//Runs once page has loaded
window.onload=function(){
    //Assign canvas and context variables
    canvas=document.getElementById("game-canvas");
    brush=canvas.getContext("2d");

    //Setup key listeners
    setupInputs();
    //Create player

    player= new Player(400,400);
    testBox = new StaticBox(200,20,200,400,5,5);

    //Start the game loop
    gameLoop=setInterval(step,1000/30);

    //Makes background white
    brush.fillStyle = "white";
    brush.fillRect(0,0,canvas.width,canvas.height);

    // //Level 1
	// 	levelCheck=true;
	// 	while(levelCheck){
	// 		//call level1draw function and initialize the objects in level 1
	// 	}
	// 	//Level 2
	// 	levelCheck=true;
	// 	while(levelCheck){
	// 		//call level2draw function and initialize the objects in level 2
    //     }
}

function step(){
    //Step player
    player.step();

    testBox.step();
    //Draw everything
    draw();

    
}
function draw(){
    //Clear the canvas first then it updates
    brush.fillStyle = "white";
    brush.fillRect(0,0,1280,720);
    //Text
    brush.fillStyle = "green";
    brush.font = "30px cursive";
    brush.fillText(questions[0].question, 10, 25);

    //Draw the player
    player.draw();
    testBox.draw();
    

    
}

function setupInputs(){
    document.addEventListener("keydown",function(event){
        if(event.key==="w"|| event.key==="ArrowUp"){
            upKey = true;
        }
        else if(event.key==="s"||event.key==="ArrowDown"){
            downKey=true;
        }
        else if(event.key==="a"||event.key==="ArrowLeft"){
            leftKey=true;
        }
        else if(event.key==="d"||event.key==="ArrowRight"){
            rightKey=true;
        }
        
    });
    document.addEventListener("keyup",function(event){
        if(event.key==="w"|| event.key==="ArrowUp"){
            upKey = false;
        }
        else if(event.key==="s"||event.key==="ArrowDown"){
            downKey=false;
        }
        else if(event.key==="a"||event.key==="ArrowLeft"){
            leftKey=false;
        }
        else if(event.key==="d"||event.key==="ArrowRight"){
            rightKey=false;
        }
        
    });
}
