class Player{

    constructor(tempx,tempy,tempWidth=50,tempHeight=100){
        this.x = tempx;
        this.y = tempy;
        this.xspeed = 0;
        this.yspeed = 0;
        this.friction = 0.4;
        this.maxSpeed = 10;
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
            if(!upKey&& !downKey || upKey && downKey){
                //Slow down
                this.yspeed*=this.friction;
            }
            else if (downKey){
                //Move right
                this.yspeed++;
            }
            else if(upKey){
                this.yspeed--;
            }

            //forEach box in level
            let box=testBox;
            if(checkIntersection(this, box)){
                // let vCollision = {x: box.x - this.x, y: box.y - this.y};
                // let distance = Math.sqrt((box.x-this.x)*(box.x-this.x) + (box.y-this.y)*(box.y-this.y));
                // let vCollisionNorm = {x: vCollision.x / distance, y: vCollision.y / distance};
                // let vRelativeVelocity = {x: this.xspeed - box.xspeed, y: this.yspeed - box.yspeed};
                // let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
                // if(speed>=0){
                //     this.xspeed-=(speed *  vCollisionNorm.x);
                //     this.yspeed -= (speed * vCollisionNorm.y);
                //     box.xspeed += (speed * vCollisionNorm.x);
                //     box.yspeed += (speed * vCollisionNorm.y);
                // }
                // if(box.x > this.width + this.x && this.x > box.width + box.x){
                //     this.xspeed=box.xspeed;
                // }
                // if(box.y > this.height + this.y && this.y > box.height + box.y){
                //     this.yspeed=box.yspeed;
                // }
                
                if(this.y+this.height>box.y){
                    if(this.yspeed>0){
                        this.yspeed=box.yspeed;
                    }
                }
                else if(this.y<box.y+box.height){
                    if(this.yspeed<0){
                        this.yspeed=box.yspeed;
                    }
                }
                
                //this.yspeed=box.yspeed;
                

            }

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
            if(this.yspeed>this.maxSpeed){
                this.yspeed=this.maxSpeed;
            }
            else if(this.yspeed<-1*this.maxSpeed){
                this.yspeed=-1*this.maxSpeed;
            }
            
        }


    }
    draw(){
        brush.fillStyle="green";
        if(checkIntersection(this, testBox)){
            brush.fillStyle="purple"
        }
        
        brush.fillRect(this.x,this.y, this.width, this.height)
    }
}

