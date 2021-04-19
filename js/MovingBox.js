class MovingBox extends Box{
    constructor(tempWidth,tempHeight, tempx,tempy,tempxspeed,tempyspeed,tempwspeed,temphspeed){
        super(tempWidth,tempHeight, tempx,tempy,tempxspeed,tempyspeed,tempwspeed,temphspeed);
    }

    draw(){
        brush.fillStyle="brown";
        brush.fillRect(this.x,this.y,this.width,this.height);
    }
}