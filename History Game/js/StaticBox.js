class StaticBox extends Box{
    constructor(tempWidth,tempHeight, tempx,tempy, tempwspeed,temphspeed){
        super(tempWidth,tempHeight, tempx,tempy,0,0,tempwspeed,temphspeed);
    }

    step(){

    }
    draw(){
        brush.fillStyle="black";
        brush.fillRect(this.x,this.y,this.width,this.height);
    }


}