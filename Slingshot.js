class Slingshot{
    constructor(bodyA, pointB){

        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
        this.bodyA = bodyA;
        this.pointB = pointB;
    }

    display(){
 
        if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x ,pointA.y,pointB.x, pointB.y);

       
        }
    }
    fly(){
        this.slingshot.bodyA = null;
    }
    attach(bodyA){
        this.slingshot.bodyA = bodyA;
    }
}