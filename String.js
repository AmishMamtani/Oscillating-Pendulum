class String{
    constructor(bodyA,bodyB){
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 1,
            length: 300,
            density: 0.006
        }
        this.string = Constraint.create(options);
        World.add(world,this.string);
    }
    display(){
        if(this.string.bodyA){
        var pointA = this.string.bodyA.position;
        var pointB = this.string.bodyB.position;
        stroke(255);
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
