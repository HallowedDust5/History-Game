class Box{

    constructor(tempWidth,tempHeight, tempx,tempy,tempxspeed,tempyspeed,tempwspeed,temphspeed){
        this.width=tempWidth;
        this.height=tempHeight;
        this.x=tempx;
        this.y=tempy;
        this.xspeed=tempxspeed;
        this.yspeed=tempyspeed;
        this.wspeed=tempwspeed;
        this.hspeed=temphspeed;
        this.trueWidth=this.tempWidth;
        this.trueHeight=this.tempHeight;
    }

    step(){
        this.x+=this.xspeed;
        this.y+=this.yspeed;
        
        
        // this.width=this.trueWidth*Math.cos((1*Math.pow(10,0))*this.width);
        // this.height=this.trueHeight*Math.cos((1*Math.pow(10,0))*this.height/2);
    }
    draw(){
        brush.fillStyle="red";
        brush.fillRect(this.x,this.y,this.width,this.height);
        

    }


}

