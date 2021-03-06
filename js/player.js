class Player{

    constructor(tempx,tempy,tempWidth=50,tempHeight=100){
        this.pVector= new SAT.Box(new SAT.Vector(tempx,tempy),tempWidth,tempHeight); 
        this.vVector= new SAT.Vector(0,0);
        this.friction = 0.4;
        this.maxSpeed = 10;
        //Player dimensions as a rectangle
        this.active = true;
    }

    step(){
        //Movement
        if(this.active){
                //Horizontal Movement
            if(!leftKey&& !rightKey || leftKey && rightKey){
                //Slow down
                this.vVector.x*=this.friction;
            }
            else if (rightKey){
                //Move right
                this.vVector.x++;
            }
            else if(leftKey){
                this.vVector.x--;
            }

                //Vertical Movement
            if(!upKey&& !downKey || upKey && downKey){
                //Slow down
                this.vVector.y*=this.friction;
            }
            else if (downKey){
                //Move right
                this.vVector.y++;
            }
            else if(upKey){
                this.vVector.y--;
            }

            //forEach box in level
            
            //This'll be where the collision between the player and every box is handled
            let arr =[testBox,testBox2];
            //Iterates through every box in the array
            for(let i=0; i<arr.length;i++){
                //Creates an SAT.Response obj
                    //It's simply there to store the details of a collision
                let collideTest= new SAT.Response();
                //This asks if the player and the box are colliding
                if(SAT.testPolygonPolygon(this.pVector.toPolygon(),arr[i].pVector.toPolygon(),collideTest)){
                    //Reverses the vector
                    this.vVector.reverse();
                    //If there's any overlap on the y axis
                    if(collideTest.overlapN.y!=0){
                        //Displaces the box so it's out of the other box
                        this.pVector.pos.y+=-1*collideTest.overlapV.y;
                        //Reverses the x axis so it bounces the right way
                        this.vVector.x*=-1;
                    }
                    //Same thing as the other if statement, but with x
                    else if(collideTest.overlapN.x!=0){
                        this.pVector.pos.x+=-1*collideTest.overlapV.x;
                        this.vVector.y*=-1;
                    }
                    
                    
                    
                   
                
                    
                    

                }
        }

            //Correcting Speed
                //If the speed is greater or less than the max speed, it's reassigned to the max speed
                //X
            this.pVector.pos.add(this.vVector);
            if(this.vVector.x>this.maxSpeed){
                this.vVector.x=this.maxSpeed;
            }
            if(this.vVector.x<-1*this.maxSpeed){
                this.vVector.x=-1*this.maxSpeed;
            }

                //Y
            if(this.vVector.y>this.maxSpeed){
                this.vVector.y=this.maxSpeed;
            }
            else if(this.vVector.y<-1*this.maxSpeed){
                this.vVector.y=-1*this.maxSpeed;
            }
            
        }


    }
    draw(){
        brush.fillStyle="green";
        //If the player and testBox are colliding, it turns purple
        if(SAT.testPolygonPolygon(this.pVector.toPolygon(),testBox.pVector.toPolygon(),null)){
            brush.fillStyle="purple"
            
        }
        
        brush.fillRect(this.pVector.pos.x,this.pVector.pos.y, this.pVector.w, this.pVector.h)
    }
}

