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
            
            let arr =[testBox];
            for(let i=0; i<arr.length;i++){
                let collideTest= new SAT.Response();
                if(SAT.testPolygonPolygon(this.pVector.toPolygon(),arr[i].pVector.toPolygon(),collideTest)){
                    if(collideTest.overlapN.y!=0){
                        this.pVector.pos.y+=-1*collideTest.overlapV.y;
                    }
                    if(collideTest.overlapN.x!=0){
                        this.pVector.pos.x+=-1*collideTest.overlapV.x;
                    }
                    this.vVector.reverse();
                    
                    
                    
                   
                
                    
                    

                }
        }

            //Correcting Speed
                //X
            this.pVector.pos.x+=this.vVector.x;
            this.pVector.pos.y+=this.vVector.y;
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
        if(SAT.testPolygonPolygon(this.pVector.toPolygon(),testBox.pVector.toPolygon(),null)){
            brush.fillStyle="purple"
            
        }
        
        brush.fillRect(this.pVector.pos.x,this.pVector.pos.y, this.pVector.w, this.pVector.h)
    }
}

