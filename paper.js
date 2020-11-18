class paper
{
    constructor()
    {
        var options = {
            isStatic: false,
            restitution: 0.3, 
            friction: 0.5,
            density: 1.2
         }
        this.x = 200;
        this.y = 670;
        this.body = Bodies.circle(this.x, this.y,40/2, options);
        World.add(world, this.body)
    }
    display()
    {
        var posi = this.body.position;
        ellipseMode(CENTER);
        ellipse(posi.x, posi.y, 40, 40);
    }
}







