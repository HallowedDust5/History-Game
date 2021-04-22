class DeathBox extends Box{

    constructor(tempWidth,tempHeight, tempx,tempy,tempxspeed=0,tempyspeed=0,tempwspeed=0,temphspeed=0,tempMoving=true){
        super(tempWidth,tempHeight, tempx,tempy,tempxspeed,tempyspeed,tempwspeed,temphspeed);
        //This simply says whether it's a moving deathbox or not, if its not moving then it's assumed that its supposed to be transparent too
        this.moving=tempMoving;
    }

    step(){
        if(this.moving){    
            let ppVector = new SAT.Vector().copy(player.pVector.pos);
            let bpVector = new SAT.Vector().copy(this.pVector.pos);

            this.vVector.copy(ppVector.sub(bpVector).normalize());
            this.pVector.pos.add(this.vVector);
        }
    }

    draw(){
        if(this.moving){
            brush.fillStyle="red";
            brush.fillRect(this.pVector.pos.x,this.pVector.pos.y, this.pVector.w, this.pVector.h);
        }
    }


}