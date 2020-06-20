class Bob{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius)
        this.x = x;
        this.y =y;
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        fill (193,41,46);
        circle(pos.x,pos.y,this.radius);
        pop ();
    }
}