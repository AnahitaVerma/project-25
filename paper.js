class Paper
{
    constructor(x, y) 
    {
        var options = {
           
          isStatic: false,
          restitution: 0.3,
          friction:  0.5,
          density: 1.2
            
        }

      this.body = Bodies.circle(x, y,15,options);
      
        this.x = x;
        this.y = y;
        this.radius = 0.1;

        this.image= loadImage("images/paper.png")

      World.add(world, this.body);
      
}
display()
{
    var pos = this.body.position;
   imageMode(CENTER);

    push()

    translate (pos.x , pos.y)

    fill("white");

    image(this.image,0,0,50,50)

    //ellipse(0, 0, this.radius);

    pop()
  }



}