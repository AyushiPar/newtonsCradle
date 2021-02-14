class Bob{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.1,
            density : 0.30,
        }
// this.body = Matter.Bodies.circle(x,y,20,options);
        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }
    
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push() ;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(0,0, 20,20);
        pop();
    }
}
