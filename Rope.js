class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offestY = offsetY;

        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB:{x:this.offsetX,y:this.offestY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(6);
        
        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x+this.offestX;
        var Anchor2Y = pointB.y+this.offestY;

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

    }
}