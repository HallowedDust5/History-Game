class MovingBox extends Box{
    constructor(tempWidth,tempHeight, tempx,tempy,tempxspeed,tempyspeed,tempwspeed,temphspeed){
        super(tempWidth,tempHeight, tempx,tempy,tempxspeed,tempyspeed,tempwspeed=0,temphspeed=0);
    }

    draw(){
        brush.fillStyle="brown";
        brush.fillRect(this.pVector.pos.x,this.pVector.pos.y, this.pVector.w, this.pVector.h);
    }
}