class Box{

    constructor(tempWidth,tempHeight, tempx,tempy,tempxspeed,tempyspeed,tempwspeed,temphspeed){
        this.pVector= new SAT.Box(new SAT.Vector(tempx,tempy),tempWidth,tempHeight)
        this.vVector= new SAT.Vector(tempxspeed,tempyspeed);
        this.dVector = new SAT.Vector(tempwspeed,temphspeed);
        this.trueWidth=this.tempWidth;
        this.trueHeight=this.tempHeight;
        
    
    
    }

    step(){
        this.pVector.pos.x+=this.vVector.x;
        this.pVector.pos.y+=this.vVector.y;
        
 
    }
    draw(){
        brush.fillStyle="brown";
        brush.fillRect(this.pVector.pos.x,this.pVector.pos.y, this.pVector.w, this.pVector.h);
    }


}

