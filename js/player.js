class Player{

    constructor(tempx,tempy,tempWidth=50,tempHeight=100){
        this.x = tempx;
        this.y = tempy;
        this.xspeed = 0;
        this.yspeed = 0;
        this.friction = 0.4;
        this.maxSpeed = 0;
        //Player dimensions as a rectangle
        this.width = tempWidth;
        this.height = tempHeight;
        this.active = true;
    }

    step(){
        //Movement
        if(this.active){
            //Horizontal Movement
            if(!leftKey&& !rightKey || leftKey && rightKey){
                //Slow down
                this.xspeed*=this.friction;
            }
            else if (rightKey){
                //Move right
                this.xspeed++;
            }
            else if(leftKey){
                this.xspeed--;
            }

            //Vertical Movement


            //Correcting Speed
                //X
            this.x+=this.xspeed;
            this.y+=this.yspeed;
            if(this.xspeed>this.maxSpeed){
                this.xspeed=this.maxSpeed;
            }
            if(this.xspeed<-1*this.maxSpeed){
                this.xspeed=-1*this.maxSpeed;
            }

                //Y
        }


    }
    draw(){
        brush.fillStyle="green";
        brush.fillRect(this.x,this.y, this.width, this.height)
    }
}