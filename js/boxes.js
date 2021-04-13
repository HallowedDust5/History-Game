class Box{

    constructor(tempWidth,tempHeight, tempx,tempy,tempxspeed,tempyspeed,tempwspeed,temphspeed,temptype){
        this.width=tempWidth;
        this.height=tempHeight;
        this.x=tempx;
        this.y=tempy;
        this.xspeed=tempxspeed;
        this.yspeed=tempyspeed;
        this.wspeed=tempwspeed;
        this.hspeed=temphspeed;
        this.type=temptype;
    }

    step(){
        this.x+=this.xspeed;
        this.y+=this.yspeed;
        this.w+=this.wspeed;
        this.h+=this.hspeed;

    // this.w=100*cos(this.w);
    // this.h=100*cos(this.h);
    }
    draw(){
        if(this.type==="ground"){
            brush.fillStyle="brown";
        }
        else if(this.type==="obstacle"){
            brush.fillStyle="red";
        }



        //The actual drawing of the box
        brush.fillRect(this.x,this.y,this.width,this.height);
    }


}