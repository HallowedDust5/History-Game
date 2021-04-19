class TextBox extends Box {
    constructor (tempWidth,tempHeight, tempx,tempy){
      super(tempWidth,tempHeight, tempx,tempy, 0,0,0,0);
    }
  
    draw(){
      brush.fillStyle="blue";
      brush.fillRect(this.x,this.y,this.width,this.height);
    }
  }