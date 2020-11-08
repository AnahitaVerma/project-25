class Dustbin {
    constructor(x, y) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 1 , 1 , options);
      this.width = 1;
      this.height = 1;
      this.image= loadImage("images/dustbingreen.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      image(this.image,0,0,200,200)
      fill("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
