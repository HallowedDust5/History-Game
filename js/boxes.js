class Box{

    constructor(tempWidth,tempHeight, tempx,tempy,tempxspeed,tempyspeed,tempwspeed,temphspeed){
        //position Vector
            //Really an SAT.Box obj, the position vector is the .pos attr of the variable
        this.pVector= new SAT.Box(new SAT.Vector(tempx,tempy),tempWidth,tempHeight)
        //velocity Vector
        this.vVector= new SAT.Vector(tempxspeed,tempyspeed);
        //dimension Vector 
            //The current dimensions are in the box object, this is simply the dimension velocity
        this.dVector = new SAT.Vector(tempwspeed,temphspeed);
        //Need to know what the original dimensions were if the dimensions are to be scaled
        this.trueWidth=this.tempWidth;
        this.trueHeight=this.tempHeight;
        
    
    
    }

    step(){
        //Adds velocity to position
        this.pVector.add(this.vVector);
        
 
    }
    draw(){
        brush.fillStyle="brown";
        brush.fillRect(this.pVector.pos.x,this.pVector.pos.y, this.pVector.w, this.pVector.h);
    }


}

