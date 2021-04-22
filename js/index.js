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
var levelCounter=0;
var playerCollisionCounter;

//Runs once page has loaded
window.onload=function(){
    //Assign canvas and context variables
    canvas=document.getElementById("game-canvas");
    brush=canvas.getContext("2d");

    //Setup key listeners
    setupInputs();
    //Create player

    player= new Player(200,200,50,50);
    testBox = new MovingBox(100,100,600,420,-1,0);
    testBox2 = new MovingBox(100,100,0,420,1,0);
    testBox3 = new DeathBox(10,10,0,0);
    

    //Start the game loop
    gameLoop=setInterval(step,1000/30);

    //Makes background white
    brush.fillStyle = "white";
    brush.fillRect(0,0,canvas.width,canvas.height);


}

function step(){
    //Step player
    player.step();

    testBox.step();
    testBox2.step();
    testBox3.step();
    //Draw everything
    draw();
    if(levelCounter==1){stepLvl1();}
    else if(levelCounter==2){stepLvl2();}
    else if(levelCounter==3){stepLvl3();}
    else if(levelCounter==4){stepLvl4();}
    else if(levelCounter==5){stepLvl5();}

    
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
    testBox2.draw();
    testBox3.draw();

    
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

function stepLvl1(){}
function stepLvl2(){}
function stepLvl3(){}
function stepLvl4(){}
function stepLvl5(){}
