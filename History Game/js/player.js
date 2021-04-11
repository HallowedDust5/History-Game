function Player(x,y){
    this.x=x;
    this.y=y;
    this.xspeed = 0;
    this.yspeed = 0;
    this.friction = 0.6;
    //Player dimensions as a rectangle
    this.width=50;
    this.height=100;

    this.step=function(){

    }
    this.draw=function(){
        brush.fillStyle="green";
        brush.fillRect(this.x,this.y, this.width, this.height)
    }
}